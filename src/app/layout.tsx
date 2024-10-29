import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'We Guide',
  description: 'Descrição do seu site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
