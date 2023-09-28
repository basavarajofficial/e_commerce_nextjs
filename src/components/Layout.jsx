"use client"

import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';




 const Layout = ({ children }) => {
    return (
       <Provider store={store}>
         <PersistGate persistor={persistor} >
         <SessionProvider>
        {children}
        </SessionProvider>

         </PersistGate>
       </Provider>
    )
   
}

export default Layout;