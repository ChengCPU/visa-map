import { createContext } from 'react'
interface ContextTypes { width:number, height:number}

export const DimensionsContext = createContext<ContextTypes>({} as any)