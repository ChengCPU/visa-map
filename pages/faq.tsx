import { useContext, useEffect } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
interface Props {
  setSelectorLoad:Function;
}

const faqEN = ['Where do you source visa information from?','Visa information is manually compiled from government websites, reputable news sources and press releases.','Where do you source passport images from?','Main sources are EdisonTD and PRADO. Some images are crowdsourced.','Why is x passport not on this website?','The primary criterion for passport inclusion is the availability of reliable and accurate data. For passports with limited but substantial international recognition and rare variants of passports, there simply isn\'t enough reliable information to conclusively add them, knowing that the information is accurate.','I found some information on this website that isn\'t correct. How can I change it?','Feel free to submit a pull request on the Visa-map ',', or alternatively, you can reach out to me via email at ChengCPU@proton.me to share your suggestions or changes.','I want to contribute, where can I find the source code?','The Visa-map repository can be found ','here']
const faqES = ['¿De dónde sacas la información sobre visados?','La información sobre visados se recopila manualmente de sitios web gubernamentales, fuentes de noticias acreditadas y comunicados de prensa.','¿De dónde se obtienen las imágenes de los pasaportes?','Las principales fuentes son EdisonTD y PRADO. Algunas imágenes proceden de crowdsourcing.','¿Por qué no aparece x pasaporte en este sitio web?','El criterio principal para la inclusión de pasaportes es la disponibilidad de datos fiables y exactos. En el caso de los pasaportes con un reconocimiento internacional limitado pero sustancial y de las variantes poco comunes de pasaportes, simplemente no hay suficiente información fiable para añadirlos de forma concluyente, sabiendo que la información es exacta.','He encontrado información incorrecta en este sitio web. ¿Cómo puedo cambiarla?','Siéntase libre de enviar una pull request en el Visa-map ',', también puede enviarme un correo electrónico a ChengCPU@proton.me para comunicarme sus sugerencias o cambios.','Quiero contribuir, ¿dónde puedo encontrar el código fuente?','El repositorio Visa-map se encuentra ','aquí']
const faqPT = ['Onde é que obtêm as informações sobre os vistos?','As informações sobre vistos são compiladas manualmente a partir de sítios web governamentais, fontes noticiosas reputadas e comunicados de imprensa.','Onde é que se obtêm as imagens de passaporte?','As principais fontes são EdisonTD e PRADO. Algumas imagens são de origem colectiva.','Porque é que o passaporte x não está neste sítio web?','O principal critério para a inclusão de passaportes é a disponibilidade de dados fiáveis e exactos. No caso dos passaportes com reconhecimento internacional limitado mas substancial e das variantes raras de passaportes, simplesmente não existem informações fiáveis suficientes para os incluir de forma conclusiva, sabendo que as informações são exactas.','Encontrei algumas informações neste sítio Web que não estão correctas. Como é que as posso alterar?','Sinta-se à vontade para enviar um pull request no Visa-map ',', ou, em alternativa, pode contactar-me por correio eletrónico através do endereço ChengCPU@proton.me para partilhar as suas sugestões ou alterações.','Quero contribuir, onde posso encontrar o código-fonte?','O repositório Visa-map pode ser consultado ','aqui']
const faqFR = ['D\'où proviennent les informations sur les visas ?','Les informations sur les visas sont compilées manuellement à partir de sites web gouvernementaux, de sources d\'information fiables et de communiqués de presse.','D\'où proviennent les images de passeport?','Les sources principales sont EdisonTD et PRADO. Certaines images proviennent de la communauté.','Pourquoi le passeport x ne figure-t-il pas sur ce site web?','Le principal critère d\'inclusion des passeports est la disponibilité de données fiables et exactes. Pour les passeports ayant une reconnaissance internationale limitée mais substantielle et les variantes rares de passeports, il n\'y a tout simplement pas assez d\'informations fiables pour les ajouter de manière concluante, tout en sachant que les informations sont exactes.','J\'ai trouvé sur ce site des informations erronées. Comment puis-je les modifier ?','N\'hésitez pas à soumettre une pull request sur Visa-map ',', vous pouvez également me contacter par courrier électronique à l\'adresse ChengCPU@proton.me pour me faire part de vos suggestions ou de vos modifications.','Je souhaite apporter ma contribution, où puis-je trouver le code source?','Le référentiel Visa-map est disponible ','ici']

const CustomizedAccordionSummary = styled(AccordionSummary)`
  background-color: #333333;
  color: #FFFFFF;
`

const CustomizedAccordionDetails = styled(AccordionDetails)`
  background-color: #696969;
  color: #FFFFFF;
`

const Faq:React.FC<Props> = ({ setSelectorLoad }) => {

  useEffect(() => {
    setSelectorLoad(false)
  }, [])

  const { language } = useContext(LanguageContext)

  const languageCaculation = () => {
    switch(language) {
      case '🇬🇧EN': return faqEN
      case '🇪🇸ES': return faqES
      case '🇵🇹PT': return faqPT
      case '🇫🇷FR': return faqFR
    }
  }

  const dimensions = useContext(DimensionsContext)

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <br />
    <br />
    <br />
    <div className={'container'}>
      <style jsx>{`
        .container {
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          ${dimensions.width <= 800 ? 'width: 300px;' : null}
        }
      `}</style>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation()[0]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation()[1]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation()[2]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation()[3]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{languageCaculation()[4]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation()[5]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation()[6]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation()[7]}<a href='https://github.com/ChengCPU/visa-map'>Github</a>{languageCaculation()[8]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation()[9]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation()[10]}<a href='https://github.com/ChengCPU/visa-map'>{languageCaculation()[11]}</a>{'.'}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    </>
  )
}

export default Faq