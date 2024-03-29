import { useContext } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import reverseSort from '../../logic/rankSorting/reverseSort'
interface Props {
  rankRef:any;
  sort:boolean;
  setSort:Function;
}

const CustomizedButtonDesktop = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 255px;
`

const CustomizedButtonMobile = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 23px;
`

const SortByOrder:React.FC<Props> = ({ rankRef, sort, setSort }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)

  return (
    <>
    {(dimensions.width <= 800) ?
    <CustomizedButtonMobile onClick={() => {
      setSort(!sort)
      reverseSort(rankRef)
    }} style={{maxWidth: '30px', minWidth: '30px'}}>{(sort) ? '⬇️' : '⬆️'}</CustomizedButtonMobile>
    :
    <CustomizedButtonDesktop onClick={() => {
      setSort(!sort)
      reverseSort(rankRef)
    }} style={{maxWidth: '30px', minWidth: '30px'}}>{(sort) ? '⬇️' : '⬆️'}</CustomizedButtonDesktop>
    }
    </>
  )
}

export default SortByOrder