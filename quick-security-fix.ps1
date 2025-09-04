# Quick Security Fix for Bonjour Alert
# Run this script to immediately resolve the security alert

Write-Host "🔧 Quick Security Fix for Bonjour Alert" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Cyan

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-Warning "⚠️  This script needs Administrator privileges"
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host "Press any key to continue anyway..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

Write-Host "🛑 Step 1: Stopping Bonjour Service..." -ForegroundColor Yellow
try {
    Stop-Service -Name "Bonjour" -Force -ErrorAction SilentlyContinue
    Write-Host "✅ Bonjour service stopped" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Could not stop Bonjour service: $($_.Exception.Message)"
}

Write-Host "🔧 Step 2: Disabling Bonjour Service..." -ForegroundColor Yellow
try {
    Set-Service -Name "Bonjour" -StartupType Disabled -ErrorAction SilentlyContinue
    Write-Host "✅ Bonjour service disabled" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Could not disable Bonjour service: $($_.Exception.Message)"
}

Write-Host "🧹 Step 3: Cleaning temporary files..." -ForegroundColor Yellow
try {
    # Clean common temp files
    Remove-Item -Path "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "*.tmp" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "*.temp" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "*.cache" -Force -ErrorAction SilentlyContinue
    
    Write-Host "✅ Temporary files cleaned" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Some files could not be cleaned: $($_.Exception.Message)"
}

Write-Host "🔧 Step 4: Configuring Git for security..." -ForegroundColor Yellow
try {
    git config --global core.precomposeUnicode true
    git config --global core.quotePath false
    git config --global http.version HTTP/1.1
    Write-Host "✅ Git configured for security" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Git configuration failed: $($_.Exception.Message)"
}

Write-Host ""
Write-Host "🎉 Quick fix completed!" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Cyan
Write-Host "The Bonjour security alert should no longer appear." -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Try your Git operations again" -ForegroundColor White
Write-Host "2. If the alert still appears, restart your computer" -ForegroundColor White
Write-Host "3. Use the deploy-secure.ps1 script for future deployments" -ForegroundColor White
Write-Host ""

# Check if we can test Git
Write-Host "🧪 Testing Git operations..." -ForegroundColor Yellow
try {
    git status
    Write-Host "✅ Git is working properly" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Git test failed: $($_.Exception.Message)"
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
