import { useState } from 'react';
import { Button, Menu, MenuItem, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import fetchData from '../../logic/fetchData';
interface Props {
  sortBy:string;
  setSortBy:Function;
  setVisaPolicyData:Function;
  setRankRender:Function;
}

const SortBy:React.FC<Props> = ({ sortBy, setSortBy, setVisaPolicyData, setRankRender }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemOnClick = (prop) => {
    setSortBy(prop)
    if(prop == 'Sort by: Total') {
      fetchData(setVisaPolicyData, setRankRender, 1)
    } else {
      fetchData(setVisaPolicyData, setRankRender, 2)
    }
    handleClose()
  }

  /*
    overflow-wrap: break-word;
    inline-size: 60px;
  */
  const sortArray = ['Sort by: Total', 'Sort by: Visa-free']
  const renderMenuItems = (sortArray:string[]) => {
    return sortArray.map(sortArray =>
      (sortBy != sortArray) ?
      <MenuItem key={sortArray} onClick={() => menuItemOnClick(sortArray)}>{sortArray}</MenuItem>
      : null
    )
  }

  return (
    <div>
      <button onClick={handleClick}>{sortBy}</button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {renderMenuItems(sortArray)}
      </Menu>
    </div>
  )
}

export default SortBy