'use client'
import { useState } from 'react'

export default function EditPackModal({ pack, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: pack?.title || 'Pack 1',
    titlePrompt: '',
    description: pack?.description || 'A short description of the pack\'s content and purpose.',
    descriptionPrompt: '',
    thumbnailDescription: ''
  })

  // State for navigation between versions
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0)

  // Sample versions data (in real app, this would come from props or API)
  const thumbnailVersions = ['Version 1', 'Version 2', 'Version 3']
  const titleVersions = ['Pack 1', 'Cyberpunk Dreams', 'Future Vision']
  const descriptionVersions = [
    'A short description of the pack\'s content and purpose.',
    'Explore a futuristic cityscape with neon lights and advanced technology.',
    'Immerse yourself in a world of tomorrow with stunning visuals.'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  const handleApplyThumbnail = () => {
    console.log('Thumbnail applied:', formData.thumbnailDescription)
    // Handle thumbnail apply logic here
  }

  const handleApplyTitle = () => {
    console.log('Title applied:', formData.titlePrompt)
    // Handle title apply logic here
  }

  const handleApplyDescription = () => {
    console.log('Description applied:', formData.descriptionPrompt)
    // Handle description apply logic here
  }

  // Navigation functions
  const navigateThumbnail = (e, direction) => {
    e.stopPropagation()
    if (direction === 'prev' && currentThumbnailIndex > 0) {
      setCurrentThumbnailIndex(currentThumbnailIndex - 1)
    } else if (direction === 'next' && currentThumbnailIndex < thumbnailVersions.length - 1) {
      setCurrentThumbnailIndex(currentThumbnailIndex + 1)
    }
  }

  const navigateTitle = (e, direction) => {
    e.stopPropagation()
    if (direction === 'prev' && currentTitleIndex > 0) {
      setCurrentTitleIndex(currentTitleIndex - 1)
    } else if (direction === 'next' && currentTitleIndex < titleVersions.length - 1) {
      setCurrentTitleIndex(currentTitleIndex + 1)
    }
  }

  const navigateDescription = (e, direction) => {
    e.stopPropagation()
    if (direction === 'prev' && currentDescriptionIndex > 0) {
      setCurrentDescriptionIndex(currentDescriptionIndex - 1)
    } else if (direction === 'next' && currentDescriptionIndex < descriptionVersions.length - 1) {
      setCurrentDescriptionIndex(currentDescriptionIndex + 1)
    }
  }

  return (
    <div className="edit-pack-modal-overlay" onClick={onClose}>
      <div className="edit-pack-modal" onClick={(e) => e.stopPropagation()}>
        <div className="edit-pack-modal-header">
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="edit-pack-form">
          <div className="edit-pack-content">
            <div className="edit-pack-left">
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <div className="thumbnail-preview-container">
                  <button 
                    className="nav-arrow nav-arrow-left" 
                    onClick={(e) => navigateThumbnail(e, 'prev')}
                    disabled={currentThumbnailIndex === 0}
                  >
                    ❮
                  </button>
                  <div className="thumbnail-preview">
                    <div className="thumbnail-placeholder">
                      <span className="image-icon">🇼️</span>
                    </div>
                  </div>
                  <button 
                    className="nav-arrow nav-arrow-right" 
                    onClick={(e) => navigateThumbnail(e, 'next')}
                    disabled={currentThumbnailIndex === thumbnailVersions.length - 1}
                  >
                    ❯
                  </button>
                </div>
                <textarea
                  id="thumbnailDescription"
                  name="thumbnailDescription"
                  value={formData.thumbnailDescription}
                  onChange={handleInputChange}
                  className="edit-textarea"
                  rows="1"
                  placeholder="Write down your wishes regarding the thumbnail here."
                />
                <div className="block-apply-button-container">
                  <button type="button" className="block-remake-button" onClick={() => console.log('Remake thumbnail')}>
                    Remake
                  </button>
                  <button type="button" className="block-apply-button" onClick={handleApplyThumbnail}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
            
            <div className="edit-pack-right">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <div className="title-display-container">
                  <button 
                    className="nav-arrow nav-arrow-left" 
                    onClick={(e) => navigateTitle(e, 'prev')}
                    disabled={currentTitleIndex === 0}
                  >
                    ❮
                  </button>
                  <div className="pack-title-display">
                    {titleVersions[currentTitleIndex]}
                  </div>
                  <button 
                    className="nav-arrow nav-arrow-right" 
                    onClick={(e) => navigateTitle(e, 'next')}
                    disabled={currentTitleIndex === titleVersions.length - 1}
                  >
                    ❯
                  </button>
                </div>
                <textarea
                  id="titlePrompt"
                  name="titlePrompt"
                  value={formData.titlePrompt}
                  onChange={handleInputChange}
                  className="edit-textarea"
                  rows="1"
                  placeholder="Write down your wishes regarding the title here."
                />
                <div className="block-apply-button-container">
                  <button type="button" className="block-remake-button" onClick={() => console.log('Remake title')}>
                    Remake
                  </button>
                  <button type="button" className="block-apply-button" onClick={handleApplyTitle}>
                    Apply
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <div className="description-display-container">
                  <button 
                    className="nav-arrow nav-arrow-left" 
                    onClick={(e) => navigateDescription(e, 'prev')}
                    disabled={currentDescriptionIndex === 0}
                  >
                    ❮
                  </button>
                  <div className="pack-description-display">
                    {descriptionVersions[currentDescriptionIndex]}
                  </div>
                  <button 
                    className="nav-arrow nav-arrow-right" 
                    onClick={(e) => navigateDescription(e, 'next')}
                    disabled={currentDescriptionIndex === descriptionVersions.length - 1}
                  >
                    ❯
                  </button>
                </div>
                <textarea
                  id="descriptionPrompt"
                  name="descriptionPrompt"
                  value={formData.descriptionPrompt}
                  onChange={handleInputChange}
                  className="edit-textarea"
                  rows="1"
                  placeholder="Write down your wishes regarding the description here."
                />
                <div className="block-apply-button-container">
                  <button type="button" className="block-remake-button" onClick={() => console.log('Remake description')}>
                    Remake
                  </button>
                  <button type="button" className="block-apply-button" onClick={handleApplyDescription}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          

        </form>
      </div>
    </div>
  )
}
