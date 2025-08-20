'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditRequestModal({ package: selectedPackage, onClose }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    style: 'modern',
    duration: '30',
    resolution: 'hd',
    urgency: 'standard'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally submit the order
    console.log('Order submitted:', { ...formData, package: selectedPackage })
    onClose()
    router.push('/history')
  }

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <div className="modal-header">
          <h2>Customize Your Order</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="selected-package-info">
          <h3>{selectedPackage.title}</h3>
          <p>Price: ${selectedPackage.price} or {selectedPackage.credits} credits</p>
        </div>
        
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your project title"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what you want to create..."
              rows="4"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="style">Style</label>
              <select
                id="style"
                name="style"
                value={formData.style}
                onChange={handleInputChange}
              >
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
                <option value="cinematic">Cinematic</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
              >
                <option value="15">15 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
                <option value="120">2 minutes</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="resolution">Resolution</label>
              <select
                id="resolution"
                name="resolution"
                value={formData.resolution}
                onChange={handleInputChange}
              >
                <option value="sd">SD (480p)</option>
                <option value="hd">HD (720p)</option>
                <option value="fullhd">Full HD (1080p)</option>
                <option value="4k">4K (2160p)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="urgency">Delivery</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
              >
                <option value="standard">Standard (3-5 days)</option>
                <option value="priority">Priority (1-2 days)</option>
                <option value="rush">Rush (24 hours)</option>
              </select>
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
