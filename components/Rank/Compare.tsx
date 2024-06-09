import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
interface Props {
  compareToggle:boolean;
  setCompareToggle:Function;
}

const CustomizedButtonDesktop = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const Compare:React.FC<Props> = ({ compareToggle, setCompareToggle}) => {
  return (
    <div className={'container'}>
      <style jsx>{`
        .container {
          position: absolute;
        }
      `}</style>
      <CustomizedButtonDesktop  onClick={() => setCompareToggle(!compareToggle)}>Compare</CustomizedButtonDesktop>
    </div>
  )
}

export default Compare