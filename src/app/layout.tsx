import { ReactNode } from 'react';

export const metadata = {
  title: 'We Guide',
  description: 'Descrição do seu site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-...your-integrity-hash..."
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
