'use client'
import { useState } from 'react'

export default function AnalysisForm({ onClose, title = "Generation based on analysis" }) {
  const [videoLink, setVideoLink] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedPersona, setSelectedPersona] = useState('')
  const [channelLink, setChannelLink] = useState('')
  const [showCreateStyle, setShowCreateStyle] = useState(false)
  const [showCreatePersona, setShowCreatePersona] = useState(false)
  const [personaChannelLink, setPersonaChannelLink] = useState('')

  const handleCreateStyle = () => {
    // Create the new style and set it as selected
    const newStyleName = 'Custom Style ' + Date.now() // Simple unique name
    setShowCreateStyle(false)
    setSelectedStyle(newStyleName) // Set the newly created style as selected
    setChannelLink('')
  }

  const handleCreatePersona = () => {
    // Create the new persona and set it as selected
    const newPersonaName = 'Custom Persona ' + Date.now() // Simple unique name
    setShowCreatePersona(false)
    setSelectedPersona(newPersonaName) // Set the newly created persona as selected
    setPersonaChannelLink('')
  }

  return (
    <div className="analysis-form-overlay">
      <div className="analysis-form-card">
        <div className="form-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="videoLink">
              {title === "Generation based on prompt" ? "Prompt" : "Video Link"}
            </label>
            <input
              type="text"
              id="videoLink"
              placeholder={title === "Generation based on prompt" ? "Write your own instructions" : "Insert a link to a video"}
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="form-input"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="style">Style</label>
              <select
                id="style"
                value={selectedStyle}
                onChange={(e) => {
                  setSelectedStyle(e.target.value)
                  setShowCreateStyle(e.target.value === 'create-new')
                }}
                className="form-select"
                displayEmpty
                required
              >
                <option value="" disabled hidden>Select style</option>
                <option value="without-style">Without style</option>
                <option value="wedding-classic">Wedding Classic</option>
                <option value="corporate-clean">Corporate Clean</option>
                <option value="vintage-film">Vintage Film</option>
                <option value="create-new" className="create-new-style">+ Create New Style</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="persona">Persona</label>
              <select
                id="persona"
                value={selectedPersona}
                onChange={(e) => {
                  setSelectedPersona(e.target.value)
                  setShowCreatePersona(e.target.value === 'create-new-persona')
                }}
                className="form-select"
                displayEmpty
                required
              >
                <option value="" disabled hidden>Select persona</option>
                <option value="without-persona">Without persona</option>
                <option value="persona1">Persona 1</option>
                <option value="persona2">Persona 2</option>
                <option value="persona3">Persona 3</option>
                <option value="create-new-persona" className="create-new-style">+ Create New Persona</option>
              </select>
            </div>
          </div>
          
          {showCreateStyle && (
            <div className="create-style-section">
              <div className="form-group">
                <label htmlFor="channelLink">Link to channel</label>
                <input
                  type="text"
                  id="channelLink"
                  placeholder="Insert a link to a channel"
                  value={channelLink}
                  onChange={(e) => setChannelLink(e.target.value)}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="thumbnails">Example thumbnails</label>
                <div className="upload-field-extended">
                  <input
                    type="text"
                    id="thumbnails"
                    placeholder="Upload file"
                    className="form-input-extended"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button className="create-button" onClick={handleCreateStyle}>
                  Create
                </button>
              </div>
            </div>
          )}

          {showCreatePersona && (
            <div className="create-style-section">
              <div className="form-group">
                <label htmlFor="personaThumbnails">Example thumbnails</label>
                <div className="upload-field-extended">
                  <input
                    type="text"
                    id="personaThumbnails"
                    placeholder="Upload file"
                    className="form-input-extended"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button className="create-button" onClick={handleCreatePersona}>
                  Create
                </button>
              </div>
            </div>
          )}
          
          {!showCreateStyle && !showCreatePersona && (
            <div className="form-actions">
              <button className="generate-button" onClick={onClose}>
                Generate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
