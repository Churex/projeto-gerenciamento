import { useRouter } from 'next/router';

export default function Usuario() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <p style={styles.userInfo}>Bem-vindo, usuário123</p>
        <button onClick={handleLogout} style={styles.logoutButton}>Desconectar</button>
      </header>
      <main style={styles.content}>
        <h1>Bem-vindo à sua área de usuário!</h1>
      </main>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
  },
  userInfo: {
    fontSize: '16px',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
