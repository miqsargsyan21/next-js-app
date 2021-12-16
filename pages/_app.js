import '../styles/globals.scss'
import {AppWrapper} from "../src/context/state";

function MyApp({ Component, pageProps }) {
  return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
  )
}

export default MyApp
