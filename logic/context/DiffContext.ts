import { createContext } from 'react'
interface ContextTypes {[key:string]:boolean} //context requires type declaration, provided here

export const DiffContext = createContext<ContextTypes>({} as any)