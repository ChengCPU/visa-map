import { createContext } from 'react';
interface ContextTypes {
  setSelectorLoad:any;
}

export const SelectorLoadContext = createContext<ContextTypes>({} as any);