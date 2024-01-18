import { useContext, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Head from 'next/head'
interface Props {
  setSelectorLoad:Function;
}

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
        }
      `}</style>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Where do you source visa information from?</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            Visa information is manually compiled from government websites, reputable news sources and press releases.
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Where do you source passport images from?</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            Main sources are EdisonTD and PRADO. Some images are crowdsourced.
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Why is x passport not on this website?</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            The primary criterion for passport inclusion is the availability of reliable and accurate data. For passports with limited but substantial international recognition and rare variants of passports, there simply {`isn't`} enough reliable information to conclusively add them, knowing that the information is accurate.
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>I found some information on this website that {`isn't`} correct. How can I change it?</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            Feel free to submit a pull request on the Visa-map <a href='https://github.com/ChengCPU/visa-map'>Github repo</a>, or alternatively, you can reach out to me via email at ChengCPU@proton.me to share your suggestions or changes.
          </Typography>
        </CustomizedAccordionDetails>
      </Accordion>
      <Accordion>
        <CustomizedAccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>I want to contribute, where can I find the source code?</Typography>
        </CustomizedAccordionSummary>
        <CustomizedAccordionDetails>
          <Typography>
            The Visa-map repository can be found <a href='https://github.com/ChengCPU/visa-map'>here</a>.
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