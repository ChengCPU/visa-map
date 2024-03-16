import { createContext } from 'react'
interface ContextTypes {[key:string]:number}

export const DimensionsContext = createContext<ContextTypes>({} as any)