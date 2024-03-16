import { createContext } from 'react'
interface ContextTypes {[key:string]:string} //context requires type declaration, provided here

export const ColorContext = createContext<ContextTypes>({} as any)