import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (usuario === 'usuario123' && senha === 'senha123') {
      router.push('/usuario');
    } else {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={styles.input}
      />
      {erro && <p style={styles.error}>{erro}</p>}
      <button onClick={handleLogin} style={styles.button}>Entrar</button>
      <button onClick={() => router.push('/cadastro')} style={styles.linkButton}>Criar Conta</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  input: {
    margin: '8px 0',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #333',
    backgroundColor: '#333',
    color: '#ffffff',
  },
  error: {
    color: '#ff4d4f',
    marginTop: '8px',
  },
  button: {
    padding: '12px 24px',
    marginTop: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#4CAF50',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
