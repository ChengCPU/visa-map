import { createContext } from 'react'
interface ContextTypes { width:number }

export const WidthContext = createContext<ContextTypes>({} as any) //provides context object that country components pull rgb values from