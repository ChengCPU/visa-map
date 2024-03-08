import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const FAQbutton:React.FC = () => {
  return (
    <Link href='/faq'><CustomizedButton variant="contained" size="small" style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}}>{'?'}</CustomizedButton></Link>
  )
}

export default FAQbutton