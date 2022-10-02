import Legend from './Map/Legend/Legend'
import styles from '../styles/Header.module.css'
import Link from 'next/link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header:React.FC = () => {
  return (
    <Stack direction="row" spacing={1} className={styles.container}>
      {/* <Link href='/'><Button className={styles.button} variant="contained">Home</Button></Link> */}
      <Legend />
    </Stack>
  )
}

export default Header