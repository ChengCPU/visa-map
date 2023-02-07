import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import fetchSortData from '../../logic/rankSorting/fetchSortData';
interface Props {
  sortBy:string;
  setSortBy:Function;
  setVisaPolicyData:Function;
  setRankRender:Function;
}

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 100px;
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
    switch(prop) {
      case 'Sort by: Total (Descending)': fetchSortData(setVisaPolicyData, setRankRender, 1, 'Descending'); break;
      case 'Sort by: Total (Ascending)': fetchSortData(setVisaPolicyData, setRankRender, 1, 'Ascending'); break;
      case 'Sort by: Visa-free (Descending)': fetchSortData(setVisaPolicyData, setRankRender, 2, 'Descending'); break;
      case 'Sort by: Visa-free (Ascending)': fetchSortData(setVisaPolicyData, setRankRender, 2, 'Ascending'); break;
      
    }
    handleClose()
  }
  
  const sortArray = ['Sort by: Total (Descending)', 'Sort by: Total (Ascending)', 'Sort by: Visa-free (Descending)', 'Sort by: Visa-free (Ascending)']
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