import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
interface Props {
  collapse:boolean;
  setCollapse:Function;
}

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const LegendButton:React.FC<Props> = ({ collapse, setCollapse }) => {
  return (
    <CustomizedButton onClick={() => setCollapse(!collapse)} variant="contained" size="small" style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}}>{(collapse) ? '▼' : '▲'}</CustomizedButton>
  )
}

export default LegendButton