'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  Edit3
} from 'lucide-react'

// Mock data matching the demo
const initialMenuData = [
  { id: 1, category: 'Starters', name: 'Spring Rolls', price: 12.90, available: true },
  { id: 2, category: 'Starters', name: 'Tom Yum Soup', price: 14.90, available: true },
  { id: 3, category: 'Starters', name: 'Satay Chicken', price: 15.90, available: true },
  { id: 4, category: 'Main Courses', name: 'Pad Thai', price: 22.90, available: true },
  { id: 5, category: 'Main Courses', name: 'Green Curry', price: 24.90, available: true },
  { id: 6, category: 'Main Courses', name: 'Teriyaki Salmon', price: 28.90, available: false },
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

export default function StandardAdminPage() {
  const [activeTab, setActiveTab] = useState('menu')
  const [menuData, setMenuData] = useState(initialMenuData)
  const [contactData, setContactData] = useState(initialContactData)
  const [hoursData, setHoursData] = useState(initialHoursData)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateMenuItem = (id: number, field: string, value: string | number | boolean) => {
    setMenuData(prev => prev.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const tabs = [
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'contact', label: 'Contact Info', icon: Phone },
    { id: 'hours', label: 'Opening Hours', icon: Clock },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/standard"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Site
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">Basic Admin Panel</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Standard</span>
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
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-700">
                <strong>Demo Mode:</strong> Changes won't be saved permanently. This is a preview of the Basic Admin Panel.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Menu Tab */}
            {activeTab === 'menu' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Menu Management</h2>
                  <span className="text-sm text-gray-500">{menuData.length} items</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Item</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Category</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Price</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuData.map(item => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateMenuItem(item.id, 'name', e.target.value)}
                              className="w-full px-2 py-1 border border-transparent hover:border-gray-300 focus:border-primary rounded transition-colors"
                            />
                          </td>
                          <td className="py-3 px-4 text-gray-500">{item.category}</td>
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          </div>
        </div>
      </div>
    </div>
  )
}
