'use client';
import { Provider } from "react-redux"
import { Toaster } from 'react-hot-toast';
import { store } from "@/store/store";


export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store} >
            {/* <PersistGate loading={null} persistor={persistor}> */}
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            {/* </PersistGate> */}
        </Provider>);
}



// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store } from '@/store/store';
// import { persistStore } from 'redux-persist';
// import { Toaster } from 'react-hot-toast';

// export default function MyApp({ Component, pageProps }: any) {
//   const persistor = persistStore(store);

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Component {...pageProps} />
//         <Toaster position="top-right" reverseOrder={false} />
//       </PersistGate>
//     </Provider>
//   );
// }
