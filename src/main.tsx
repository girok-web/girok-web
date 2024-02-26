import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from './hooks/use-overlay/OverlayProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
