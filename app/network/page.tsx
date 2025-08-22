'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Edit, Trash2, X, Save, XCircle, MapPin, Phone, Mail, Globe, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import PageTemplate from '../components/PageTemplate'

interface NetworkLocation {
  id: number
  title: string
  location: string
  phone: string
  email: string
  type: 'location' | 'partner'
  category?: string
  sort_order: number
  created_at: string
  updated_at: string
}

export default function NetworkPage() {
  const { toast } = useToast()
  const [networkItems, setNetworkItems] = useState<NetworkLocation[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingItem, setEditingItem] = useState<NetworkLocation | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; item: NetworkLocation | null }>({ show: false, item: null })
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    phone: '',
    email: '',
    type: 'location' as 'location' | 'partner',
    category: '',
    sort_order: 0
  })

  useEffect(() => {
    checkAdminStatus()
    fetchNetworkItems()
  }, [])

  const checkAdminStatus = () => {
    if (typeof window !== 'undefined') {
      const sessionData = localStorage.getItem('captain-engineering-admin-session')
      setIsAdmin(!!sessionData)
    }
  }

  const fetchNetworkItems = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('network_items')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching network items:', error)
        return
      }

      setNetworkItems(data || [])
    } catch (error: any) {
      console.error('Error fetching network items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingItem) {
        // Update existing item
        const { error } = await supabase
          .from('network_items')
          .update(formData)
          .eq('id', editingItem.id)

        if (error) throw error

        toast({
          title: "تم تحديث العنصر",
          description: "تم تحديث العنصر بنجاح",
          className: "toast-success",
        })
      } else {
        // Create new item
        const { error } = await supabase
          .from('network_items')
          .insert([formData])

        if (error) throw error

        toast({
          title: "تم إضافة العنصر",
          description: "تم إضافة العنصر بنجاح",
          className: "toast-success",
        })
      }

      // Reset form and refresh data
      setShowAddForm(false)
      setEditingItem(null)
      setFormData({
        title: '',
        location: '',
        phone: '',
        email: '',
        type: 'location',
        category: '',
        sort_order: 0
      })
      fetchNetworkItems()
    } catch (error: any) {
      toast({
        title: "خطأ في حفظ العنصر",
        description: error.message,
        className: "toast-error",
      })
    }
  }

  const handleEdit = (item: NetworkLocation) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      location: item.location,
      phone: item.phone,
      email: item.email,
      type: item.type,
      category: item.category || '',
      sort_order: item.sort_order
    })
  }

  const handleDelete = async (id: number) => {
    const itemToDelete = networkItems.find(item => item.id === id)
    if (itemToDelete) {
      setDeleteConfirm({ show: true, item: itemToDelete })
    }
  }

  const confirmDelete = async () => {
    if (!deleteConfirm.item) return

    try {
      const { error } = await supabase
        .from('network_items')
        .delete()
        .eq('id', deleteConfirm.item.id)

      if (error) throw error

      toast({
        title: "تم حذف العنصر",
        description: "تم حذف العنصر بنجاح",
        className: "toast-success",
      })
      fetchNetworkItems()
    } catch (error: any) {
      toast({
        title: "خطأ في حذف العنصر",
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
      location: '',
      phone: '',
      email: '',
      type: 'location',
      category: '',
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

  // Filter items by type
  const locations = networkItems.filter(item => item.type === 'location')
  const partners = networkItems.filter(item => item.type === 'partner')

  return (
    <PageTemplate>
      <div className="relative h-[600px] w-full mb-8">
        <Image
          src="/industrial-engineering-facility.png"
          alt="منشأة هندسية صناعية"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">شبكة مكاتبنا وشركائنا</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-right flex-1">مواقع تواجدنا</h2>
          {isAdmin && (
            <Button
              onClick={() => {
                setShowAddForm(true)
                setEditingItem(null)
                setFormData({
                  title: '',
                  location: '',
                  phone: '',
                  email: '',
                  type: 'location',
                  category: '',
                  sort_order: 0
                })
              }}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="h-4 w-4 ml-2" />
              إضافة موقع جديد
            </Button>
          )}
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingItem) && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingItem ? 'تعديل العنصر' : 'إضافة عنصر جديد'}
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
                  <Label htmlFor="title">العنوان *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                    className="text-right"
                    placeholder="أدخل العنوان"
                  />
                </div>

                <div>
                  <Label htmlFor="type">النوع *</Label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'location' | 'partner' }))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="location">موقع</option>
                    <option value="partner">شريك</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="location">الموقع *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    required
                    className="text-right"
                    placeholder="أدخل الموقع"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="text-right"
                    placeholder="أدخل رقم الهاتف"
                  />
                </div>

                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="text-right"
                    placeholder="أدخل البريد الإلكتروني"
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

              {formData.type === 'partner' && (
                <div>
                  <Label htmlFor="category">فئة الشريك</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="text-right"
                    placeholder="مثال: شركاء التصميم، شركاء التنفيذ"
                  />
                </div>
              )}

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
                  {editingItem ? 'تحديث العنصر' : 'إضافة العنصر'}
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
        ) : (
          <>
            {/* Network Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {locations.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 relative">
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
                  <h3 className="text-xl font-semibold mb-6 text-center">{item.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span dir="ltr">{item.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>{item.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partners Network */}
            <div className="mt-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-center flex-1">شبكة الشركاء</h2>
                {isAdmin && (
                  <Button
                    onClick={() => {
                      setShowAddForm(true)
                      setEditingItem(null)
                      setFormData({
                        title: '',
                        location: '',
                        phone: '',
                        email: '',
                        type: 'partner',
                        category: '',
                        sort_order: 0
                      })
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة شريك جديد
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6 relative">
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
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    {item.category && (
                      <p className="text-sm text-gray-600 mb-4 text-center">{item.category}</p>
                    )}
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>{item.location}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        <span dir="ltr">{item.phone}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-green-600" />
                        <span>{item.email}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
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
                هل أنت متأكد من حذف هذا العنصر؟
              </p>
              <div className="bg-gray-50 rounded-lg p-3 border-r-4 border-red-500">
                <h4 className="font-medium text-gray-900 text-right mb-1">
                  {deleteConfirm.item.title}
                </h4>
                <p className="text-sm text-gray-600 text-right">
                  {deleteConfirm.item.location}
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
