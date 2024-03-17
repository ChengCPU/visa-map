import { createContext } from 'react'
interface ContextTypes {[key:string]:Function}

export const CountrySelectContext = createContext<ContextTypes>({} as any)