'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNavbar from '../components/TopNavbar'
import EditPackModal from '../components/EditPackModal'

export default function RequestPage() {
  const router = useRouter()
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedPack, setSelectedPack] = useState(null)

  const packs = [
    {
      id: 1,
      title: 'Pack 1',
      description: "A short description of the pack's content and purpose.",
      tip: "62% of the most popular videos in the last month had red as the dominant color in their thumbnails.",
      image: null
    },
    {
      id: 2,
      title: 'Pack 2', 
      description: "A short description of the pack's content and purpose.",
      tip: "Videos with human faces in the thumbnail get 38% more clicks on average.",
      image: null
    },
    {
      id: 3,
      title: 'Pack 3',
      description: "A short description of the pack's content and purpose.", 
      tip: "High-contrast thumbnails have a 12% higher click-through rate in your niche.",
      image: null
    }
  ]

  return (
    <main className="main-container">
      <TopNavbar />
      
      <div className="pack-page-content">
        <div className="page-container">
          <div className="pack-header">
            <button className="back-button" onClick={() => router.push('/history')}>
              ← 
            </button>
            <div className="pack-title-section">
              <h1>New request</h1>
              <p>Jul 28, 2025 at 8:13 PM</p>
            </div>
          </div>
        
        <div className="packs-grid">
          {packs.map((pack) => (
            <div key={pack.id} className="pack-card">
              <div className="pack-media">
                <div className="pack-image-placeholder">
                  <span className="image-icon">🖼️</span>
                </div>
                <div className="pack-actions">
                  <button 
                    className="edit-pack-btn" 
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedPack(pack)
                      setShowEditModal(true)
                    }}
                  >✏️</button>
                </div>
              </div>
              
              <div className="pack-info">
                <div className="pack-details">
                  <h3>{pack.title}</h3>
                </div>
                <div className="pack-description">
                  <p>{pack.description}</p>
                </div>
                
                <div className="pack-tip">
                  <span className="tip-icon">📈</span>
                  <p>{pack.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      
      {showEditModal && selectedPack && (
        <EditPackModal 
          pack={selectedPack}
          onClose={() => {
            setShowEditModal(false)
            setSelectedPack(null)
          }}
          onSave={(updatedPack) => {
            console.log('Pack updated:', updatedPack)
            // Here you would update the pack data
          }}
        />
      )}
    </main>
  )
}
