'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Edit, Trash2, X, Save, XCircle, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import PageTemplate from '../components/PageTemplate'

interface NewsItem {
  id: number
  title: string
  subtitle: string
  image_url: string
  image_alt: string
  publish_date: string
  sort_order: number
  created_at: string
  updated_at: string
}

export default function NewsPage() {
  const { toast } = useToast()
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; item: NewsItem | null }>({ show: false, item: null })
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image_url: '',
    image_alt: '',
    publish_date: new Date().toISOString().split('T')[0],
    sort_order: 0
  })

  useEffect(() => {
    checkAdminStatus()
    fetchNewsItems()
  }, [])

  const checkAdminStatus = () => {
    if (typeof window !== 'undefined') {
      const sessionData = localStorage.getItem('captain-engineering-admin-session')
      setIsAdmin(!!sessionData)
    }
  }

  const fetchNewsItems = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('publish_date', { ascending: false })
        .limit(6)

      if (error) {
        console.error('Error fetching news:', error)
        return
      }

      setNewsItems(data || [])
    } catch (error: any) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    try {
      console.log('Starting image upload for file:', file.name, 'Size:', file.size, 'Type:', file.type)
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('حجم الصورة يجب أن يكون أقل من 5 ميجابايت')
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        throw new Error('يجب أن يكون الملف صورة')
      }
      
      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
      console.log('Uploading file with name:', fileName)
      
      const { data, error } = await supabase.storage
        .from('news_images')
        .upload(fileName, file, {
          contentType: file.type,
          upsert: false,
        })

      if (error) {
        console.error('Storage upload error:', error)
        throw new Error(`خطأ في رفع الصورة: ${error.message}`)
      }

      console.log('Upload successful, getting public URL for path:', data.path)
      
      const { data: publicUrlData } = supabase.storage
        .from('news_images')
        .getPublicUrl(data.path)

      if (publicUrlData && publicUrlData.publicUrl) {
        console.log('Public URL obtained:', publicUrlData.publicUrl)
        setFormData(prev => ({
          ...prev,
          image_url: publicUrlData.publicUrl,
          image_alt: file.name
        }))
        toast({
          title: "تم رفع الصورة",
          description: "تم رفع الصورة بنجاح",
          className: "toast-success",
        })
      } else {
        throw new Error('فشل في الحصول على رابط الصورة')
      }
    } catch (error: any) {
      console.error('Image upload error:', error)
      toast({
        title: "خطأ في رفع الصورة",
        description: error.message || 'حدث خطأ غير متوقع',
        className: "toast-error",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validate publish date
      const selectedDate = new Date(formData.publish_date)
      const currentDate = new Date()
      const minDate = new Date('2000-01-01')
      
      // Reset time to start of day for accurate comparison
      selectedDate.setHours(0, 0, 0, 0)
      currentDate.setHours(0, 0, 0, 0)
      minDate.setHours(0, 0, 0, 0)
      
      if (selectedDate > currentDate) {
        toast({
          title: "خطأ في التاريخ",
          description: "لا يمكن اختيار تاريخ في المستقبل",
          className: "toast-error",
        })
        return
      }
      
      if (selectedDate < minDate) {
        toast({
          title: "خطأ في التاريخ",
          description: "لا يمكن اختيار تاريخ قبل عام 2000",
          className: "toast-error",
        })
        return
      }
      
      if (editingItem) {
        // Update existing item
        const { error } = await supabase
          .from('news_items')
          .update(formData)
          .eq('id', editingItem.id)

        if (error) throw error

        toast({
          title: "تم تحديث الخبر",
          description: "تم تحديث الخبر بنجاح",
          className: "toast-success",
        })
      } else {
        // Create new item
        const { error } = await supabase
          .from('news_items')
          .insert([formData])

        if (error) throw error

        toast({
          title: "تم إضافة الخبر",
          description: "تم إضافة الخبر بنجاح",
          className: "toast-success",
        })
      }

      // Reset form and refresh data
      setShowAddForm(false)
      setEditingItem(null)
      setFormData({
        title: '',
        subtitle: '',
        image_url: '',
        image_alt: '',
        publish_date: new Date().toISOString().split('T')[0],
        sort_order: 0
      })
      fetchNewsItems()
    } catch (error: any) {
      toast({
        title: "خطأ في حفظ الخبر",
        description: error.message,
        className: "toast-error",
      })
    }
  }

  const handleEdit = (item: NewsItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      subtitle: item.subtitle,
      image_url: item.image_url,
      image_alt: item.image_alt,
      publish_date: item.publish_date,
      sort_order: item.sort_order
    })
  }

  const handleDelete = async (id: number) => {
    // Find the item to show in confirmation
    const itemToDelete = newsItems.find(item => item.id === id)
    if (itemToDelete) {
      setDeleteConfirm({ show: true, item: itemToDelete })
    }
  }

  const confirmDelete = async () => {
    if (!deleteConfirm.item) return

    try {
      const { error } = await supabase
        .from('news_items')
        .delete()
        .eq('id', deleteConfirm.item.id)

      if (error) throw error

      toast({
        title: "تم حذف الخبر",
        description: "تم حذف الخبر بنجاح",
        className: "toast-success",
      })
      fetchNewsItems()
    } catch (error: any) {
      toast({
        title: "خطأ في حذف الخبر",
        description: error.message,
        className: "toast-error",
      })
    } finally {
      setDeleteConfirm({ show: false, item: null })
    }
  }

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, item: null })
  }

  const cancelEdit = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      subtitle: '',
      image_url: '',
      image_alt: '',
      publish_date: new Date().toISOString().split('T')[0],
      sort_order: 0
    })
  }

  // Handle three dots menu
  const toggleMenu = (itemId: number) => {
    setOpenMenu(openMenu === itemId ? null : itemId)
  }

  const closeMenu = () => {
    setOpenMenu(null)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenu !== null) {
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [openMenu])

  return (
    <PageTemplate>
      <div className="relative h-[600px] w-full mb-8">
        <Image
          src="/engineering-construction-site.png"
          alt="موقع بناء هندسي"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">آخر الأخبار</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-center flex-1">أحدث التطورات والمستجدات</h2>
          {isAdmin && (
            <Button
              onClick={() => {
                setShowAddForm(true)
                setEditingItem(null)
                setFormData({
                  title: '',
                  subtitle: '',
                  image_url: '',
                  image_alt: '',
                  publish_date: new Date().toISOString().split('T')[0],
                  sort_order: 0
                })
              }}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="h-4 w-4 ml-2" />
              إضافة خبر جديد
            </Button>
          )}
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingItem) && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingItem ? 'تعديل الخبر' : 'إضافة خبر جديد'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false)
                  cancelEdit()
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">عنوان الخبر *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                    className="text-right"
                    placeholder="أدخل عنوان الخبر"
                  />
                </div>

                <div>
                  <Label htmlFor="publish_date">تاريخ النشر *</Label>
                  <Input
                    id="publish_date"
                    type="date"
                    value={formData.publish_date}
                    onChange={(e) => setFormData(prev => ({ ...prev, publish_date: e.target.value }))}
                    required
                    className="text-right"
                    max={new Date().toISOString().split('T')[0]}
                    min="2000-01-01"
                  />
                  
                </div>

                <div>
                  <Label htmlFor="sort_order">ترتيب العرض</Label>
                  <Input
                    id="sort_order"
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
                    className="text-right"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subtitle">تفاصيل الخبر *</Label>
                <Textarea
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  required
                  rows={3}
                  className="text-right"
                  placeholder="أدخل تفاصيل الخبر"
                />
              </div>

              <div>
                <Label htmlFor="image">صورة الخبر *</Label>
                <div className="mt-2 flex items-center space-x-4 space-x-reverse">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleImageUpload(file)
                    }}
                    className="text-right"
                  />
                  {formData.image_url ? (
                    <div className="relative">
                      <Image
                        src={formData.image_url}
                        alt="Preview"
                        width={80}
                        height={80}
                        className="rounded object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image_url: '', image_alt: '' }))}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs text-center">صورة</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3 space-x-reverse">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowAddForm(false)
                    cancelEdit()
                  }}
                >
                  <XCircle className="h-4 w-4 ml-2" />
                  إلغاء
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  <Save className="h-4 w-4 ml-2" />
                  {editingItem ? 'تحديث الخبر' : 'إضافة الخبر'}
                </Button>
              </div>
            </form>
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">جاري التحميل...</p>
          </div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد أخبار متاحة حالياً</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={item.image_url}
                    alt={item.image_alt || item.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const placeholder = target.parentElement?.querySelector('.image-placeholder')
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = 'flex'
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="image-placeholder absolute inset-0 bg-gray-100 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-gray-400 text-lg">صورة</span>
                  </div>
                  {isAdmin && (
                    <div className="absolute top-2 left-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleMenu(item.id)
                          }}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                          title="خيارات"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {openMenu === item.id && (
                          <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleEdit(item)
                                closeMenu()
                              }}
                              className="w-full px-4 py-2 text-right text-sm text-blue-600 hover:bg-blue-50 flex items-center justify-end space-x-2 space-x-reverse"
                            >
                              <Edit className="h-4 w-4" />
                              تعديل
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDelete(item.id)
                                closeMenu()
                              }}
                              className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 flex items-center justify-end space-x-2 space-x-reverse"
                            >
                              <Trash2 className="h-4 w-4" />
                              حذف
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.subtitle}</p>
                  <span className="text-sm text-gray-500">
                    {new Date(item.publish_date).toLocaleDateString('ar-LY', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Delete Confirmation Modal */}
      {deleteConfirm.show && deleteConfirm.item && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 transform transition-all">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">تأكيد الحذف</h3>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <p className="text-gray-600 mb-3 text-right">
                هل أنت متأكد من حذف هذا الخبر؟
              </p>
              <div className="bg-gray-50 rounded-lg p-3 border-r-4 border-red-500">
                <h4 className="font-medium text-gray-900 text-right mb-1">
                  {deleteConfirm.item.title}
                </h4>
                <p className="text-sm text-gray-600 text-right">
                  {deleteConfirm.item.subtitle}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 space-x-reverse justify-end">
              <Button
                onClick={cancelDelete}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                إلغاء
              </Button>
              <Button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Trash2 className="h-4 w-4 ml-2" />
                حذف
              </Button>
            </div>
          </div>
        </div>
      )}
    </PageTemplate>
  )
}
