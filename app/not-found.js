export default function NotFound() {
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
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#9BA2AE', marginBottom: '2rem', textAlign: 'center' }}>
        The page you're looking for doesn't exist.
      </p>
      <a 
        href="/"
        style={{
          backgroundColor: '#96ff00',
          color: '#1a1a1a',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Go Home
      </a>
    </div>
  )
}
