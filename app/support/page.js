'use client'
import { useRouter } from 'next/navigation'
import TopNavbar from '../components/TopNavbar'

export default function SupportPage() {
  const router = useRouter()

  return (
    <main className="main-container">
      <TopNavbar />
      
      <div className="support-content">
        <div className="page-container">
          <div className="support-header">
            <h1>How can we help?</h1>
            <p>We're here to help you with any questions or issues. Choose one of the options below to get in touch with our support team.</p>
          </div>
        
        <div className="support-options">
          <div className="support-card">
            <div className="support-icon video-call">
              <span>📹</span>
            </div>
            <h3>Video Call</h3>
            <p>Schedule a live call with a support agent.</p>
          </div>
          
          <div className="support-card">
            <div className="support-icon discord">
              <span>🎮</span>
            </div>
            <h3>Discord Chat</h3>
            <p>Join our server and chat with the community.</p>
          </div>
          
          <div className="support-card">
            <div className="support-icon email">
              <span>✉️</span>
            </div>
            <h3>Email Us</h3>
            <p>Send us an email and we'll get back to you.</p>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
