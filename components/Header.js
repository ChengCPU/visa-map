import styles from '../styles/Header.module.css'
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () => {
  return (
    <Stack direction="row" spacing={1} className={styles.header}>
      <Link href='/'><Button variant="contained">Home</Button></Link>
      <Link href='/about'><Button variant="contained">About</Button></Link>
    </Stack>
  )
}

export default Header