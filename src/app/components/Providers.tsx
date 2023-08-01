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



// // providers.tsx

// import { persistor, store } from "@/store/store";
// import { Provider } from "react-redux";
// import { Toaster } from 'react-hot-toast';
// import { PersistGate } from 'redux-persist/integration/react';

// export default function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {children}
//         <Toaster position="top-right" reverseOrder={false} />
//       </PersistGate>
//     </Provider>
//   );
// }
