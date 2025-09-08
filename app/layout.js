// app/layout.js
import { Inter, Lato } from 'next/font/google';
import './globals.css';

// Configure Lato font
const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'SkyStruct V2 Lite - Construction Management Platform',
  description: 'Streamline your construction projects with SkyStruct V2 Lite',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}