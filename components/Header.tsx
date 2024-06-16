import { useMemo, useContext } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { Button, Stack, createTheme, ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles'
import GithubLogo from './GithubLogo'
import Link from 'next/link'
import LanguageSelect from './LanguageSelect'
const headerEN:string[] = ['Map', 'Table', 'Rank', 'Visa', 'FAQ']
const headerES:string[] = ['Mapa', 'Tabla', 'Rango', 'Visado', 'FAQ']
const headerPT:string[] = ['Mapa', 'Tabela', 'Classe', 'Visado', 'FAQ']
const headerFR:string[] = ['Carte', 'Tableau', 'Rang', 'Visa', 'FAQ']
const headerHR:string[] = ['Karta', 'Tablica', 'Rang', 'Viza', 'FAQ']
interface Props {
  language:string;
  setLanguage:Function;
  panzoomReset:boolean;
  setPanzoomReset:Function;
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  }
})

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const Header:React.FC<Props> = ({ language, setLanguage }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return headerEN
      case '🇪🇸ES': return headerES
      case '🇵🇹PT': return headerPT
      case '🇫🇷FR': return headerFR
      case '🇭🇷HR': return headerHR
    }
  }, [language])

  return (
    <div className={'container'}>
      <style jsx>{`
        .container {
          align-content: space-around;
          padding: 0 0.5rem;
          padding-top: 4px;
          padding-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          left: 0px;
          top: 0px;
          height: 40px;
          width: 100%;
          background-color: #111111;
          z-index: 2;
        }
        .text {
          top: 15px;
          right: 600px;
          position: absolute;
          color: #FFFFFF;
        }
        .screenshot {
          top: 13px;
          right: 550px;
          position: absolute;
          color: #FFFFFF;
        }
        ${dimensions.width > 800 && '.languageSelect {right: 40px; position: absolute;}'}
      `}</style>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={1}>
          {dimensions.width > 800 && <GithubLogo />}
          <Link href='/'><CustomizedButton variant="contained">{languageCaculation[0]}</CustomizedButton></Link>
          <Link href='/table'><CustomizedButton variant="contained">{languageCaculation[1]}</CustomizedButton></Link>
          <Link href='/rank'><CustomizedButton variant="contained">{languageCaculation[2]}</CustomizedButton></Link>
          <Link href='/visapolicy'><CustomizedButton variant="contained">{languageCaculation[3]}</CustomizedButton></Link>
          {dimensions.width > 800 && <Link href='/faq'><CustomizedButton variant="contained">{languageCaculation[4]}</CustomizedButton></Link>}
          <div className={'languageSelect'}>
            <LanguageSelect
              language={language}
              setLanguage={setLanguage}
            />
          </div>
        </Stack>
      </ThemeProvider>
    </div>
  )
}

export default Header
