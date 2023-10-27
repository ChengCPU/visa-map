import { useState, useContext } from 'react'
import { LanguageContext } from '../../logic/context/LanguageContext'
import { WidthContext } from '../../logic/context/WidthContext'
import { Button, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import fetchSortData from '../../logic/rankSorting/fetchSortData'
interface Props {
  sortBy:string;
  setSortBy:Function;
  rankRef:any;
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

const sortArrayEN = ['Sort by: Total (Descending)', 'Sort by: Total (Ascending)', 'Sort by: Visa-free (Descending)', 'Sort by: Visa-free (Ascending)', 'Sort by: Alphabetical order (Descending)', 'Sort by: Alphabetical order (Ascending)', 'Sort by: Freedom of Movement (Descending)', 'Sort by: Freedom of Movement (Ascending)']
const sortArrayES = ['Ordenar por: Total (Descendente)', 'Ordenar por: Total (Ascendente)', 'Ordenar por: Visado Libre (Descendente)', 'Ordenar por: Visado Libre (Ascendente)', 'Ordenar por: Orden alfabetico (Descendente)', 'Ordenar por: Orden alfabetico (Ascendente)', 'Ordenar por: Libertad de movimiento (Descendente)', 'Ordenar por: Libertad de movimiento (Ascendente)']
const sortArrayPT = ['Ordenar por: Total (Decrescente)', 'Ordenar por: Total (Crescente)', 'Ordenar por: Sem Visto (Decrescente)', 'Ordenar por: Sem Visto (Crescente)', 'Ordenar por: Ordem alfabética (Decrescente)', 'Ordenar por: Ordem alfabética (Crescente)', 'Ordenar por: Liberdade de movimento (Decrescente)', 'Ordenar por: Liberdade de movimento (Crescente)']
const sortArrayFR = ['Trier par: Total (Décroissant)', 'Trier par: Total (Croissant)', 'Trier par: Sans Visa (Décroissant)', 'Trier par: Sans Visa (Croissant)', 'Trier par: Ordre alphabétique (Décroissant)', 'Trier par: Ordre alphabétique (Croissant)', 'Trier par: Liberté de mouvement (Décroissant)', 'Trier par: Liberté de mouvement (Croissant)']

const SortBy:React.FC<Props> = ({ sortBy, setSortBy, rankRef }) => {

  const width = useContext(WidthContext)
  const { language } = useContext(LanguageContext)

  const languageCaculation = () => {
    switch(language){
      case '🇬🇧EN': return sortArrayEN
      case '🇪🇸ES': return sortArrayES
      case '🇵🇹PT': return sortArrayPT
      case '🇫🇷FR': return sortArrayFR
    }
  }

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
      case 'Sort by: Total (Descending)': fetchSortData(rankRef, 1, 'Descending'); break;
      case 'Sort by: Total (Ascending)': fetchSortData(rankRef, 1, 'Ascending'); break;
      case 'Sort by: Visa-free (Descending)': fetchSortData(rankRef, 2, 'Descending'); break;
      case 'Sort by: Visa-free (Ascending)': fetchSortData(rankRef, 2, 'Ascending'); break;
      case 'Sort by: Alphabetical order (Descending)': fetchSortData(rankRef, 3, 'Descending'); break;
      case 'Sort by: Alphabetical order (Ascending)': fetchSortData(rankRef, 3, 'Ascending'); break;
      case 'Sort by: Freedom of Movement (Descending)': fetchSortData(rankRef, 4, 'Descending'); break;
      case 'Sort by: Freedom of Movement (Ascending)': fetchSortData(rankRef, 4, 'Ascending'); break;
    }
    handleClose()
  }
  
  const sortArray = ['Sort by: Total (Descending)', 'Sort by: Total (Ascending)', 'Sort by: Visa-free (Descending)', 'Sort by: Visa-free (Ascending)', 'Sort by: Alphabetical order (Descending)', 'Sort by: Alphabetical order (Ascending)', 'Sort by: Freedom of Movement (Descending)', 'Sort by: Freedom of Movement (Ascending)']
  const renderMenuItems = (sortArray:string[]) => {
    return sortArray.map(sortArray =>
      (sortBy != sortArray) ?
      <MenuItem key={sortArray} onClick={() => menuItemOnClick(sortArray)}>{languageCaculation()[sortArrayEN.indexOf(sortArray)]}</MenuItem>
      : null
    )
  }

  return (
    <div>
      {
      (width.width <= 800) ?
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
    </div>
  )
}

export default SortBy