import { createContext } from 'react';
interface ContextTypes {
  passportDataRef:any;
}

export const PassportDataContext = createContext<ContextTypes>({} as any);