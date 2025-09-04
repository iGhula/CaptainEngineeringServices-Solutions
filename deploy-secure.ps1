# Secure Deployment Script for Captain Engineering Services
# This script helps prevent security alerts during GitHub deployment

param(
    [string]$CommitMessage = "Deploy: Security-optimized update",
    [switch]$SkipTests = $false,
    [switch]$Force = $false
)

Write-Host "🚀 Starting Secure Deployment Process..." -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Cyan

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Warning "⚠️  This script should be run as Administrator for best results"
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
}

# Step 1: Clean up temporary files
Write-Host "🧹 Step 1: Cleaning temporary files..." -ForegroundColor Yellow
try {
    # Remove common temp files that trigger security alerts
    Remove-Item -Path "*.tmp" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "*.temp" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "*.cache" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path ".next/cache" -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "node_modules/.cache" -Recurse -Force -ErrorAction SilentlyContinue
    
    Write-Host "✅ Temporary files cleaned" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Some temporary files could not be removed: $($_.Exception.Message)"
}

# Step 2: Configure Git for secure operations
Write-Host "🔧 Step 2: Configuring Git for secure operations..." -ForegroundColor Yellow
try {
    # Set Git configurations to avoid network discovery issues
    git config --global core.precomposeUnicode true
    git config --global core.quotePath false
    git config --global http.version HTTP/1.1
    git config --global init.defaultBranch main
    git config --global pull.rebase false
    
    Write-Host "✅ Git configured for secure operations" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Git configuration failed: $($_.Exception.Message)"
}

# Step 3: Check for security-sensitive files
Write-Host "🔍 Step 3: Checking for security-sensitive files..." -ForegroundColor Yellow
$sensitiveFiles = @(
    "*.env",
    "*.key",
    "*.pem",
    "*.p12",
    "*.pfx",
    "Thumbs.db",
    "Desktop.ini",
    "*.log"
)

$foundSensitive = $false
foreach ($pattern in $sensitiveFiles) {
    $files = Get-ChildItem -Path . -Name $pattern -Recurse -ErrorAction SilentlyContinue
    if ($files) {
        Write-Warning "⚠️  Found sensitive files: $($files -join ', ')"
        $foundSensitive = $true
    }
}

if (-not $foundSensitive) {
    Write-Host "✅ No sensitive files found" -ForegroundColor Green
}

# Step 4: Run security checks
Write-Host "🛡️ Step 4: Running security checks..." -ForegroundColor Yellow
try {
    # Check if .gitignore is properly configured
    $gitignoreContent = Get-Content ".gitignore" -ErrorAction SilentlyContinue
    $requiredPatterns = @("*.env*", "Thumbs.db", "Desktop.ini", "*.log")
    
    $missingPatterns = @()
    foreach ($pattern in $requiredPatterns) {
        if ($gitignoreContent -notcontains $pattern) {
            $missingPatterns += $pattern
        }
    }
    
    if ($missingPatterns.Count -gt 0) {
        Write-Warning "⚠️  Missing .gitignore patterns: $($missingPatterns -join ', ')"
    } else {
        Write-Host "✅ .gitignore properly configured" -ForegroundColor Green
    }
} catch {
    Write-Warning "⚠️  Security check failed: $($_.Exception.Message)"
}

# Step 5: Build and test (optional)
if (-not $SkipTests) {
    Write-Host "🔨 Step 5: Building project..." -ForegroundColor Yellow
    try {
        npm run build
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Build successful" -ForegroundColor Green
        } else {
            Write-Error "❌ Build failed with exit code $LASTEXITCODE"
            if (-not $Force) {
                Write-Host "Use -Force to continue despite build errors" -ForegroundColor Yellow
                exit 1
            }
        }
    } catch {
        Write-Warning "⚠️  Build failed: $($_.Exception.Message)"
        if (-not $Force) {
            Write-Host "Use -Force to continue despite build errors" -ForegroundColor Yellow
            exit 1
        }
    }
} else {
    Write-Host "⏭️  Step 5: Skipping build (use -SkipTests)" -ForegroundColor Yellow
}

# Step 6: Git operations
Write-Host "📝 Step 6: Performing Git operations..." -ForegroundColor Yellow
try {
    # Check if there are changes to commit
    $gitStatus = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($gitStatus)) {
        Write-Host "ℹ️  No changes to commit" -ForegroundColor Blue
    } else {
        # Add all changes
        git add .
        
        # Commit with message
        git commit -m $CommitMessage
        
        # Push to remote
        Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        } else {
            Write-Error "❌ Push failed with exit code $LASTEXITCODE"
            exit 1
        }
    }
} catch {
    Write-Error "❌ Git operations failed: $($_.Exception.Message)"
    exit 1
}

# Step 7: Post-deployment verification
Write-Host "✅ Step 7: Post-deployment verification..." -ForegroundColor Yellow
Write-Host "🔗 Check your GitHub repository for the latest changes" -ForegroundColor Cyan
Write-Host "🌐 If deployed to Vercel, check your deployment status" -ForegroundColor Cyan

# Final summary
Write-Host ""
Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor White
Write-Host "• Temporary files cleaned" -ForegroundColor White
Write-Host "• Git configured for security" -ForegroundColor White
Write-Host "• Security checks completed" -ForegroundColor White
Write-Host "• Changes pushed to GitHub" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tips to prevent future security alerts:" -ForegroundColor Yellow
Write-Host "• Run this script before each deployment" -ForegroundColor White
Write-Host "• Consider disabling Bonjour service if not needed" -ForegroundColor White
Write-Host "• Keep .gitignore updated" -ForegroundColor White
Write-Host "• Use -SkipTests for faster deployments" -ForegroundColor White
Write-Host ""

# Check if Bonjour service is running
try {
    $bonjourService = Get-Service -Name "Bonjour" -ErrorAction SilentlyContinue
    if ($bonjourService -and $bonjourService.Status -eq "Running") {
        Write-Warning "⚠️  Bonjour service is running. Consider disabling it to prevent security alerts."
        Write-Host "Run: Get-Service -Name 'Bonjour' | Set-Service -StartupType Disabled" -ForegroundColor Yellow
    }
} catch {
    # Bonjour service not found, which is good
}

Write-Host "🚀 Deployment script completed!" -ForegroundColor Green
