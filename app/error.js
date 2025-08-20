'use client'

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#0d0d0d',
      color: 'white',
      padding: '2rem'
    }}>
      <h2>Something went wrong!</h2>
      <p style={{ color: '#9BA2AE', marginBottom: '2rem' }}>
        {error?.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={reset}
        style={{
          backgroundColor: '#96ff00',
          color: '#1a1a1a',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  )
}
