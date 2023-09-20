import { Button, Stack, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import LanguageSelect from './LanguageSelect';
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

const headerEN = ['Map', 'Table', 'Rank', 'Visa']
const headerES = ['Mapa', 'Tabla', 'Rango', 'Visado']
const headerPT = ['Mapa', 'Tabela', 'Classificação', 'Visado']
const headerFR = ['Carte', 'Tableau', 'Rang', 'Visa']

const Header:React.FC<Props> = ({ language, setLanguage }) => {

  const languageCaculation = () => {
    switch(language){
      case '🇬🇧EN': return headerEN
      case '🇪🇸ES': return headerES
      case '🇵🇹PT': return headerPT
      case '🇫🇷FR': return headerFR
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={1} className={styles.container}>
      <Link href='/'><CustomizedButton variant="contained">{languageCaculation()[0]}</CustomizedButton></Link>
      <Link href='/table'><CustomizedButton variant="contained">{languageCaculation()[1]}</CustomizedButton></Link>
      <Link href='/rank'><CustomizedButton variant="contained">{languageCaculation()[2]}</CustomizedButton></Link>
      <Link href='/visapolicy'><CustomizedButton variant="contained">{languageCaculation()[3]}</CustomizedButton></Link>
      <LanguageSelect
        language={language}
        setLanguage={setLanguage}
      />
    </Stack>
    </ThemeProvider>
  )
}

export default Header