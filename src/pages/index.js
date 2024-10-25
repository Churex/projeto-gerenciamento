import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (usuario === 'teste' && senha === '12345678') {
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










































// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div
//         className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol>
//             <li>
//               Get started by editing <code>src/pages/index.js</code>.
//             </li>
//             <li>Save and see your changes instantly.</li>
//           </ol>

//           <div className={styles.ctas}>
//             <a
//               className={styles.primary}
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className={styles.logo}
//                 src="/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondary}
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className={styles.footer}>
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div>
//     </>
//   );
// }
