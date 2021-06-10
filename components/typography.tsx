import { ReactNode } from 'react';

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-lg my-4">{children}</h1>;
}
