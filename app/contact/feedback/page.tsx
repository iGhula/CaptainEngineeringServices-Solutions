'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function FeedbackPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الشكاوى والاقتراحات</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="الشكاوى والاقتراحات"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نحن نقدر آراءكم واقتراحاتكم. يرجى مشاركة ملاحظاتكم معنا لنتمكن من تحسين خدماتنا.
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
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">نوع الرسالة *</label>
                <Select>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع الرسالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complaint">شكوى</SelectItem>
                    <SelectItem value="suggestion">اقتراح</SelectItem>
                    <SelectItem value="feedback">ملاحظات</SelectItem>
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
                    <SelectItem value="design">قسم التصميم</SelectItem>
                    <SelectItem value="supervision">قسم الإشراف</SelectItem>
                    <SelectItem value="customer-service">خدمة العملاء</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">الموضوع *</label>
                <Input
                  type="text"
                  placeholder="أدخل عنوان الموضوع"
                  className="text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">التفاصيل *</label>
                <Textarea
                  placeholder="اكتب تفاصيل شكواك أو اقتراحك..."
                  className="text-right"
                  rows={6}
                  required
                />
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">سياسة التعامل مع الشكاوى</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>سيتم الرد على شكواك خلال 48 ساعة عمل</li>
                  <li>نضمن السرية التامة لجميع البيانات</li>
                  <li>سيتم متابعة الشكوى حتى حلها بشكل كامل</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
