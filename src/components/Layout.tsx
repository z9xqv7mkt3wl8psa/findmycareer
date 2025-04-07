// src/components/Layout.tsx
'use client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      
      <main>{children}</main>
      <footer style={{ padding: '1.5rem', borderTop: '1px solid #ccc', marginTop: '2rem', textAlign: 'center' }}>
        <small>© 2025 Find My Career | Built with ❤️ by Prasunet</small>
      </footer>
    </>
  );
}
