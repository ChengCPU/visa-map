import { createContext } from 'react'
interface ContextTypes { setCountrySelect:Function }

export const CountrySelectContext = createContext<ContextTypes>({} as any)