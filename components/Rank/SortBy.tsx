import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import fetchData from '../../logic/fetchData';
interface Props {
  sortBy:string;
  setSortBy:Function;
  setVisaPolicyData:Function;
  setRankRender:Function;
}

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 222px;
`

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
      <CustomizedButton onClick={handleClick}>{sortBy}</CustomizedButton>
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