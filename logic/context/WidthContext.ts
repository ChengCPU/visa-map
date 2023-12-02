import { createContext } from 'react'
interface ContextTypes { width:number }

export const WidthContext = createContext<ContextTypes>({} as any)