'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    organizationType: '',
    certificate: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('تم إرسال طلب التسجيل بنجاح!')
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="text-right"
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
            className="text-right"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-right block mb-2">
            رقم الهاتف *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+218 XX XXX XXXX"
            required
            className="text-right"
          />
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service" className="text-right block mb-2">
            الدورة أو الخدمة المطلوبة *
          </Label>
          <Select onValueChange={(value) => handleChange('service', value)}>
            <SelectTrigger className="text-right">
              <SelectValue placeholder="اختر الخدمة المطلوبة" />
            </SelectTrigger>
            <SelectContent>
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
            <SelectTrigger className="text-right">
              <SelectValue placeholder="اختر نوع المؤسسة" />
            </SelectTrigger>
            <SelectContent>
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
            className="text-right"
          />
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="notes" className="text-right block mb-2">
            ملاحظات إضافية
          </Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder="أضف أي ملاحظات أو متطلبات خاصة..."
            rows={4}
            className="text-right"
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
