import { useState, useCallback } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
interface Props {
  language:string;
  setLanguage:Function;
}

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const languageArray:string[] = ['🇬🇧EN', '🇪🇸ES', '🇵🇹PT', '🇫🇷FR', '🇭🇷HR']

const LanguageSelect:React.FC<Props> = ({ language, setLanguage }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItemOnClick = (prop) => {
    setLanguage(prop)
    handleClose()
  }

  const renderMenuItems:Function = useCallback((languageArray:string[]) => {
    return languageArray.map(languageArray =>
      language != languageArray && <MenuItem key={languageArray} onClick={() => menuItemOnClick(languageArray)}>{languageArray}</MenuItem>
    )
  }, [])

  return (
    <>
    <CustomizedButton onClick={handleClick}>{language}</CustomizedButton>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
    {renderMenuItems(languageArray)}
    </Menu>
    </>
  )
}

export default LanguageSelect