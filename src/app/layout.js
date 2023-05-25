import './globals.scss';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/fonts/Roboto-Thin.woff2',
  display: 'swap'
});

if (typeof window !== 'undefined') {
  require('@squidit/css/dist/js/squid.min.js');
}

export const metadata = {
  title: 'Squid',
  description: 'Listagem do feed do Instagram da Squid'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
