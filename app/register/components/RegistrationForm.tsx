'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function RegistrationForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    organizationType: '',
    certificate: '',
    notes: ''
  })

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      organizationType: '',
      certificate: '',
      notes: ''
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // First check if user already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('id')
        .eq('email', formData.email)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        // PGRST116 means no rows found, which is what we want
        throw checkError
      }

      if (existingUser) {
        toast({
          title: "خطأ في التسجيل",
          description: "البريد الإلكتروني مسجل مسبقاً. الرجاء استخدام بريد إلكتروني آخر أو تسجيل الدخول.",
          className: "toast-error",
        })
        // Clear only the email field for duplicate email errors
        setFormData(prev => ({ ...prev, email: '' }))
        return
      }

      // Insert new user
      const { error } = await supabase.from('users').insert({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.organizationType,
        job_title: formData.certificate,
        interests: [formData.service],
        notes: formData.notes,
        created_at: new Date().toISOString()
      })

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation
          toast({
            title: "خطأ في التسجيل",
            description: "البريد الإلكتروني مسجل مسبقاً. الرجاء استخدام بريد إلكتروني آخر.",
            className: "toast-error",
          })
          // Clear only the email field for duplicate email errors
          setFormData(prev => ({ ...prev, email: '' }))
        } else {
          throw error
        }
        return
      }

      toast({
        title: "تم التسجيل بنجاح!",
        description: "تم إرسال طلب التسجيل بنجاح! سنتواصل معك قريباً.",
        className: "toast-success",
      })
      clearForm()
    } catch (error: any) {
      console.error('Error inserting user:', error)
      
      // Handle specific error types
      if (error.code === '23505') {
        toast({
          title: "خطأ في التسجيل",
          description: "البريد الإلكتروني مسجل مسبقاً. الرجاء استخدام بريد إلكتروني آخر.",
          className: "toast-error",
        })
        // Clear only the email field for duplicate email errors
        setFormData(prev => ({ ...prev, email: '' }))
      } else if (error.message) {
        toast({
          title: "خطأ في التسجيل",
          description: `حدث خطأ أثناء التسجيل: ${error.message}`,
          className: "toast-error",
        })
      } else {
        toast({
          title: "خطأ في التسجيل",
          description: "حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى.",
          className: "toast-error",
        })
      }
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100 backdrop-blur-sm bg-opacity-95 hover:shadow-green-100/20 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6 relative">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-right block mb-2">
            الاسم *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="أدخل اسمك الكامل"
            required
            className="text-right !font-normal placeholder:font-normal placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-right block mb-2">
            البريد الإلكتروني *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="example@email.com"
            required
            dir="ltr"
            style={{ fontFamily: 'inherit' }}
            className="text-right !font-normal !placeholder:text-[#6B7280] !placeholder:opacity-100 !placeholder:font-normal"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              // Only allow digits and limit to 10 characters
              const value = e.target.value.replace(/\D/g, '').slice(0, 10)
              handleChange('phone', value)
            }}
            placeholder="09XXXXXXXX"
            required
            dir="ltr"
            pattern="[0-9]{10}"
            title="يجب أن يكون رقم الهاتف 10 أرقام"
            style={{ fontFamily: 'inherit' }}
            className="text-right !font-normal !placeholder:text-[#6B7280] !placeholder:opacity-100 !placeholder:font-normal"
          />
          <p className="text-xs text-gray-500 mt-1">
            أدخل رقم الهاتف بدون مسافات
          </p>
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service" className="text-right block mb-2">
            الدورة أو الخدمة المطلوبة *
          </Label>
          <Select onValueChange={(value) => handleChange('service', value)}>
            <SelectTrigger className="text-right flex-row-reverse">
                             <SelectValue placeholder="اختر الخدمة المطلوبة" className="text-right !font-normal text-gray-400" />
            </SelectTrigger>
            <SelectContent dir="rtl" className="w-full" align="end">
              <SelectItem value="consultation">الاستشارات الهندسية</SelectItem>
              <SelectItem value="design">التصميم المعماري</SelectItem>
              <SelectItem value="supervision">الإشراف على التنفيذ</SelectItem>
              <SelectItem value="training">الدورات التدريبية</SelectItem>
              <SelectItem value="feasibility">دراسات الجدوى</SelectItem>
              <SelectItem value="other">أخرى</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Organization Type */}
        <div>
          <Label htmlFor="organizationType" className="text-right block mb-2">
            نوع المؤسسة *
          </Label>
          <Select onValueChange={(value) => handleChange('organizationType', value)}>
            <SelectTrigger className="text-right flex-row-reverse">
                             <SelectValue placeholder="اختر نوع المؤسسة" className="text-right !font-normal text-gray-400" />
            </SelectTrigger>
            <SelectContent dir="rtl" className="w-full" align="end">
              <SelectItem value="company">شركة</SelectItem>
              <SelectItem value="university">جامعة</SelectItem>
              <SelectItem value="institute">معهد</SelectItem>
              <SelectItem value="government">جهة حكومية</SelectItem>
              <SelectItem value="individual">فرد</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Certificate */}
        <div>
          <Label htmlFor="certificate" className="text-right block mb-2">
            الشهادة
          </Label>
          <Input
            id="certificate"
            type="text"
            value={formData.certificate}
            onChange={(e) => handleChange('certificate', e.target.value)}
            placeholder="أدخل الشهادة المطلوبة (اختياري)"
            className="text-right !font-normal placeholder:font-normal placeholder:text-gray-400"
          />
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="notes">ملاحظات إضافية</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder="أضف أي ملاحظات أو متطلبات خاصة..."
            rows={4}
            className="text-right !font-normal placeholder:font-normal placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium w-full md:w-auto"
          >
            إرسال طلب التسجيل
          </Button>
        </div>
      </form>
    </div>
  )
}
