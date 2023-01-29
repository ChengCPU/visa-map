import LanguageSelect from './LanguageSelect';
import Link from 'next/link';
import { Button, Stack, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from '../styles/Header.module.css';
interface Props {
  language:string;
  setLanguage:Function;
}

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  }
});

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`


const Header:React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={1} className={styles.container}>
      <Link href='/'><CustomizedButton variant="contained">Home</CustomizedButton></Link>
      <Link href='/table'><CustomizedButton variant="contained">Table</CustomizedButton></Link>
      <Link href='/rank'><CustomizedButton variant="contained">Rank</CustomizedButton></Link>
      <LanguageSelect
        language={language}
        setLanguage={setLanguage}
      />
    </Stack>
    </ThemeProvider>
  )
}

export default Header