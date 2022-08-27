import '../styles/globals.css'
import Header from '../components/Header'
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StrictMode>
      <Header />
      <Component {...pageProps} />
      </StrictMode>
    </>
  )
}

export default MyApp