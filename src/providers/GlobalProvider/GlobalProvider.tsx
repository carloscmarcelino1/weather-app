import { ReactNode } from 'react';

import { TanstackProvider } from '../TanstackProvider';
import { ThemeProvider } from '../ThemeProvider';

type GlobalProviderProps = Readonly<{
  children: ReactNode;
}>;

export const GlobalProvider = async ({ children }: GlobalProviderProps) => (
  <TanstackProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </TanstackProvider>
);
