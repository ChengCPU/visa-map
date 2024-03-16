import { createContext } from 'react'
interface ContextTypes {[key:string]:number} //context requires type declaration, provided here

export const DiffContext = createContext<ContextTypes>({} as any)