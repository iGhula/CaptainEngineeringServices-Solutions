'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ConsultationRequestPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">طلب استشارة</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="طلب استشارة"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نحن هنا لمساعدتك. املأ النموذج التالي وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-bold mb-2">الاسم الكامل *</label>
                  <Input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="text-right"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">البريد الإلكتروني *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    className="text-right"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">رقم الهاتف *</label>
                  <Input
                    type="tel"
                    placeholder="+218 XX XXX XXXX"
                    className="text-right"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">نوع الاستشارة *</label>
                  <Select>
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر نوع الاستشارة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultations">استشارات</SelectItem>
                      <SelectItem value="supervision">إشراف</SelectItem>
                      <SelectItem value="development-design">تطوير او تصميم</SelectItem>
                      <SelectItem value="partnership">شراكة</SelectItem>
                      <SelectItem value="training">تدريب</SelectItem>
                      <SelectItem value="employment">توظيف</SelectItem>
                      <SelectItem value="courses">دورات</SelectItem>
                      <SelectItem value="management">إدارة</SelectItem>
                      <SelectItem value="airport-services">خدمات المطار</SelectItem>
                      <SelectItem value="aviation-services">خدمات طيران</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">القسم المعني *</label>
                  <Select>
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر القسم المعني" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">قسم الهندسة</SelectItem>
                      <SelectItem value="airport">قسم المطار</SelectItem>
                      <SelectItem value="management">قسم الادارة</SelectItem>
                      <SelectItem value="training">قسم التدريب</SelectItem>
                      <SelectItem value="customer-service">خدمة العملاء</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">تفاصيل المشروع *</label>
                <Textarea
                  placeholder="اشرح تفاصيل مشروعك أو استفسارك..."
                  className="text-right"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">الميزانية التقديرية</label>
                <Select>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الميزانية التقديرية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">أقل من 50,000 دينار</SelectItem>
                    <SelectItem value="medium">50,000 - 200,000 دينار</SelectItem>
                    <SelectItem value="large">200,000 - 500,000 دينار</SelectItem>
                    <SelectItem value="xlarge">أكثر من 500,000 دينار</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">الموعد المفضل للتواصل</label>
                <Select>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الوقت المفضل للتواصل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">صباحاً (9:00 - 12:00)</SelectItem>
                    <SelectItem value="afternoon">ظهراً (12:00 - 3:00)</SelectItem>
                    <SelectItem value="evening">مساءً (3:00 - 5:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">ملاحظات هامة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>سيتم الرد على طلبك خلال 24 ساعة عمل</li>
                  <li>الاستشارة الأولية مجانية</li>
                  <li>يمكنك تحديد موعد مباشر في أحد فروعنا</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  إرسال الطلب
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
