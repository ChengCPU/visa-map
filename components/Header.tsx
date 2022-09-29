import styles from '../styles/Header.module.css'
import Link from 'next/link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header:React.FC = () => {
  return (
    <Stack direction="row" spacing={1} className={styles.container}>
      <Link href='/'><Button className={styles.button} variant="contained">Home</Button></Link>
      <Link href='/about'><Button className={styles.button} variant="contained">About</Button></Link>
    </Stack>
  )
}

export default Header