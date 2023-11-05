import { createContext } from 'react'
interface ContextTypes { language:string }

export const LanguageContext = createContext<ContextTypes>({} as any) //provides context object that country components pull rgb values from