import { useMemo, useContext } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { Stack, createTheme, ThemeProvider } from '@mui/material'
import GithubLogo from './GithubLogo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguageSelect from './LanguageSelect'
const headerEN:string[] = ['map','table','rank','visa','blog','faq']
const headerES:string[] = ['mapa','tabla','rango','visado','blog','faq']
const headerPT:string[] = ['mapa','tabela','classe','visado','blog','faq']
const headerFR:string[] = ['carte','tableau','rang','visa','blog','faq']
const headerHR:string[] = ['karta','tablica','rang','viza','blog','faq']
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

const Header:React.FC<Props> = ({ language, setLanguage }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)

  const router = useRouter()
  const { pathname } = useMemo(() => { return router }, [router])

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
          justify-content: ${dimensions.width > 800 ? 'center' : 'left'};
          position: fixed;
          left: 0px;
          top: 0px;
          height: 40px;
          width: 100%;
          background-color: #111111;
          z-index: 2;
        }
        .screenshot {
          top: 13px;
          right: 550px;
          position: absolute;
          color: #FFFFFF;
        }
        .map {
          ${(pathname === '/') && 'text-decoration: underline;'}
        }
        .table {
          ${(pathname.includes('/table')) && 'text-decoration: underline;'}
        }
        .rank {
          ${(pathname.includes('/rank')) && 'text-decoration: underline;'}
        }
        .visapolicy {
          ${(pathname.includes('/visapolicy')) && 'text-decoration: underline;'}
        }
        .faq {
          ${(pathname.includes('/faq')) && 'text-decoration: underline;'}
        }
        p {
          color: #FFFFFF;
          text-decoration: none;
        }
        p:visited {
          color: #FFFFFF;
          text-decoration: none;
        }
        p:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={1}>
          {dimensions.width > 800 && <GithubLogo />}
          <Link href='/'><p className={'map'}>{'/' + languageCaculation[0] + '/'}</p></Link>
          <Link href='/table'><p className={'table'}>{'/' + languageCaculation[1] + '/'}</p></Link>
          <Link href='/rank'><p className={'rank'}>{'/' + languageCaculation[2] + '/'}</p></Link>
          <Link href='/visapolicy'><p className={'visapolicy'}>{'/' + languageCaculation[3] + '/'}</p></Link>
          {dimensions.width > 800 && <Link href='/faq'><p className={'faq'}>{'/' + languageCaculation[5] + '/'}</p></Link>}
          <LanguageSelect
            language={language}
            setLanguage={setLanguage}
          />
        </Stack>
      </ThemeProvider>
    </div>
  )
}

export default Header
