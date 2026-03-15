import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const iconUrl = new URL('./logo.png', import.meta.url).href;
const setIcons = () => {
  const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']") ?? document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = iconUrl;
  if (!favicon.id) favicon.id = 'site-favicon';
  if (!favicon.parentNode) document.head.appendChild(favicon);

  const appleIcon = document.querySelector<HTMLLinkElement>("link[rel='apple-touch-icon']") ?? document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = iconUrl;
  if (!appleIcon.id) appleIcon.id = 'site-apple-icon';
  if (!appleIcon.parentNode) document.head.appendChild(appleIcon);
};

setIcons();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
