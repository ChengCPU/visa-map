import { useMemo, useContext, useEffect } from 'react'
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

const faqEN:string[] = ['Where do you source visa information from?','Visa information is manually compiled from government websites, reputable news sources and press releases.','Where do you source passport images from?','Main sources are EdisonTD and PRADO. Some images are crowdsourced.','Why is x passport not on this website?','The primary criterion for passport inclusion is the availability of reliable and accurate data. For passports with limited but substantial international recognition and rare variants of passports, there simply isn\'t enough reliable information to conclusively add them, knowing that the information is accurate.','I found some information on this website that isn\'t correct. How can I change it?','Feel free to submit a pull request on the Visa-map ',', or alternatively, you can reach out to me via email at ChengCPU@proton.me to share your suggestions or changes.','I want to contribute, where can I find the source code?','The Visa-map repository can be found ','here','How are passport rankings calculated?','They are ranked by the category selected. If two passports have the exact same values, they are assigned identical numbers on the ranking, in no patricular order. You can view the code that does the ranking ','here']
const faqES:string[] = ['¿De dónde sacas la información sobre visados?','La información sobre visados se recopila manualmente de sitios web gubernamentales, fuentes de noticias acreditadas y comunicados de prensa.','¿De dónde se obtienen las imágenes de los pasaportes?','Las principales fuentes son EdisonTD y PRADO. Algunas imágenes proceden de crowdsourcing.','¿Por qué no aparece x pasaporte en este sitio web?','El criterio principal para la inclusión de pasaportes es la disponibilidad de datos fiables y exactos. En el caso de los pasaportes con un reconocimiento internacional limitado pero sustancial y de las variantes poco comunes de pasaportes, simplemente no hay suficiente información fiable para añadirlos de forma concluyente, sabiendo que la información es exacta.','He encontrado información incorrecta en este sitio web. ¿Cómo puedo cambiarla?','Siéntase libre de enviar una pull request en el Visa-map ',', también puede enviarme un correo electrónico a ChengCPU@proton.me para comunicarme sus sugerencias o cambios.','Quiero contribuir, ¿dónde puedo encontrar el código fuente?','El repositorio Visa-map se encuentra ','aquí','¿Cómo se calcula la clasificación de los pasaportes?','Se clasifican según la categoría seleccionada. Si dos pasaportes tienen exactamente los mismos valores, se les asignan números idénticos en la clasificación, sin orden patricular. Puede ver el código que realiza la clasificación ','aquí']
const faqPT:string[] = ['Onde é que obtêm as informações sobre os vistos?','As informações sobre vistos são compiladas manualmente a partir de sítios web governamentais, fontes noticiosas reputadas e comunicados de imprensa.','Onde é que se obtêm as imagens de passaporte?','As principais fontes são EdisonTD e PRADO. Algumas imagens são de origem colectiva.','Porque é que o passaporte x não está neste sítio web?','O principal critério para a inclusão de passaportes é a disponibilidade de dados fiáveis e exactos. No caso dos passaportes com reconhecimento internacional limitado mas substancial e das variantes raras de passaportes, simplesmente não existem informações fiáveis suficientes para os incluir de forma conclusiva, sabendo que as informações são exactas.','Encontrei algumas informações neste sítio Web que não estão correctas. Como é que as posso alterar?','Sinta-se à vontade para enviar um pull request no Visa-map ',', ou, em alternativa, pode contactar-me por correio eletrónico através do endereço ChengCPU@proton.me para partilhar as suas sugestões ou alterações.','Quero contribuir, onde posso encontrar o código-fonte?','O repositório Visa-map pode ser consultado ','aqui','Como é calculada a classificação dos passaportes?','A classificação é feita de acordo com a categoria selecionada. Se dois passaportes tiverem exatamente os mesmos valores, são-lhes atribuídos números idênticos na classificação, sem ordem de prioridade. Pode ver o código que efectua a classificação ','aqui']
const faqFR:string[] = ['D\'où proviennent les informations sur les visas ?','Les informations sur les visas sont compilées manuellement à partir de sites web gouvernementaux, de sources d\'information fiables et de communiqués de presse.','D\'où proviennent les images de passeport?','Les sources principales sont EdisonTD et PRADO. Certaines images proviennent de la communauté.','Pourquoi le passeport x ne figure-t-il pas sur ce site web?','Le principal critère d\'inclusion des passeports est la disponibilité de données fiables et exactes. Pour les passeports ayant une reconnaissance internationale limitée mais substantielle et les variantes rares de passeports, il n\'y a tout simplement pas assez d\'informations fiables pour les ajouter de manière concluante, tout en sachant que les informations sont exactes.','J\'ai trouvé sur ce site des informations erronées. Comment puis-je les modifier ?','N\'hésitez pas à soumettre une pull request sur Visa-map ',', vous pouvez également me contacter par courrier électronique à l\'adresse ChengCPU@proton.me pour me faire part de vos suggestions ou de vos modifications.','Je souhaite apporter ma contribution, où puis-je trouver le code source?','Le référentiel Visa-map est disponible ','ici','Comment le classement des passeports est-il calculé?','Ils sont classés en fonction de la catégorie sélectionnée. Si deux passeports ont exactement les mêmes valeurs, ils se voient attribuer des numéros identiques dans le classement, sans ordre patriculaire. Vous pouvez consulter le code qui effectue le classement ','ici']
const faqHR:string[] = ['Odakle dobijate informacije o vizama?','Podaci o vizama ručno se prikupljaju s vladinih web stranica, renomiranih izvora vijesti i priopćenja za javnost.','Odakle nabavljate slike putovnica?','Glavni izvori su EdisonTD i PRADO. Neke slike su "crowdsourcane".','Zašto x putovnica nije na ovoj web stranici?','Primarni kriterij za uvrštavanje putovnice je dostupnost pouzdanih i točnih podataka. Za putovnice s ograničenim, ali značajnim međunarodnim priznanjem kao i rijetke varijante putovnica jednostavno nema dovoljno pouzdanih informacija da ih se doda, uz uvjet da su informacije točne.','Našao/la sam neke informacije na ovoj web stranici koje nisu točne. Kako to mogu promijeniti?','Slobodno ponesite pull request na Visa-map githubu, ','ili mi se obratite putem e-pošte na ChengCPU@proton.me da podijelite svoje prijedloge ili promjene.','Želim doprinijeti, gdje mogu pronaći izvorni kod?','Visa-map repozitorij se može pronaći ','ovdje','Kako je izračunato rangiranje putovnica?','Rangirane su prema odabranoj kategoriji. Ako dvije putovnice imaju potpuno iste vrijednosti, dodjeljuju im se identični brojevi na poretku, bez posebnog redoslijeda. Možete vidjeti kod koji vrši rangiranje','ovdje.']

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

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return faqEN
      case '🇪🇸ES': return faqES
      case '🇵🇹PT': return faqPT
      case '🇫🇷FR': return faqFR
      case '🇭🇷HR': return faqHR
    }
  }, [language])

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
          <Typography>{languageCaculation[0]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[1]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation[2]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[3]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{languageCaculation[4]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[5]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation[6]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[7]}<a href='https://github.com/ChengCPU/visa-map'>Github</a>{languageCaculation[8]}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation[9]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[10]}<a href='https://github.com/ChengCPU/visa-map'>{languageCaculation[11]}</a>{'.'}
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{languageCaculation[12]}</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            {languageCaculation[13]}<a href='https://github.com/ChengCPU/visa-map/tree/main/logic/rankSorting'>{languageCaculation[14]}</a>{'.'}
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