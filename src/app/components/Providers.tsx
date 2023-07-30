'use client';
import { store } from "@/store/store"
import { Provider } from "react-redux"
import { Toaster } from 'react-hot-toast';


export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store} >
            {children}
            <Toaster position="top-right" reverseOrder={false} />
        </Provider>);
}
