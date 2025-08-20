'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNavbar from '../components/TopNavbar'

export default function HistoryPage() {
  const router = useRouter()
  const [sortOrder, setSortOrder] = useState('oldest')
  const [editingTask, setEditingTask] = useState(null)
  const [tempTaskName, setTempTaskName] = useState('')
  const [orderTitles, setOrderTitles] = useState({
    1: 'New request',
    2: 'New request', 
    3: 'New request',
    4: 'Analysis of competitors',
    5: 'Summer campaign',
    6: 'Marketing assets'
  })

  const orders = [
    {
      id: 1,
      date: 'Jul 28, 2025 at 8:13 PM',
      status: 'ready'
    },
    {
      id: 2,
      date: 'Jul 4, 2025 at 6:58 PM',
      status: 'ready'
    },
    {
      id: 3,
      date: 'Jul 4, 2025 at 6:33 PM',
      status: 'ready'
    },
    {
      id: 4,
      date: 'Jun 12, 2025 at 11:21 AM',
      status: 'in-progress'
    },
    {
      id: 5,
      date: 'May 30, 2025 at 2:45 PM',
      status: 'error'
    },
    {
      id: 6,
      date: 'May 1, 2025 at 9:00 AM',
      status: 'ready'
    }
  ]

  const getStatusButton = (status) => {
    switch (status) {
      case 'ready':
        return <button className="status-button ready">Ready</button>
      case 'in-progress':
        return <button className="status-button in-progress">In progress</button>
      case 'error':
        return <button className="status-button error">Error</button>
      default:
        return <button className="status-button ready">Ready</button>
    }
  }

  return (
    <main className="main-container">
      <TopNavbar />
      
      <div className="history-content">
        <div className="page-container">
          <div className="history-header">
            <h1>History</h1>
          </div>
        
        <div className="history-section">
          <div className="section-header">
            <h2>All tasks</h2>
            <div className="sort-options">
              <button 
                className={`sort-button ${sortOrder === 'newest' ? 'active' : ''}`}
                onClick={() => setSortOrder('newest')}
              >
                Newest
              </button>
              <button 
                className={`sort-button ${sortOrder === 'oldest' ? 'active' : ''}`}
                onClick={() => setSortOrder('oldest')}
              >
                Oldest
              </button>
            </div>
          </div>
          
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-item" onClick={(e) => { if (!e.target.closest('.edit-icon')) router.push('/request'); }}>
                <div className="order-content">
                  <div className="order-title">
                    {editingTask === order.id ? (
                      <input
                        type="text"
                        value={tempTaskName}
                        onChange={(e) => setTempTaskName(e.target.value)}
                        onBlur={() => {
                          setOrderTitles(prev => ({ ...prev, [order.id]: tempTaskName }))
                          setEditingTask(null)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setOrderTitles(prev => ({ ...prev, [order.id]: tempTaskName }))
                            setEditingTask(null)
                          }
                          if (e.key === 'Escape') {
                            setEditingTask(null)
                            setTempTaskName('')
                          }
                        }}
                        className="task-rename-input"
                        autoFocus
                      />
                    ) : (
                      <span>{orderTitles[order.id]}</span>
                    )}
                    <span 
                      className="edit-icon" 
                      onClick={(e) => {
                        e.stopPropagation()
                        setEditingTask(order.id)
                        setTempTaskName(orderTitles[order.id])
                      }}
                    >✏️</span>
                  </div>
                  <div className="order-date">{order.date}</div>
                </div>
                <div className="order-actions">
                  {getStatusButton(order.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
