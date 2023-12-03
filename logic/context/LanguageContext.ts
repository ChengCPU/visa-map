import { createContext } from 'react'
interface ContextTypes { language:string }

export const LanguageContext = createContext<ContextTypes>({} as any)