import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import styles from '../styles/Header.module.css';
interface Props {
  language:string;
  setLanguage:Function;
}

const LanguageSelect:React.FC<Props> = ({ language }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.languageSelect}>
      <Button onClick={handleClick} className={styles.button}>{language}</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>🇪🇸ES</MenuItem>
        <MenuItem onClick={handleClose}>🇵🇹PT</MenuItem>
        <MenuItem onClick={handleClose}>🇫🇷FR</MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageSelect