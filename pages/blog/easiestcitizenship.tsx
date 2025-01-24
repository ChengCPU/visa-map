import { useState, useEffect, useCallback, useContext } from 'react'
import { PassportDataContext } from '../../logic/context/PassportDataContext'
import { SelectorLoadContext } from '../../logic/context/SelectorLoadContext'
import Head from 'next/head'
import Script from 'next/script'
import argentina from '../../components/Blog/EasiestCitizenship/images/argentina.png'
import peru from '../../components/Blog/EasiestCitizenship/images/peru.png'
import dominicanRepublic from '../../components/Blog/EasiestCitizenship/images/dominicanRepublic.png'
import ireland from '../../components/Blog/EasiestCitizenship/images/ireland.png'
import ecuador from '../../components/Blog/EasiestCitizenship/images/ecuador.png'
import canada from '../../components/Blog/EasiestCitizenship/images/canada.png'
import paraguay from '../../components/Blog/EasiestCitizenship/images/paraguay.png'
import brazil from '../../components/Blog/EasiestCitizenship/images/brazil.png'
import unitedStates from '../../components/Blog/EasiestCitizenship/images/unitedStates.png'
import armenia from '../../components/Blog/EasiestCitizenship/images/armenia.png'
import bolivia from '../../components/Blog/EasiestCitizenship/images/bolivia.png'
import IndividualPassport from '../../components/Blog/IndividualPassport'
import worldMap from '../../components/Blog/EasiestCitizenship/images/map.png'
import MessageBox from '../../components/Blog/MessageBox'
import VisaTable from '../../components/Blog/VisaTable'
import ArticleTable from '../../components/Blog/ArticleTable'
import AdBlog from '../../components/Ads/AdBlog'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper } from '@mui/material'

const textRed:{[key:string]:string} = {
  position:'relative',
  padding:'4px 12px',
  borderRadius:'8px',
  backgroundColor:'rgb(255,0,0)',
  display:'inline-block'
}

const textGreen:{[key:string]:string} = {
  padding:'4px 12px',
  borderRadius:'8px',
  backgroundColor:'rgb(50,205,50)',
  display:'inline-block'
}

type dataType = { name:string;residency:number;permanentResidency:number;dualCitizenship:string;militaryService:string;languageRequirement:string }
const data = ( name:string,residency:number,permanentResidency:number,dualCitizenship:string,militaryService:string,languageRequirement:string ):dataType => { return { name,residency,permanentResidency,dualCitizenship,militaryService,languageRequirement }}

const rows = [
  data('🇦🇷 Argentina',2,99,'Yes','No','Yes'),
  data('🇪🇨 Ecuador',3,99,'Yes','No','Yes'),
  data('🇵🇪 Peru',2,99,'Yes','No','Yes'),
  data('🇩🇴 Dominican Republic',2,99,'Yes','No','Yes'),
  data('🇨🇦 Canada',99,3,'Yes','No','Yes'),
  data('🇮🇪 Ireland',5,99,'Yes','No','No'),
  data('🇺🇸 United States',99,5,'Yes','No','Yes'),
  data('🇧🇷 Brazil',99,4,'Yes','Yes','Yes'),
  data('🇵🇾 Paraguay',99,3,'Yes','Yes','Yes'),
  data('🇦🇲 Armenia',3,99,'Yes','Yes','Yes'),
  data('🇧🇴 Bolivia',3,99,'Yes','No','Yes')
]

const descendingComparator = (a, b, orderBy) => {
  if(b[orderBy] < a[orderBy]) {
    return -1
  }

  if(b[orderBy] > a[orderBy]) {
    return 1
  }

  return 0
}

const getComparator = (order:string, orderBy:string) => {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if(order !== 0) {
      return order
    }
    return a[1] - b[1]
  })

  return stabilizedThis.map((el) => el[0])
}

const EasiestCitizenship:React.FC = () => {
  const { passportDataRef } = useContext(PassportDataContext)
  const { setSelectorLoad } = useContext(SelectorLoadContext)

  useEffect(() => {
    setSelectorLoad(false)
  }, [])
  
  const [order, setOrder] = useState<string>('asc')
  const [orderBy, setOrderBy] = useState<string>('residency')

  const handleRequestSort = useCallback((event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }, [order, orderBy])

  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147951612524944" crossOrigin="anonymous"></Script>
    <Head>
      <title>{'Visa-map'}</title>
      <meta name='viewport' content='width=device-width, user-scalable=no'></meta>
      <link rel='shortcut icon' href='/favicon.png' />
    </Head>
    <div className={'background'}>
      <style jsx>{`
        .background {
          background-color: #111111;
          min-height: 100vh;
          margin-top: 30px;
          padding-top: 30px;
          padding-bottom: 20px;
        }
        .container {
          margin: 0 auto;
          max-width: 1000px;
          padding: 0 15px;
        }
        #author {
          font-style:italic;
          padding-left: 10px;
        }
        #date {
          font-size:0.9em;
          padding-left: 10px;
        }
        #main {
          position: relative;
          padding-top: 10px;
          padding-left: 10px;
        }
        p {
          margin-left:10px;
          margin-right:10px;
          margin-bottom:1.2em;
          color:#FFFFFF;
        }
        .spacer {
          height: 1px;
          background-color: grey;
          margin: 20px 0;
        }
        h1, li, strong {
          color:#FFFFFF;
        }
      `}</style>
      <div className={'container'}>
        <div style={{backgroundImage: `url(${worldMap.src})`,backgroundSize: 'cover',backgroundPosition: 'center',height: '200px',width: '100%'}}>
          <h1 id={'main'}>{'Which country is the easiest to naturalize in?'}</h1>
          <p id={'author'}>{'Written by CCPU'}</p>
          <p id={'date'}>{'January 4, 2024'}</p>
        </div>
          <p>{'The ease of naturalization can vary based on several factors, such as how easily one can obtain residency, whether permanent residency is required, whether multiple nationalities are allowed, language proficiency requirements, military service obligations, among other requirements.'}</p>
          <p>{'The first step toward naturalization is obtaining a residence permit, and countries have different policies for this. Some provide residency through investment programs, while others require employment, family reunification, or refugee status. The complexity and cost of these processes can greatly affect how easily someone can become a resident.'}</p>
          <p>{'Residency can be divided into two categories: temporary residency and permanent residency.'}</p>
          <MessageBox text={'Temporary residency is granted for a limited time and is usually dependent on meeting specific conditions, such as employment, investment, or study.'} />
          <MessageBox text={'Permanent residency allows a person to stay in a country indefinitely, typically without any conditions to maintain the status. It is usually harder to obtain than temporary residency and is granted to temporary residents who meet the specific requirements set by each country, usually after a designated period of time.'} />
          <AdBlog />
          <p>{'When applying for citizenship, countries state the amount of days per year that you must spend physically present in the country to be eligible for naturalization. This is called a '}<strong>{'physical presence requirement.'}</strong></p>
          <p>{'Other countries don\'t have a physical presence requirement, but instead require proof of ties to the country. These can be rental contracts or proof of property ownership, setting up a business, recurring bills, etc.'}</p>
          <p><strong>{'Below is a summary of naturalization requirements for each country.'}</strong></p>
        <TableContainer component={Paper} style={{ backgroundColor:'#222' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    onClick={(event) => handleRequestSort(event, 'name')}
                    style={{ color:'#FFFFFF' }}
                  >{'Country'}</TableSortLabel>
                </TableCell>
                <TableCell align="right" style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'residency'}
                    onClick={(event) => handleRequestSort(event, 'residency')}
                    style={{ color:'#FFFFFF' }}
                  >{'Residency (Years)'}</TableSortLabel>
                </TableCell>
                <TableCell align="right" style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'permanentResidency'}
                    onClick={(event) => handleRequestSort(event, 'permanentResidency')}
                    style={{ color:'#FFFFFF' }}
                  >{'Permanent Residency (Years)'}</TableSortLabel>
                </TableCell>
                <TableCell align="right" style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'dualCitizenship'}
                    onClick={(event) => handleRequestSort(event, 'dualCitizenship')}
                    style={{ color:'#FFFFFF' }}
                  >{'Dual Citizenship'}</TableSortLabel>
                </TableCell>
                <TableCell align="right" style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'militaryService'}
                    onClick={(event) => handleRequestSort(event, 'militaryService')}
                    style={{ color:'#FFFFFF' }}
                  >{'Military Service'}</TableSortLabel>
                </TableCell>
                <TableCell align="right" style={{ backgroundColor:'#222' }}>
                  <TableSortLabel
                    active={orderBy === 'languageRequirement'}
                    onClick={(event) => handleRequestSort(event, 'languageRequirement')}
                    style={{ color:'#FFFFFF' }}
                  >{'Language Requirement'}</TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" style={{ color:'#FFFFFF' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" style={{ color:'#FFFFFF' }}>
                    <span>{row.residency !== 99 ? row.residency : 'N/A'}</span>
                  </TableCell>
                  <TableCell align="right" style={{ color:'#FFFFFF' }}>
                    <span>{row.permanentResidency !== 99 ? row.permanentResidency : 'N/A'}</span>
                  </TableCell>
                  <TableCell align="right" style={{ color:'#FFFFFF' }}>
                    <span style={row.dualCitizenship === 'Yes' ? textGreen : textRed}>
                      <span style={{ color:'FFFFFF', zIndex:1 }}>{row.dualCitizenship}</span>
                    </span>
                  </TableCell>
                  <TableCell align="right" style={{ color:'#FFFFFF' }}>
                    <span style={row.militaryService === 'Yes' ? textRed : textGreen}>
                      <span style={{ color:'FFFFFF', zIndex:1 }}>{row.militaryService}</span>
                    </span>
                  </TableCell>
                  <TableCell align="right" style={{ color:'#FFFFFF' }}>
                    <span style={row.languageRequirement === 'Yes' ? textRed : textGreen}>
                      <span style={{ color:'FFFFFF', zIndex:1 }}>{row.languageRequirement}</span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AdBlog />
        <h1>{'Argentina 🇦🇷'}</h1>
          <p><strong>{'If you’re looking for one of the fastest routes to citizenship, Argentina is the top choice.'}</strong></p>
          <p>{'Argentina offers one of the shortest residency requirements for naturalization worldwide, with only '}<strong>{'2 years of temporary or permanent residency'}</strong>{' needed to qualify. This is significantly shorter than most other countries\' paths to citizenship.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[0]} image={argentina} text={'Argentina 🇦🇷'}/>} right={<VisaTable data={[true,false,false,true,false,false,false,true,false,true,true,true]}/>} />
          <p><strong>{'Key Benefits of Argentine Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship: '}</strong>{'Argentina allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR Citizenship: '}</strong>{'Citizens of MERCOSUR member countries can apply for residency in other member states on a reciprocal basis, similar to the European Union.'}</li>
            <li><strong>{'Strong passport: '}</strong>{'While not the most powerful passport due to not having visa-free access to the US, Canada, Australia and China, the Argentine passport is still very powerful.'}</li>
          </ul>
          <p>{'One unique aspect of Argentine citizenship is that the country '}<strong>{'prohibits renunciation'}</strong>{' for both naturalized and natural-born citizens. This policy can be advantageous or disadvantageous depending on individual circumstances.'}</p>
          <p><strong>{'Example of an Advantage:'}</strong>{' In cases where a country, like Japan, requires renunciation of other citizenships for naturalization, Argentina’s rule allows you to keep your Argentine citizenship. For instance, under Japan\'s Nationality Law '}(<a href="https://web.archive.org/web/20241007193921/https://www.moj.go.jp/ENGLISH/information/tnl-01.html#:~:text=2.%20When">{'Article 5, Section 2'}</a>)</p>
          <MessageBox text={'“When an alien is, regardless of his or her intention, unable to deprive himself or herself of his or her current nationality, the Minister of Justice may permit the naturalization of the alien.”'} />
          <p></p>
          <p><strong>{'How to obtain residency: '}</strong>{'Residency is obtainable by foreign citizens who can prove a permanent monthly income through investments, pensions or retirement funds of 5 times the minimum wage in Argentina (as of 2025, this is ~US$1,100 subject to fluctuations). This is called the Rentista visa. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Although not explicitly stated, it is advisable to spend enough time to establish connections in the country that you can substantiate.'}</p>
          <p>{'Once applied, citizenship applications take ~1 year to be processed, making for a residence permit to passport time of '}<strong>{'3 years.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.argentina.gob.ar/servicio/obtener-la-ciudadania-argentina'}>{'Obtain Argentine Citizenship (Spanish)'}</a>{' '}<a href={'https://www.argentina.gob.ar/servicio/obtener-una-residencia-temporaria-como-rentista'}>{'Temporary residency for people of independent means (Spanish)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Peru 🇵🇪'}</h1>
          <p><strong>{'Another similar option, also in South America, is Peru.'}</strong></p>
          <p>{'Peru, similarly to Argentina, offers a '}<strong>{'2 year'}</strong>{' residency requirement for naturalization. Obtaining residency is somewhat easier than in Argentina, and the processing times for naturalization are shorter.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[1]} image={peru} text={'Peru 🇵🇪'}/>} right={<VisaTable data={[true,false,false,true,false,false,false,true,false,true,true,true]}/>} />
          <p><strong>{'Key Benefits of Peruvian Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship: '}</strong>{'Peru allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR citizenship: '}</strong>{'Citizens of MERCOSUR member countries can apply for residency in other member states on a reciprocal basis, similar to the European Union.'}</li>
            <li><strong>{'Strong passport: '}</strong>{'While not as powerful as the Argentine passport, the Peruvian passport is still an excellent choice.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Residency is obtainable by foreigners who can prove a monthly permanent income of more than $1,000 USD through pensions, retirement funds, investments or rental income. There are also residency programs for people who want to invest in or set up a company in Peru. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Although not explicitly stated, it is advisable to spend enough time to establish connections in the country that you can substantiate. Permanent residency can be revoked if absent from Peru for more than 6 months at a time.'}</p>
          <p>{'Once applied, citizenship applications take ~30 working days to be processed, making for a residence permit to passport time of '}<strong>{'2 years and 1 month.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.gob.pe/12580'}>{'Apply for Peruvian nationality by naturalization (Spanish)'}</a>{' '}<a href={'https://www.gob.pe/12875-solicitud-de-visa-para-residentes-segun-su-calidad-migratoria-visa-para-residente-para-rentista?token=vqcapGkovvsZo372DKNh2owR2qGHJccC3YvveX25Et4'}>{'Request residency for people of independent means (Spanish)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Dominican Republic 🇩🇴'}</h1>
          <p><strong>{'The Dominican Republic, a popular destination for tourists and retirees, offers naturalization after only 2 years of residency.'}</strong></p>
          <p>{'The Dominican Republic has a very lenient immigration and citizenship policy. While the passport is not particularly strong, it is still an excellent choice for anyone seeking out a second passport.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[2]} image={dominicanRepublic} text={'Dominican Republic 🇩🇴'}/>} right={<VisaTable data={[false,false,false,false,false,false,true,true,false,true,true,false]}/>} />
          <p><strong>{'Key Benefits of Dominican Republic Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship: '}</strong>{'The Dominican Republic allows dual and multiple citizenships without limitations.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'To obtain residency in the Dominican Republic, you must prove a permanent monthly income of $2,000 USD through investments, rental income, retirement funds, pensions, etc.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Although not explicitly stated, it is advisable to spend enough time to establish connections in the country that you can substantiate.'}</p>
          <p>{'Once applied, citizenship applications take ~12 months to be processed, making for an average residence permit to passport time of '}<strong>{'3  years.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://mip.gob.do/transparencia/images/docs/Servicio_al_Publico/Naturalizaciones/Naturalizaci%C3%B3n%20Ordinaria/REQUISITOS%20NATURALIZACION%20ORDINARIO.pdf'}>{'Requirements for ordinary naturalization (Spanish)'}</a>{' '}<a href={'https://migracion.gob.do/servicio/residencia-por-inversion-en-calidad-de-rentista/'}>{'Request residency by means of passive income (Spanish)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Ireland 🇮🇪'}</h1>
          <p><strong>{'Ireland has the most leniant policies on citizenship out of any country in the EU.'}</strong></p>
          <p>{'Not only do they offer one of the shortest time periods for citizenship, that being, '}<strong>{'5 years'}</strong>{', they also don\'t require permanent residency to apply for citizenship. Any time spent in Ireland as a temporary resident (except on a student visa) counts towards the 5 years of residency required.'}</p>
          <p>{'They are also one of the very few countries that don\'t require any language proficiency tests when applying for citizenship.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[3]} image={ireland} text={'Ireland 🇮🇪'}/>} right={<VisaTable data={[true,true,true,true,true,true,true,false,true,true,true,true]}/>} />
          <p><strong>{'Key Benefits of Irish Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Ireland allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'EU Citizenship:'}</strong>{' Citizens of EU member countries can apply for residency in other member states based solely on their citizenship.'}</li>
            <li><strong>{'Freedom of movement with the United Kingdom:'}</strong>{' Citizens of Ireland have the right to live in the United Kingdom with the same rights as British citizens under the reciprocal Common Travel Area (CTA)'}</li>
            <li><strong>{'Strong passport:'}</strong>{' The Irish passport is among the best passports for travel freedom.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Irish residency can be obtained easily obtained by citizens of EU member countries and British citizens under reciprocal freedom of movement agreements. Other routes to residency include work, study, investment, etc.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'4 years out of the last 8 years, with 1 year preceding the application allowing 70 days absence.'}</p>
          <p>{'Once applied, citizenship applications take ~19 months to be processed, making for an average residence permit to passport time of '}<strong>{'6 & 1/2 years.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.citizensinformation.ie/en/moving-country/irish-citizenship/becoming-an-irish-citizen-through-naturalisation/'}>{'Becoming an Irish citizen through naturalisation (English)'}</a>{' '}<a href={'https://www.gov.ie/en/service/73858-how-to-get-an-irish-residence-permit/#how-irish-residence-permits-irp-are-issued'}>{'How to get an Irish Residence Permit (English)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Ecuador 🇪🇨'}</h1>
          <p><strong>{'Ecuador\'s citizenship program is similar to neighbouring countries, offering citizenship for anyone resident in Ecuador for 3 years with temporary or permanent residence.'}</strong></p>
          <p>{'Unlike the other neighbouring countries, at the time of the application, you must be in posession of permanent residency. You can apply for permanent residency after 2 years of temporary residency in Ecuador.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[4]} image={ecuador} text={'Ecuador 🇪🇨'}/>} right={<VisaTable data={[false,false,false,false,false,false,false,true,true,true,true,false]}/>} />
          <p><strong>{'Key Benefits of Ecuador Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship: '}</strong>{'Ecuador allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR Citizenship: '}</strong>{'Citizens of MERCOSUR member countries can apply for residency in other member states on a reciprocal basis, similar to the European Union.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'The easiest method to obtain residency is through the \"Rentista\" visa, which requires proving means of subsistance (~$1,000 USD/month) from a foreign source. This includes income from salaries, investments, rental income, pensions, etc. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Must not exceed 180 days outside of Ecuador per year.'}</p>
          <p>{'Once applied, citizenship applications take ~12 months to be processed, making for an average residence permit to passport time of '}<strong>{'4 years.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.gob.ec/mremh/tramites/obtencion-nacionalidad-ecuatoriana-carta-naturalizacion'}>{'Obtain Ecuadorian citizenship (Spanish)'}</a>{' '}<a href={'https://www.gob.ec/mremh/tramites/concesion-visa-residencia-temporal-rentista-trabajo-remoto-visa-nomada'}>{'Residency concession for remote workers (Spanish)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Canada 🇨🇦'}</h1>
          <p><strong>{'Canada\'s naturalization process is more difficult than others on this list due to the requirement of 3 years with permanent residency to be eligible for citizenship.'}</strong></p>
          <p>{'Each day in Canada as a temporary resident counts as half a day subtracted from the 3 year period, with a maximum of 365 days being subtracted.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[5]} image={canada} text={'Canada 🇨🇦'}/>} right={<VisaTable data={[true,true,true,true,true,true,true,false,false,true,true,true]}/>} />
          <p><strong>{'Key Benefits of Canadian Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Canada allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'Easier access to the US:'}</strong>{' Citizens of Canada have favoured immigration status in the US.'}</li>
            <li><strong>{'Strong passport:'}</strong>{' The Canadian passport is on par with the EU & US in terms of passport strength.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Canada offers numerous residency programs at a federal and provincial level, these usually are for work, study, investment, family reunification, etc.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'3 years out of the last 5 years.'}</p>
          <p>{'Once applied, citizenship applications take ~6 months to be processed, making the fastest residence permit to passport time a period of '}<strong>{'3 & 1/2 years'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility.html'}>{'Apply for citizenship: Who can apply (English)'}</a>{' '}<a href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html'}>{'Immigrate to Canada (English)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Paraguay 🇵🇾'}</h1>
          <p><strong>{'Paraguay stands out by having one of the most leniant residency programs in the world.'}</strong></p>
          <p>{'The main requirement for naturalization is to have spent '}<strong>{'3 years'}</strong>{' in Paraguay while posessing a permanent residence permit.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[6]} image={paraguay} text={'Paraguay 🇵🇾'}/>} right={<VisaTable data={[true,false,false,true,false,false,false,true,false,true,false,true]}/>} />
          <p><strong>{'Key Benefits of Paraguay Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Paraguay allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR Citizenship:'}</strong>{' Citizens of MERCOSUR member countries can apply for residency in other member states based solely on their citizenship.'}</li>
            <li><strong>{'Strong passport:'}</strong>{' While not the most powerful passport due to not having visa-free access to the US, Canada, Australia and China, the Paraguayan passport is still very powerful.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Paraguay has a uniquely simple residency program, being granted merely by presenting evidence of a clean criminal record and adequate financial resources to avoid reliance on public assistance. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Although not explicitly stated, it is advisable to spend enough time to establish connections in the country that you can substantiate.'}</p>
          <p>{'Once applied, citizenship applications take ~12 months to be processed, making the average residence permit to passport time a period of '}<strong>{'4 years'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.pj.gov.py/contenido/463-carta-de-naturalizacion/463'}>{'Naturalization (Spanish)'}</a>{' '}<a href={'https://migraciones.gov.py/residencia-temporal/'}>{'Temporary residency (Spanish)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Brazil 🇧🇷'}</h1>
          <p><strong>{'Brazil\'s passport is the second strongest in South America, obtainable after 4 years of permanent residency.'}</strong></p>
          <p>{'Additionally, the residency requirement is lowered to '}<strong>{'1 year'}</strong>{' for citizens of Portuguese-speaking countries.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[7]} image={brazil} text={'Brazil 🇧🇷'}/>} right={<VisaTable data={[true,false,false,true,false,true,true,true,false,true,true,false]}/>} />
          <p><strong>{'Key Benefits of Brazilian Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Brazil allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR Citizenship:'}</strong>{' Citizens of MERCOSUR member countries can apply for residency in other member states based solely on their citizenship.'}</li>
            <li><strong>{'Strong passport:'}</strong>{' While not the most powerful passport due to not having visa-free access to the US, Canada, Australia and China, the Brazilian passport is still very powerful.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Brazil gives permanent residency to people willing to invest in Brazilian real estate or companies. There is also a retirement pathway for people recieving a monthly pension of more than $2,000 USD. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Absences must not exceed 3 months per year.'}</p>
          <p>{'Once applied, citizenship applications take ~6 months to be processed, making the average residence permit to passport time a period of '}<strong>{'4 years and 6 months.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/migracoes/naturalizacao/o-que-e-naturalizacao/naturalizacao-ordinaria/ter-residencia-em-territorio-nacional-pelo-prazo-estabelecido-pela-lei-brasileira/view'}>{'Ordinary naturalization (Portuguese)'}</a>{' '}<a href={'https://portaldeimigracao.mj.gov.br/pt/nav-guiada/rn-36'}>{'Property investment: Normative resolution #36 (Portuguese)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'United States 🇺🇸'}</h1>
          <p><strong>{'The United States receives more immigrants annually than any other country, and has a long history of immigration.'}</strong></p>
          <p>{'Due to this, naturalization requirements are easy to meet. To be eligible, '}<strong>{'5 years'}</strong>{' of residence with a green card (permanent residency) are required.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[8]} image={unitedStates} text={'United States 🇺🇸'}/>} right={<VisaTable data={[true,true,true,true,true,true,true,false,false,true,true,true]}/>} />
          <p><strong>{'Key Benefits of American Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' America allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'Strong passport:'}</strong>{' The American passport is on par with the EU in terms of passport strength'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'The most common pathways to residency in the United States are through work, study, investment and family reunification.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Applicants must spend at least half (183 days) of their year resident in the US.'}</p>
          <p>{'Once applied, citizenship applications take ~7 months to be processed, making the fastest residence permit to passport time a period of '}<strong>{'5 years and 7 months.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/i-am-a-lawful-permanent-resident-of-5-years'}>{'Citizenship and Naturalization (English)'}</a>{' '}<a href={'https://www.uscis.gov/green-card/green-card-eligibility-categories'}>{'Green Card Eligibility Categories (English)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Armenia 🇦🇲'}</h1>
          <p><strong>{'Armenia\'s citizenship and residency policy is notably more lenient than those of its neighboring countries.'}</strong></p>
          <p>{'To obtain citizenship in Armenia, only '}<strong>{'3 years'}</strong>{' of temporary or permanent residency are required.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[9]} image={armenia} text={'Armenia 🇦🇲'}/>} right={<VisaTable data={[false,false,false,false,false,false,false,true,true,false,false,false]}/>} />
          <p><strong>{'Key Benefits of Armenian Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Armenia allows dual and multiple citizenships without limitations.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Armenia offers multiple residency programs for people wanting to establish a business in Armenia through company formation or acquisiton of real estate.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Unstated, but it is recommended to spend enough time to establish ties to the country that you can prove.'}</p>
          <p>{'Once applied, citizenship applications take ~3 months to be processed, making the residence permit to passport time a period of '}<strong>{'3 years and 3 months.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.mfa.am/en/citizenship/'}>{'Citizenship, Republic of Armenia (English)'}</a>{' '}<a href={'https://www.mfa.am/en/residency/'}>{'Temporary and Permanent Residency in Armenia (English)'}</a></p>
          <div className={'spacer'} />
        <AdBlog />
        <h1>{'Bolivia 🇧🇴'}</h1>
          <p><strong>{'Bolivia\'s citizenship program requires that individuals must have resided in the country for 3 years, either with temporary or permanent residency, to qualify for naturalization.'}</strong></p>
          <p>{'While the Bolivian passport is substantially weaker than passports of neighbouring countries, it is still an excellent choice for anyone seeking a second passport.'}</p>
          <ArticleTable left={<IndividualPassport data={passportDataRef.current[10]} image={bolivia} text={'Bolivia 🇧🇴'}/>} right={<VisaTable data={[false,false,false,false,false,false,false,true,false,false,false,true]}/>} />
          <p><strong>{'Key Benefits of Bolivian Citizenship:'}</strong></p>
          <ul>
            <li><strong>{'Dual citizenship:'}</strong>{' Bolivia allows dual and multiple citizenships without limitations.'}</li>
            <li><strong>{'MERCOSUR citizenship:'}</strong>{' Citizens of MERCOSUR member countries can apply for residency in other member states based solely on their citizenship.'}</li>
          </ul>
          <p><strong>{'How to obtain residency: '}</strong>{'Bolivia provides residency to people who buy property or incorporate companies inside of Bolivia. Residency is also available to citizens of MERCOSUR member or associate states with no further requirements.'}</p>
          <p><strong>{'Physical presence requirement: '}</strong>{'Unstated, but it is recommended to spend enough time to establish ties to the country that you can prove.'}</p>
          <p>{'Once applied, citizenship applications take ~1 month to be processed, making the residence permit to passport time a period of '}<strong>{'3 years and 1 month.'}</strong></p>
          <p><strong>{'Further reading: '}</strong><a href={'https://www.migracion.gob.bo/index.php/node/213'}>{'Naturalization through permanence (Spanish)'}</a></p>
      </div>
    </div>
    </>
  )
}

export default EasiestCitizenship