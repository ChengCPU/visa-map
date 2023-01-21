import LanguageSelect from './LanguageSelect';
import Link from 'next/link';
import { Button, Stack, createTheme, ThemeProvider } from '@mui/material';
import styles from '../styles/Header.module.css';
interface Props {
  language:string;
  setLanguage:Function;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#32cd32',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  }
});


const Header:React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={1} className={styles.container}>
      <Link href='/'><Button className={styles.button} variant="contained">Home</Button></Link>
      <Link href='/table'><Button className={styles.button} variant="contained">Table</Button></Link>
      <Link href='/rank'><Button className={styles.button} variant="contained">Rank</Button></Link>
      <LanguageSelect
        language={language}
        setLanguage={setLanguage}
      />
    </Stack>
    </ThemeProvider>
  )
}

export default Header