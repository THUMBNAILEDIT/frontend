'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function TopNavbar() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/request'
    }
    return pathname === path
  }

  return (
    <div className="navbar">
      <div className="logo" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}></div>
      
      <nav className="nav-links-container">
        <ul className="nav-links">
          <li>
            <button 
              className={`nav-button ${isActive('/') ? 'active' : ''}`}
              onClick={() => router.push('/')}
            >
              Generation
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${isActive('/history') ? 'active' : ''}`}
              onClick={() => router.push('/history')}
            >
              History
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${isActive('/payment') ? 'active' : ''}`}
              onClick={() => router.push('/payment')}
            >
              Payment
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${isActive('/support') ? 'active' : ''}`}
              onClick={() => router.push('/support')}
            >
              Support
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="nav-right">
        <div className="currency" onClick={() => router.push('/payment')} style={{ cursor: 'pointer' }}>
          <span>1,250</span>
        </div>
        <div className="profile-pic"></div>
      </div>
    </div>
  )
}
