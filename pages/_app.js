import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import MessageHeader from '../components/card-item/message-header'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <MessageHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
