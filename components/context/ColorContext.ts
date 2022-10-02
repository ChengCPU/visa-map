import { createContext } from 'react';
const defaultState = {
    value: null
}
interface ContextTypes {
    value: any;
}
export const ColorContext = createContext<ContextTypes>(defaultState);