'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNavbar from '../components/TopNavbar'
import BuyCreditsModal from '../components/BuyCreditsModal'

export default function PaymentPage() {
  const router = useRouter()
  const [showBuyCreditsModal, setShowBuyCreditsModal] = useState(false)

  return (
    <main className="main-container">
      <TopNavbar />
      
      <div className="payment-content">
        <div className="page-container">
          <div className="payment-header">
            <h1>Payment</h1>
            <p>Manage your credits and subscription.</p>
          </div>
        
        <div className="current-balance-section">
          <div className="balance-card">
            <div className="balance-info">
              <h3>Current Balance</h3>
              <div className="balance-amount">1,250 credits</div>
            </div>
            <button className="buy-credits-button" onClick={() => setShowBuyCreditsModal(true)}>Buy More Credits</button>
          </div>
        </div>
        
        <div className="subscription-section">
          <h2>Manage Monthly Plan</h2>
          <div className="plans-container">
            <div className="plan-card">
              <div className="plan-header">
                <h3>Basic</h3>
                <p>Perfect for getting started</p>
              </div>
              <div className="plan-price">$9 / month</div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>1,000 credits per month</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Standard access</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Community support</span>
                </div>
              </div>
              <button className="plan-button basic">Switch to Basic</button>
            </div>
            
            <div className="plan-card active">
              <div className="plan-header">
                <h3>Pro</h3>
                <p>For power users & creators</p>
              </div>
              <div className="plan-price">$19 / month</div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>2,500 credits per month</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Priority access</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Access to new features</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Email support</span>
                </div>
              </div>
              <button className="plan-button pro">Current Plan</button>
            </div>
            
            <div className="plan-card">
              <div className="plan-header">
                <h3>Team</h3>
                <p>Collaborate with your team</p>
              </div>
              <div className="plan-price">$49 / month</div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>7,000 credits per month</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Up to 5 members</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Shared asset library</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Dedicated support</span>
                </div>
              </div>
              <button className="plan-button team">Upgrade to Team</button>
            </div>
          </div>
        </div>
        
        <div className="billing-history-section">
          <h2>Billing History</h2>
          <div className="billing-items">
            <div className="billing-item">
              <div className="billing-info">
                <div className="billing-date">March 15, 2024</div>
                <div className="billing-description">Pro Plan Monthly Subscription</div>
              </div>
              <div className="billing-amount">$19.00</div>
              <button className="download-invoice-btn">Download</button>
            </div>
            <div className="billing-item">
              <div className="billing-info">
                <div className="billing-date">February 15, 2024</div>
                <div className="billing-description">Pro Plan Monthly Subscription</div>
              </div>
              <div className="billing-amount">$19.00</div>
              <button className="download-invoice-btn">Download</button>
            </div>
            <div className="billing-item">
              <div className="billing-info">
                <div className="billing-date">January 15, 2024</div>
                <div className="billing-description">Credits Purchase - 2,500 Credits</div>
              </div>
              <div className="billing-amount">$40.00</div>
              <button className="download-invoice-btn">Download</button>
            </div>
          </div>
        </div>
        
        <div className="card-details-section">
          <h2>Card Details</h2>
          <div className="payment-methods">
            <div className="payment-method-card">
              <div className="card-icon">💳</div>
              <div className="card-info">
                <div className="card-number">•••• •••• •••• 4242</div>
                <div className="card-details">Visa • Expires 12/26</div>
              </div>
              <button className="card-action-btn">Edit</button>
            </div>
            <button className="add-payment-method-btn">+ Add New Payment Method</button>
          </div>
        </div>
        </div>
      </div>
      
      {showBuyCreditsModal && (
        <BuyCreditsModal onClose={() => setShowBuyCreditsModal(false)} />
      )}
    </main>
  )
}
