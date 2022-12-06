import { createContext } from 'react';
const defaultState = {value:null}; //context requires type declaration, provided here
interface ContextTypes {value:any}; //context requires type declaration, provided here

export const ColorContext = createContext<ContextTypes>(defaultState); //provides context object that country components pull rgb values from