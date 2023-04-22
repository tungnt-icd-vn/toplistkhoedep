import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import '../styles/index.css'
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return <>
   <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
  </>
}

export default MyApp
