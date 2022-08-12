import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MessageInfo from '../components/message-info'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MessageInfo />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
