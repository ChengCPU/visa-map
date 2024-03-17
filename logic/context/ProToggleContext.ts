import { createContext } from 'react'
interface ContextTypes {[key:string]:boolean | Function} //context requires type declaration, provided here

export const ProToggleContext = createContext<ContextTypes>({} as any)