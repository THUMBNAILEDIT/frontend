'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNavbar from './components/TopNavbar'
import AnalysisForm from './components/AnalysisForm'

export default function Home() {
  const [showAnalysisForm, setShowAnalysisForm] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [editingTask, setEditingTask] = useState(null)
  const [taskNames, setTaskNames] = useState({
    task1: 'Wedding Video Analysis',
    task2: 'Corporate Presentation', 
    task3: 'Product Demo Video'
  })
  const [tempTaskName, setTempTaskName] = useState('')
  const router = useRouter()

  return (
    <main className="main-container">
      <TopNavbar />
      
      <div className="generation-content">
        <div className="page-container">
          <div className="content-header">
            <h1>Generation</h1>
          </div>
        
        <div className="generation-options">
          <div className="option-card" onClick={() => { setModalTitle('Generation based on analysis'); setShowAnalysisForm(true); }}>
            <div className="card-icon">
              <div className="analysis-icon">
                <div className="line-graph">
                  <div className="sparkles">
                    <span>✨</span>
                    <span>✨</span>
                  </div>
                </div>
              </div>
            </div>
            <h3>Generation based on analysis</h3>
            <p>Upload a video and we'll analyze it to create a personalized generation based on the content and style.</p>
          </div>
          
          <div className="option-card" onClick={() => { setModalTitle('Generation based on prompt'); setShowAnalysisForm(true); }}>
            <div className="card-icon">
              <div className="prompt-icon">
                <div className="text-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="pencil">✏️</div>
              </div>
            </div>
            <h3>Generation based on prompt</h3>
            <p>Describe what you want to create and we'll generate content based on your detailed prompt and specifications.</p>
          </div>
        </div>
        
        <div className="recent-generations">
          <div className="section-header">
            <h2>Recent Tasks</h2>
            <a href="#" className="view-all-link" onClick={(e) => { e.preventDefault(); router.push('/history'); }}>View All</a>
          </div>
          
          <div className="generation-list">
            <div className="generation-item" onClick={(e) => { if (!e.target.closest('.pencil-icon')) router.push('/request'); }}>
              <div className="item-content">
                <div className="item-title">
                  {editingTask === 'task1' ? (
                    <input
                      type="text"
                      value={tempTaskName}
                      onChange={(e) => setTempTaskName(e.target.value)}
                      onBlur={() => {
                        setTaskNames(prev => ({ ...prev, task1: tempTaskName }))
                        setEditingTask(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setTaskNames(prev => ({ ...prev, task1: tempTaskName }))
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
                    <span>{taskNames.task1}</span>
                  )}
                  <span 
                    className="pencil-icon" 
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditingTask('task1')
                      setTempTaskName(taskNames.task1)
                    }}
                  >✏️</span>
                </div>
                <div className="item-date">Jul 28, 2025 at 8:13 PM</div>
              </div>
              <div className="item-actions">
                <span className="ready-status">Ready</span>
              </div>
            </div>
            
            <div className="generation-item" onClick={(e) => { if (!e.target.closest('.pencil-icon')) router.push('/request'); }}>
              <div className="item-content">
                <div className="item-title">
                  {editingTask === 'task2' ? (
                    <input
                      type="text"
                      value={tempTaskName}
                      onChange={(e) => setTempTaskName(e.target.value)}
                      onBlur={() => {
                        setTaskNames(prev => ({ ...prev, task2: tempTaskName }))
                        setEditingTask(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setTaskNames(prev => ({ ...prev, task2: tempTaskName }))
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
                    <span>{taskNames.task2}</span>
                  )}
                  <span 
                    className="pencil-icon" 
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditingTask('task2')
                      setTempTaskName(taskNames.task2)
                    }}
                  >✏️</span>
                </div>
                <div className="item-date">Jul 27, 2025 at 2:45 PM</div>
              </div>
              <div className="item-actions">
                <span className="ready-status">Ready</span>
              </div>
            </div>
            
            <div className="generation-item" onClick={(e) => { if (!e.target.closest('.pencil-icon')) router.push('/request'); }}>
              <div className="item-content">
                <div className="item-title">
                  {editingTask === 'task3' ? (
                    <input
                      type="text"
                      value={tempTaskName}
                      onChange={(e) => setTempTaskName(e.target.value)}
                      onBlur={() => {
                        setTaskNames(prev => ({ ...prev, task3: tempTaskName }))
                        setEditingTask(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setTaskNames(prev => ({ ...prev, task3: tempTaskName }))
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
                    <span>{taskNames.task3}</span>
                  )}
                  <span 
                    className="pencil-icon" 
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditingTask('task3')
                      setTempTaskName(taskNames.task3)
                    }}
                  >✏️</span>
                </div>
                <div className="item-date">Jul 25, 2025 at 10:30 AM</div>
              </div>
              <div className="item-actions">
                <span className="ready-status">Ready</span>
              </div>
            </div>
          </div>
        </div>
        
          {showAnalysisForm && (
            <AnalysisForm 
              onClose={() => setShowAnalysisForm(false)}
              title={modalTitle}
            />
          )}
        </div>
      </div>
    </main>
  )
}
