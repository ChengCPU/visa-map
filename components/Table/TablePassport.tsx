import { useContext, MutableRefObject } from 'react'
import { PassportContext } from '../../logic/context/PassportContext'
import { StaticImageData } from 'next/image'
import Passport from '../Selector/Passport'
import TablePassportSVG from './TablePassportSVG'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  horizontalColumn:number;
}

const TablePassport:React.FC<Props> = ({ selectArrayRef, horizontalColumn }) => {

  const passports:{[key:string]:StaticImageData} = useContext(PassportContext)

  return (
    (selectArrayRef.current[horizontalColumn] == null) ? <TablePassportSVG /> : <Passport image={passports[selectArrayRef.current[horizontalColumn]]}/>
  )
}

export default TablePassport