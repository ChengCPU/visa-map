import { createContext } from 'react'
import { StaticImageData } from 'next/image'
interface ContextTypes {[key:string]:StaticImageData}

export const PassportContext = createContext<ContextTypes>({} as any)