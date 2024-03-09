import { useState, useEffect, useContext } from 'react'
import { ProToggleContext } from '../logic/context/ProToggleContext'
import Map from '../components/Map/Map'
import Head from 'next/head'
import InfoBox from '../components/InfoBox'
interface Props {
  selectArrayRef:any;
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priorityRef:any;
  setSelectorLoad:Function;
  tempPriorityRef:any;
  tempDiffRef:any;
  diffRef:any;
  panzoomReset:boolean;
}

export default function Home({ selectArrayRef, mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, tempPriorityRef, tempDiffRef, diffRef, panzoomReset }:Props) {

  const proToggle = useContext(ProToggleContext)

  useEffect(() => {
    priorityRef.current = tempPriorityRef.current
    diffRef.current = tempDiffRef.current
    setSelectorLoad(true)
  }, [])

  const [typedText, setTypedText] = useState<string>('')

  const typedTextArray:string[] = []

  const handleKeyPress = (e:any) => {
    setTypedText((prevText) => prevText + e.key);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    typedTextArray.push(typedText[typedText.length - 1])
    if(typedText[typedText.length - 1] == 'o' || typedText[typedText.length - 1] == 'O') {
      if(typedText[typedText.length - 2] != null && typedText[typedText.length - 2] == 'r' || typedText[typedText.length - 2] == 'R') {
        if(typedText[typedText.length - 3] != null && typedText[typedText.length - 3] == 'p' || typedText[typedText.length - 3] == 'P') {
          proToggle.setProToggle(true)
          document.removeEventListener('keydown', handleKeyPress);
        }
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [typedText])

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
      panzoomReset={panzoomReset}
    />
    <InfoBox
      selectArrayRef={selectArrayRef}
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
      selected={null}
    />
    </>
  )
}
