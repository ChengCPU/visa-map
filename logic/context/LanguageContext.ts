import { createContext } from 'react'
interface ContextTypes {[key:string]:string}

export const LanguageContext = createContext<ContextTypes>({} as any)