'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  LayoutDashboard,
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  Mail,
  Save,
  ArrowLeft,
  DollarSign,
  Image as ImageIcon,
  Users,
  Calendar,
  QrCode,
  Plus,
  Trash2,
  Edit3,
  Star,
  Flame,
  Leaf,
  Eye,
  EyeOff,
  Upload,
  X,
  ImagePlus,
} from 'lucide-react'

// Image Upload Component with drag-and-drop
function ImageUpload({
  currentImage,
  onImageChange,
  label = 'Image',
  aspectRatio = 'square'
}: {
  currentImage: string
  onImageChange: (imageUrl: string) => void
  label?: string
  aspectRatio?: 'square' | 'wide' | 'portrait'
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const aspectClasses = {
    square: 'aspect-square',
    wide: 'aspect-video',
    portrait: 'aspect-[3/4]'
  }

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    setIsUploading(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      onImageChange(result)
      setIsUploading(false)
    }
    reader.onerror = () => {
      alert('Failed to read file')
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }, [onImageChange])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onImageChange('')
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative ${aspectClasses[aspectRatio]} w-full max-w-xs rounded-xl overflow-hidden cursor-pointer
          border-2 border-dashed transition-all duration-200
          ${isDragging
            ? 'border-primary bg-primary/5 scale-[1.02]'
            : 'border-gray-300 hover:border-primary hover:bg-gray-50'
          }
          ${isUploading ? 'opacity-50 pointer-events-none' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {currentImage ? (
          <>
            <Image
              src={currentImage}
              alt="Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
              <div className="flex gap-2">
                <div className="p-2 bg-white rounded-full shadow">
                  <Upload className="w-5 h-5 text-gray-600" />
                </div>
                <button
                  onClick={handleRemove}
                  className="p-2 bg-white rounded-full shadow hover:bg-red-50"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <ImagePlus className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Click or drag to upload</span>
            <span className="text-xs mt-1">PNG, JPG up to 5MB</span>
          </div>
        )}

        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}

// Types
type MenuItem = {
  id: number
  category: string
  name: string
  price: number
  available: boolean
  bestseller: boolean
  spicy: boolean
  vegetarian: boolean
  image: string
}

type GalleryItem = {
  id: number
  src: string
  alt: string
  category: 'food' | 'interior' | 'kitchen'
  visible: boolean
}

type TeamMember = {
  id: number
  name: string
  role: string
  image: string
  visible: boolean
}

// Mock data matching the Plus demo
const initialMenuData: MenuItem[] = [
  { id: 1, category: 'Starters', name: 'Spring Rolls', price: 12.90, available: true, bestseller: false, spicy: false, vegetarian: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { id: 2, category: 'Starters', name: 'Tom Yum Soup', price: 14.90, available: true, bestseller: true, spicy: true, vegetarian: false, image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400' },
  { id: 3, category: 'Starters', name: 'Satay Chicken', price: 15.90, available: true, bestseller: false, spicy: false, vegetarian: false, image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400' },
  { id: 4, category: 'Main Courses', name: 'Pad Thai', price: 22.90, available: true, bestseller: true, spicy: false, vegetarian: false, image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
  { id: 5, category: 'Main Courses', name: 'Green Curry', price: 24.90, available: true, bestseller: true, spicy: true, vegetarian: false, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400' },
  { id: 6, category: 'Main Courses', name: 'Teriyaki Salmon', price: 28.90, available: false, bestseller: false, spicy: false, vegetarian: false, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400' },
  { id: 7, category: 'Main Courses', name: 'Crispy Duck', price: 32.90, available: true, bestseller: true, spicy: false, vegetarian: false, image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400' },
  { id: 8, category: 'Desserts', name: 'Mango Sticky Rice', price: 12.90, available: true, bestseller: true, spicy: false, vegetarian: true, image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?w=400' },
]

const initialContactData = {
  phone: '(03) 9123 4567',
  email: 'hello@devio.co.th',
  address: '123 Chapel Street',
  suburb: 'South Yarra VIC 3141',
}

const initialHoursData = {
  monThu: { open: '11:30', close: '21:30' },
  friSat: { open: '11:30', close: '22:30' },
  sunday: { open: '12:00', close: '21:00' },
}

const initialGalleryData: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', alt: 'Restaurant interior', category: 'interior', visible: true },
  { id: 2, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', alt: 'Plated dish', category: 'food', visible: true },
  { id: 3, src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800', alt: 'Restaurant ambiance', category: 'interior', visible: true },
  { id: 4, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800', alt: 'Chef at work', category: 'kitchen', visible: true },
  { id: 5, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', alt: 'Fresh ingredients', category: 'food', visible: true },
  { id: 6, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', alt: 'Bar area', category: 'interior', visible: true },
]

const initialAboutData = {
  headline: 'A Passion for Asian Flavors',
  story: 'Founded in 2009, this restaurant has been Melbourne\'s premier destination for authentic Asian cuisine. Our chefs bring together the best of Thai, Vietnamese, Japanese, and Chinese culinary traditions.',
  mission: 'Every dish tells a story of heritage, crafted with locally-sourced ingredients and time-honored techniques passed down through generations.',
  yearsOfExcellence: 15,
}

const initialTeamData: TeamMember[] = [
  { id: 1, name: 'Chef Somchai', role: 'Executive Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400', visible: true },
  { id: 2, name: 'Lisa Chen', role: 'Sous Chef', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400', visible: true },
  { id: 3, name: 'David Park', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400', visible: true },
]

const initialReservationSettings = {
  enabled: true,
  maxPartySize: 12,
  advanceBookingDays: 30,
  timeSlotInterval: 30,
  confirmationEmail: true,
  reminderEmail: true,
}

const initialQRSettings = {
  enabled: true,
  uberEatsUrl: 'https://ubereats.com/store/devio',
  doordashUrl: 'https://doordash.com/store/devio',
  menulogUrl: 'https://menulog.com.au/devio',
}

type TabType = 'menu' | 'gallery' | 'about' | 'contact' | 'hours' | 'reservations' | 'qr'

// Modal Component
function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

// Delete Confirmation Modal
function DeleteConfirmModal({ isOpen, onClose, onConfirm, itemName }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; itemName: string }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 p-6">
        <h3 className="text-lg font-semibold mb-2">Delete Item</h3>
        <p className="text-gray-600 mb-6">Are you sure you want to delete &quot;{itemName}&quot;? This action cannot be undone.</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PlusAdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>('menu')
  const [menuData, setMenuData] = useState(initialMenuData)
  const [contactData, setContactData] = useState(initialContactData)
  const [hoursData, setHoursData] = useState(initialHoursData)
  const [galleryData, setGalleryData] = useState(initialGalleryData)
  const [aboutData, setAboutData] = useState(initialAboutData)
  const [teamData, setTeamData] = useState(initialTeamData)
  const [reservationSettings, setReservationSettings] = useState(initialReservationSettings)
  const [qrSettings, setQRSettings] = useState(initialQRSettings)
  const [saved, setSaved] = useState(false)

  // Modal states
  const [menuModalOpen, setMenuModalOpen] = useState(false)
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null)
  const [teamModalOpen, setTeamModalOpen] = useState(false)
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<{ type: 'menu' | 'gallery' | 'team'; id: number; name: string } | null>(null)

  // Form states for new items
  const [menuForm, setMenuForm] = useState<Omit<MenuItem, 'id'>>({
    category: 'Starters',
    name: '',
    price: 0,
    available: true,
    bestseller: false,
    spicy: false,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
  })
  const [galleryForm, setGalleryForm] = useState<Omit<GalleryItem, 'id'>>({
    src: '',
    alt: '',
    category: 'food',
    visible: true
  })
  const [teamForm, setTeamForm] = useState<Omit<TeamMember, 'id'>>({
    name: '',
    role: '',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    visible: true
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // Menu CRUD
  const openAddMenuModal = () => {
    setEditingMenuItem(null)
    setMenuForm({
      category: 'Starters',
      name: '',
      price: 0,
      available: true,
      bestseller: false,
      spicy: false,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
    })
    setMenuModalOpen(true)
  }

  const openEditMenuModal = (item: MenuItem) => {
    setEditingMenuItem(item)
    setMenuForm({
      category: item.category,
      name: item.name,
      price: item.price,
      available: item.available,
      bestseller: item.bestseller,
      spicy: item.spicy,
      vegetarian: item.vegetarian,
      image: item.image
    })
    setMenuModalOpen(true)
  }

  const saveMenuItem = () => {
    if (editingMenuItem) {
      setMenuData(prev => prev.map(item =>
        item.id === editingMenuItem.id ? { ...item, ...menuForm } : item
      ))
    } else {
      const newId = Math.max(...menuData.map(m => m.id), 0) + 1
      setMenuData(prev => [...prev, { id: newId, ...menuForm }])
    }
    setMenuModalOpen(false)
  }

  const updateMenuItem = (id: number, field: string, value: string | number | boolean) => {
    setMenuData(prev => prev.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  // Gallery CRUD
  const openAddGalleryModal = () => {
    setEditingGalleryItem(null)
    setGalleryForm({
      src: '',
      alt: '',
      category: 'food',
      visible: true
    })
    setGalleryModalOpen(true)
  }

  const openEditGalleryModal = (item: GalleryItem) => {
    setEditingGalleryItem(item)
    setGalleryForm({
      src: item.src,
      alt: item.alt,
      category: item.category,
      visible: item.visible
    })
    setGalleryModalOpen(true)
  }

  const saveGalleryItem = () => {
    if (editingGalleryItem) {
      setGalleryData(prev => prev.map(item =>
        item.id === editingGalleryItem.id ? { ...item, ...galleryForm } : item
      ))
    } else {
      const newId = Math.max(...galleryData.map(g => g.id), 0) + 1
      setGalleryData(prev => [...prev, { id: newId, ...galleryForm }])
    }
    setGalleryModalOpen(false)
  }

  const updateGalleryItem = (id: number, field: string, value: string | boolean) => {
    setGalleryData(prev => prev.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  // Team CRUD
  const openAddTeamModal = () => {
    setEditingTeamMember(null)
    setTeamForm({
      name: '',
      role: '',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      visible: true
    })
    setTeamModalOpen(true)
  }

  const openEditTeamModal = (member: TeamMember) => {
    setEditingTeamMember(member)
    setTeamForm({
      name: member.name,
      role: member.role,
      image: member.image,
      visible: member.visible
    })
    setTeamModalOpen(true)
  }

  const saveTeamMember = () => {
    if (editingTeamMember) {
      setTeamData(prev => prev.map(member =>
        member.id === editingTeamMember.id ? { ...member, ...teamForm } : member
      ))
    } else {
      const newId = Math.max(...teamData.map(t => t.id), 0) + 1
      setTeamData(prev => [...prev, { id: newId, ...teamForm }])
    }
    setTeamModalOpen(false)
  }

  const updateTeamMember = (id: number, field: string, value: string | boolean) => {
    setTeamData(prev => prev.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  // Delete handlers
  const confirmDelete = (type: 'menu' | 'gallery' | 'team', id: number, name: string) => {
    setItemToDelete({ type, id, name })
    setDeleteModalOpen(true)
  }

  const handleDelete = () => {
    if (!itemToDelete) return

    switch (itemToDelete.type) {
      case 'menu':
        setMenuData(prev => prev.filter(item => item.id !== itemToDelete.id))
        break
      case 'gallery':
        setGalleryData(prev => prev.filter(item => item.id !== itemToDelete.id))
        break
      case 'team':
        setTeamData(prev => prev.filter(item => item.id !== itemToDelete.id))
        break
    }

    setDeleteModalOpen(false)
    setItemToDelete(null)
  }

  const tabs = [
    { id: 'menu' as const, label: 'Menu', icon: UtensilsCrossed },
    { id: 'gallery' as const, label: 'Gallery', icon: ImageIcon },
    { id: 'about' as const, label: 'About Us', icon: Users },
    { id: 'contact' as const, label: 'Contact', icon: Phone },
    { id: 'hours' as const, label: 'Hours', icon: Clock },
    { id: 'reservations' as const, label: 'Reservations', icon: Calendar },
    { id: 'qr' as const, label: 'QR & Links', icon: QrCode },
  ]

  const categories = [...new Set(menuData.map(item => item.category))]
  const allCategories = ['Starters', 'Main Courses', 'Desserts', 'Drinks', 'Specials']

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/plus"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Site
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">Full Admin Panel</span>
                <span className="bg-accent text-secondary text-xs px-2 py-1 rounded-full font-medium">Plus</span>
              </div>
            </div>
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                saved
                  ? 'bg-green-500 text-white'
                  : 'bg-primary hover:bg-primary-dark text-white'
              }`}
            >
              <Save className="w-4 h-4" />
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Demo Notice */}
            <div className="mt-4 bg-accent/20 border border-accent rounded-xl p-4">
              <p className="text-sm text-secondary">
                <strong>Demo Mode:</strong> Changes won&apos;t be saved permanently. This is a preview of the Full Admin Panel.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-4 bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-semibold text-gray-700 mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Menu Items</span>
                  <span className="font-medium">{menuData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Gallery Images</span>
                  <span className="font-medium">{galleryData.filter(g => g.visible).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Team Members</span>
                  <span className="font-medium">{teamData.filter(t => t.visible).length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Menu Tab */}
            {activeTab === 'menu' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Menu Management</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage items, prices, and availability</p>
                  </div>
                  <button
                    onClick={openAddMenuModal}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Item
                  </button>
                </div>

                {categories.map(category => (
                  <div key={category} className="mb-8">
                    <h3 className="font-semibold text-lg text-gray-700 mb-4 flex items-center gap-2">
                      <UtensilsCrossed className="w-5 h-5 text-primary" />
                      {category}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Image</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Item Name</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Price</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-600 text-sm">Badges</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-600 text-sm">Available</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-600 text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {menuData.filter(item => item.category === category).map(item => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <input
                                  type="text"
                                  value={item.name}
                                  onChange={(e) => updateMenuItem(item.id, 'name', e.target.value)}
                                  className="w-full px-2 py-1 border border-transparent hover:border-gray-300 focus:border-primary rounded transition-colors font-medium"
                                />
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4 text-gray-400" />
                                  <input
                                    type="number"
                                    step="0.10"
                                    value={item.price}
                                    onChange={(e) => updateMenuItem(item.id, 'price', parseFloat(e.target.value))}
                                    className="w-20 px-2 py-1 border border-transparent hover:border-gray-300 focus:border-primary rounded transition-colors"
                                  />
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex justify-center gap-2">
                                  <button
                                    onClick={() => updateMenuItem(item.id, 'bestseller', !item.bestseller)}
                                    className={`p-1.5 rounded-full transition-colors ${
                                      item.bestseller ? 'bg-accent text-secondary' : 'bg-gray-100 text-gray-400'
                                    }`}
                                    title="Bestseller"
                                  >
                                    <Star className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => updateMenuItem(item.id, 'spicy', !item.spicy)}
                                    className={`p-1.5 rounded-full transition-colors ${
                                      item.spicy ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'
                                    }`}
                                    title="Spicy"
                                  >
                                    <Flame className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => updateMenuItem(item.id, 'vegetarian', !item.vegetarian)}
                                    className={`p-1.5 rounded-full transition-colors ${
                                      item.vegetarian ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                                    }`}
                                    title="Vegetarian"
                                  >
                                    <Leaf className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <button
                                  onClick={() => updateMenuItem(item.id, 'available', !item.available)}
                                  className={`w-12 h-6 rounded-full transition-colors ${
                                    item.available ? 'bg-green-500' : 'bg-gray-300'
                                  }`}
                                >
                                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                                    item.available ? 'translate-x-6' : 'translate-x-0.5'
                                  }`} />
                                </button>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <div className="flex justify-center gap-2">
                                  <button
                                    onClick={() => openEditMenuModal(item)}
                                    className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => confirmDelete('menu', item.id, item.name)}
                                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Gallery Management</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage photos displayed on the gallery page</p>
                  </div>
                  <button
                    onClick={openAddGalleryModal}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Upload className="w-4 h-4" /> Add Image
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryData.map(image => (
                    <div key={image.id} className="relative group">
                      <div className={`relative h-48 rounded-xl overflow-hidden ${!image.visible ? 'opacity-50' : ''}`}>
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateGalleryItem(image.id, 'visible', !image.visible)}
                              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                            >
                              {image.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={() => openEditGalleryModal(image)}
                              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => confirmDelete('gallery', image.id, image.alt)}
                              className="p-2 bg-white rounded-full shadow hover:bg-red-100 hover:text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <input
                          type="text"
                          value={image.alt}
                          onChange={(e) => updateGalleryItem(image.id, 'alt', e.target.value)}
                          className="text-sm text-gray-600 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary outline-none w-full"
                        />
                        <span className={`text-xs px-2 py-0.5 rounded-full ml-2 whitespace-nowrap ${
                          image.category === 'food' ? 'bg-orange-100 text-orange-600' :
                          image.category === 'interior' ? 'bg-blue-100 text-blue-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {image.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">About Us Content</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Headline</label>
                      <input
                        type="text"
                        value={aboutData.headline}
                        onChange={(e) => setAboutData(prev => ({ ...prev, headline: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Our Story</label>
                      <textarea
                        rows={4}
                        value={aboutData.story}
                        onChange={(e) => setAboutData(prev => ({ ...prev, story: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                      <textarea
                        rows={3}
                        value={aboutData.mission}
                        onChange={(e) => setAboutData(prev => ({ ...prev, mission: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="w-32">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years of Excellence</label>
                      <input
                        type="number"
                        value={aboutData.yearsOfExcellence}
                        onChange={(e) => setAboutData(prev => ({ ...prev, yearsOfExcellence: parseInt(e.target.value) }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Team Members</h3>
                    <button
                      onClick={openAddTeamModal}
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm"
                    >
                      <Plus className="w-4 h-4" /> Add Member
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {teamData.map(member => (
                      <div key={member.id} className={`relative bg-gray-50 rounded-xl p-4 ${!member.visible ? 'opacity-50' : ''}`}>
                        <div className="flex items-start gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                              className="font-semibold bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary outline-none w-full"
                            />
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                              className="text-sm text-gray-500 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary outline-none w-full mt-1"
                            />
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 flex gap-1">
                          <button
                            onClick={() => updateTeamMember(member.id, 'visible', !member.visible)}
                            className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                          >
                            {member.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => openEditTeamModal(member)}
                            className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => confirmDelete('team', member.id, member.name)}
                            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </label>
                    <input
                      type="text"
                      value={contactData.phone}
                      onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4" /> Email Address
                    </label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4" /> Address
                    </label>
                    <input
                      type="text"
                      value={contactData.address}
                      onChange={(e) => setContactData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-2"
                      placeholder="Street Address"
                    />
                    <input
                      type="text"
                      value={contactData.suburb}
                      onChange={(e) => setContactData(prev => ({ ...prev, suburb: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Suburb, State, Postcode"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Hours Tab */}
            {activeTab === 'hours' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Opening Hours</h2>

                <div className="space-y-4 max-w-md">
                  {[
                    { key: 'monThu', label: 'Monday - Thursday' },
                    { key: 'friSat', label: 'Friday - Saturday' },
                    { key: 'sunday', label: 'Sunday' },
                  ].map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-4">
                      <span className="w-40 text-gray-700 font-medium">{label}</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={hoursData[key as keyof typeof hoursData].open}
                          onChange={(e) => setHoursData(prev => ({
                            ...prev,
                            [key]: { ...prev[key as keyof typeof hoursData], open: e.target.value }
                          }))}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={hoursData[key as keyof typeof hoursData].close}
                          onChange={(e) => setHoursData(prev => ({
                            ...prev,
                            [key]: { ...prev[key as keyof typeof hoursData], close: e.target.value }
                          }))}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reservations Tab */}
            {activeTab === 'reservations' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Reservation Settings</h2>
                    <p className="text-gray-500 text-sm mt-1">Configure online booking options</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Enable Reservations</span>
                    <button
                      onClick={() => setReservationSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        reservationSettings.enabled ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                        reservationSettings.enabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className={`space-y-6 max-w-md ${!reservationSettings.enabled ? 'opacity-50 pointer-events-none' : ''}`}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Party Size</label>
                    <input
                      type="number"
                      value={reservationSettings.maxPartySize}
                      onChange={(e) => setReservationSettings(prev => ({ ...prev, maxPartySize: parseInt(e.target.value) }))}
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Advance Booking (Days)</label>
                    <input
                      type="number"
                      value={reservationSettings.advanceBookingDays}
                      onChange={(e) => setReservationSettings(prev => ({ ...prev, advanceBookingDays: parseInt(e.target.value) }))}
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot Interval (Minutes)</label>
                    <select
                      value={reservationSettings.timeSlotInterval}
                      onChange={(e) => setReservationSettings(prev => ({ ...prev, timeSlotInterval: parseInt(e.target.value) }))}
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value={15}>15 min</option>
                      <option value={30}>30 min</option>
                      <option value={60}>60 min</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reservationSettings.confirmationEmail}
                        onChange={(e) => setReservationSettings(prev => ({ ...prev, confirmationEmail: e.target.checked }))}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">Send confirmation email</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reservationSettings.reminderEmail}
                        onChange={(e) => setReservationSettings(prev => ({ ...prev, reminderEmail: e.target.checked }))}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">Send reminder email (24h before)</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* QR & Links Tab */}
            {activeTab === 'qr' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">QR Code & Order Links</h2>
                      <p className="text-gray-500 text-sm mt-1">Configure delivery platform links and QR codes</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">Show QR Code</span>
                      <button
                        onClick={() => setQRSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          qrSettings.enabled ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          qrSettings.enabled ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Uber Eats URL</label>
                      <input
                        type="url"
                        value={qrSettings.uberEatsUrl}
                        onChange={(e) => setQRSettings(prev => ({ ...prev, uberEatsUrl: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="https://ubereats.com/store/..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">DoorDash URL</label>
                      <input
                        type="url"
                        value={qrSettings.doordashUrl}
                        onChange={(e) => setQRSettings(prev => ({ ...prev, doordashUrl: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="https://doordash.com/store/..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Menulog URL</label>
                      <input
                        type="url"
                        value={qrSettings.menulogUrl}
                        onChange={(e) => setQRSettings(prev => ({ ...prev, menulogUrl: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="https://menulog.com.au/..."
                      />
                    </div>
                  </div>
                </div>

                {/* QR Code Preview */}
                {qrSettings.enabled && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">QR Code Preview</h3>
                    <div className="flex items-center gap-8">
                      <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center text-gray-400">
                          <QrCode className="w-12 h-12 mx-auto mb-2" />
                          <span className="text-xs">QR Code</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">This QR code will link to your menu page.</p>
                        <p>Customers can scan to view the full menu and order online.</p>
                        <button className="mt-4 text-primary hover:text-primary-dark font-medium">
                          Download QR Code
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Modal */}
      <Modal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        title={editingMenuItem ? 'Edit Menu Item' : 'Add Menu Item'}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              value={menuForm.name}
              onChange={(e) => setMenuForm(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. Pad Thai"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={menuForm.category}
                onChange={(e) => setMenuForm(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {allCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input
                type="number"
                step="0.10"
                value={menuForm.price}
                onChange={(e) => setMenuForm(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <ImageUpload
            currentImage={menuForm.image}
            onImageChange={(url) => setMenuForm(prev => ({ ...prev, image: url }))}
            label="Item Photo"
            aspectRatio="square"
          />

          <div className="flex flex-wrap gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={menuForm.available}
                onChange={(e) => setMenuForm(prev => ({ ...prev, available: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm">Available</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={menuForm.bestseller}
                onChange={(e) => setMenuForm(prev => ({ ...prev, bestseller: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm">Bestseller</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={menuForm.spicy}
                onChange={(e) => setMenuForm(prev => ({ ...prev, spicy: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm">Spicy</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={menuForm.vegetarian}
                onChange={(e) => setMenuForm(prev => ({ ...prev, vegetarian: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm">Vegetarian</span>
            </label>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => setMenuModalOpen(false)}
              className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveMenuItem}
              disabled={!menuForm.name}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {editingMenuItem ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Gallery Modal */}
      <Modal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        title={editingGalleryItem ? 'Edit Image' : 'Add Image'}
      >
        <div className="space-y-4">
          <ImageUpload
            currentImage={galleryForm.src}
            onImageChange={(url) => setGalleryForm(prev => ({ ...prev, src: url }))}
            label="Gallery Photo"
            aspectRatio="wide"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text / Caption</label>
            <input
              type="text"
              value={galleryForm.alt}
              onChange={(e) => setGalleryForm(prev => ({ ...prev, alt: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. Restaurant interior"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={galleryForm.category}
              onChange={(e) => setGalleryForm(prev => ({ ...prev, category: e.target.value as 'food' | 'interior' | 'kitchen' }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="food">Food</option>
              <option value="interior">Interior</option>
              <option value="kitchen">Kitchen</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={galleryForm.visible}
              onChange={(e) => setGalleryForm(prev => ({ ...prev, visible: e.target.checked }))}
              className="w-4 h-4 text-primary rounded"
            />
            <span className="text-sm">Visible on website</span>
          </label>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => setGalleryModalOpen(false)}
              className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveGalleryItem}
              disabled={!galleryForm.src || !galleryForm.alt}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {editingGalleryItem ? 'Save Changes' : 'Add Image'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Team Modal */}
      <Modal
        isOpen={teamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        title={editingTeamMember ? 'Edit Team Member' : 'Add Team Member'}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={teamForm.name}
              onChange={(e) => setTeamForm(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. John Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input
              type="text"
              value={teamForm.role}
              onChange={(e) => setTeamForm(prev => ({ ...prev, role: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. Head Chef"
            />
          </div>

          <ImageUpload
            currentImage={teamForm.image}
            onImageChange={(url) => setTeamForm(prev => ({ ...prev, image: url }))}
            label="Profile Photo"
            aspectRatio="portrait"
          />

          <label className="flex items-center gap-2 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={teamForm.visible}
              onChange={(e) => setTeamForm(prev => ({ ...prev, visible: e.target.checked }))}
              className="w-4 h-4 text-primary rounded"
            />
            <span className="text-sm">Visible on website</span>
          </label>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => setTeamModalOpen(false)}
              className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveTeamMember}
              disabled={!teamForm.name || !teamForm.role}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {editingTeamMember ? 'Save Changes' : 'Add Member'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={itemToDelete?.name || ''}
      />
    </div>
  )
}
