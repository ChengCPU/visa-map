import { useState, useCallback, useMemo, useContext } from 'react'
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

const sortEN:string[] = ['Sort by: Total','Sort by: Visa-free','Sort by: Alphabetical order','Sort by: Freedom of Movement','Sort by: Visa-free km2']
const sortES:string[] = ['Ordenar por: Total','Ordenar por: Visado Libre','Ordenar por: Orden alfabetico','Ordenar por: Libertad de movimiento','Ordenar por: Visado Libre km2']
const sortPT:string[] = ['Ordenar por: Total', 'Ordenar por: Sem Visto', 'Ordenar por: Ordem alfabética', 'Ordenar por: Liberdade de movimento', 'Ordenar por: Sem Visto km2']
const sortFR:string[] = ['Trier par: Total', 'Trier par: Sans Visa', 'Trier par: Ordre alphabétique', 'Trier par: Liberté de mouvement', 'Trier par: Sans Visa km2']
const sortHR:string[] = ['Sortiraj po: Ukupno','Sortiraj po: Bez vize','Sortiraj po: Abecedno','Sortiraj po: Sloboda kretanja','Sortiraj po: Bez vize km2']
const sortArray:string[] = ['Sort by: Total','Sort by: Visa-free','Sort by: Alphabetical order','Sort by: Freedom of Movement','Sort by: Visa-free km2']

const SortBy:React.FC<Props> = ({ sortBy, setSortBy, rankRef, setSort }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return sortEN
      case '🇪🇸ES': return sortES
      case '🇵🇹PT': return sortPT
      case '🇫🇷FR': return sortFR
      case '🇭🇷HR': return sortHR
    }
  }, [language])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setSort(false)
    setAnchorEl(null)
  }, [])

  const menuItemOnClick:Function = useCallback((prop) => {
    setSortBy(prop)
    switch(prop) {
      case 'Sort by: Total': fetchSortData(rankRef, 1); break
      case 'Sort by: Visa-free': fetchSortData(rankRef, 2); break
      case 'Sort by: Alphabetical order': fetchSortData(rankRef, 3); break
      case 'Sort by: Freedom of Movement': fetchSortData(rankRef, 4); break
      case 'Sort by: Visa-free km2': fetchSortData(rankRef, 5); break
    }
    handleClose()
  }, [])
  
  const renderMenuItems:Function = useCallback((sortArray:string[]) => {
    return sortArray.map(sortArray =>
      (sortBy != sortArray) && <MenuItem key={sortArray} onClick={() => menuItemOnClick(sortArray)}>{languageCaculation[sortEN.indexOf(sortArray)]}</MenuItem>
    )
  }, [anchorEl])

  return (
    <>
      {(dimensions.width <= 800) ?
      <CustomizedButtonMobile onClick={handleClick}>{languageCaculation[sortEN.indexOf(sortBy)]}</CustomizedButtonMobile>
      :
      <CustomizedButtonDesktop onClick={handleClick}>{languageCaculation[sortEN.indexOf(sortBy)]}</CustomizedButtonDesktop>
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