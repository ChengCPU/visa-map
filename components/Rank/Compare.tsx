import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
interface Props {
  compareToggle:boolean;
  setCompareToggle:Function;
  text:string;
}

const CustomizedButtonDesktop = styled(Button)`
  background-color:#32cd32;
  color:#FFFFFF;
`

const Compare:React.FC<Props> = ({ compareToggle, setCompareToggle, text}) => {
  return (
    <div className={'container'}>
      <style jsx>{`
        .container {
          position:absolute;
        }
      `}</style>
      <CustomizedButtonDesktop  onClick={() => setCompareToggle(!compareToggle)}>{text}</CustomizedButtonDesktop>
    </div>
  )
}

export default Compare