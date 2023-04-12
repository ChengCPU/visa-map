import { createContext } from 'react';
interface ContextTypes { setCountrySelect:Function };

export const CountrySelectContext = createContext<ContextTypes>({} as any); //provides context object that country components pull rgb values from