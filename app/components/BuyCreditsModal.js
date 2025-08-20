'use client'
import { useState } from 'react'

export default function BuyCreditsModal({ onClose }) {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const creditPackages = [
    { credits: 500, price: 10, popular: false },
    { credits: 1000, price: 18, popular: false },
    { credits: 2500, price: 40, popular: true },
    { credits: 5000, price: 75, popular: false }
  ]

  return (
    <div className="buy-credits-overlay">
      <div className="buy-credits-modal">
        <div className="modal-header">
          <h2>Buy Credits</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="packages-grid">
          {creditPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card ${selectedPackage === index ? 'selected' : ''}`}
              onClick={() => setSelectedPackage(index)}
            >
              <div className="package-credits">{pkg.credits} Credits</div>
              <div className="package-price">${pkg.price}</div>
              <div className="price-per-credit">${(pkg.price / pkg.credits).toFixed(3)} per credit</div>
            </div>
          ))}
        </div>
        
        <div className="modal-actions">
          <button className="purchase-button" disabled={selectedPackage === null}>
            Purchase Credits
          </button>
        </div>
      </div>
    </div>
  )
}
