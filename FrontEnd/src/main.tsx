import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { ErrorBoundary } from "react-error-boundary";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={
      <div className='flex top-[50%] left-[50%]'>
        <h2>Something Went Wrong !!!</h2>
        <p>Please reloads </p>
      </div>
    }>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
      </ClerkProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
