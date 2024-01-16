import { useState, useContext } from 'react'
import { LanguageContext } from '../../logic/context/LanguageContext'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import { Button, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import fetchSortData from '../../logic/rankSorting/fetchSortData'
interface Props {
  sortBy:string;
  setSortBy:Function;
  rankRef:any;
  setSort:Function;
}

const CustomizedButtonDesktop = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 250px;
`
const CustomizedButtonMobile = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
  left: 18px;
`

const sortArrayEN = ['Sort by: Total','Sort by: Visa-free','Sort by: Alphabetical order','Sort by: Freedom of Movement','Sort by: Visa-free km2']
const sortArrayES = ['Ordenar por: Total','Ordenar por: Visado Libre','Ordenar por: Orden alfabetico','Ordenar por: Libertad de movimiento','Ordenar por: Visado Libre km2']
const sortArrayPT = ['Ordenar por: Total', 'Ordenar por: Sem Visto', 'Ordenar por: Ordem alfabética', 'Ordenar por: Liberdade de movimento', 'Ordenar por: Sem Visto km2']
const sortArrayFR = ['Trier par: Total', 'Trier par: Sans Visa', 'Trier par: Ordre alphabétique', 'Trier par: Liberté de mouvement', 'Trier par: Sans Visa km2']

const SortBy:React.FC<Props> = ({ sortBy, setSortBy, rankRef, setSort }) => {

  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  const languageCaculation = () => {
    switch(language){
      case '🇬🇧EN': return sortArrayEN
      case '🇪🇸ES': return sortArrayES
      case '🇵🇹PT': return sortArrayPT
      case '🇫🇷FR': return sortArrayFR
    }
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setSort(false)
    setAnchorEl(null)
  }
  const menuItemOnClick = (prop) => {
    setSortBy(prop)
    switch(prop) {
      case 'Sort by: Total': fetchSortData(rankRef, 1); break
      case 'Sort by: Visa-free': fetchSortData(rankRef, 2); break
      case 'Sort by: Alphabetical order': fetchSortData(rankRef, 3); break
      case 'Sort by: Freedom of Movement': fetchSortData(rankRef, 4); break
      case 'Sort by: Visa-free km2': fetchSortData(rankRef, 5); break
    }
    handleClose()
  }
  
  const sortArray = ['Sort by: Total','Sort by: Visa-free','Sort by: Alphabetical order','Sort by: Freedom of Movement','Sort by: Visa-free km2']
  const renderMenuItems = (sortArray:string[]) => {
    return sortArray.map(sortArray =>
      (sortBy != sortArray) ?
      <MenuItem key={sortArray} onClick={() => menuItemOnClick(sortArray)}>{languageCaculation()[sortArrayEN.indexOf(sortArray)]}</MenuItem>
      : null
    )
  }

  return (
    <>
      {(dimensions.width <= 800) ?
      <CustomizedButtonMobile onClick={handleClick}>{languageCaculation()[sortArrayEN.indexOf(sortBy)]}</CustomizedButtonMobile>
      :
      <CustomizedButtonDesktop onClick={handleClick}>{languageCaculation()[sortArrayEN.indexOf(sortBy)]}</CustomizedButtonDesktop>
      }
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
    </>
  )
}

export default SortBy