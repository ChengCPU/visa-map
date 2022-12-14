import LanguageSelect from './LanguageSelect';
import Link from 'next/link';
import { Button, Stack } from '@mui/material';
import styles from '../styles/Header.module.css';
interface Props {
  language:string;
  setLanguage:Function;
}

const Header:React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <Stack direction="row" spacing={1} className={styles.container}>
      <Link href='/'><Button className={styles.button} variant="contained">Home</Button></Link>
      <Link href='/table'><Button className={styles.button} variant="contained">Table</Button></Link>
      <Link href='/stats'><Button className={styles.button} variant="contained">Stats</Button></Link>
      <LanguageSelect
        language={language}
        setLanguage={setLanguage}
      />
    </Stack>
  )
}

export default Header