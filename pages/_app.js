import '../styles/globals.css'
import {configureStore} from '@reduxjs/toolkit'
import { Reducer } from '../store/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer:{
      items:Reducer,
    },
    middleware:[thunk]
  })
  return (
    <Provider store={store}>
         <Component {...pageProps} />
    </Provider>
  
  )
}

export default MyApp
