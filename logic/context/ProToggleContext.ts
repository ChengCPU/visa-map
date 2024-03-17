import { createContext } from 'react'
interface ContextTypes {proToggle:boolean;setProToggle:Function} //context requires type declaration, provided here

export const ProToggleContext = createContext<ContextTypes>({} as any)