import { useEffect } from 'react'
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
}

export default function Home({ selectArrayRef, mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, tempPriorityRef, tempDiffRef, diffRef }:Props) {

  useEffect(() => {
    priorityRef.current = tempPriorityRef.current
    diffRef.current = tempDiffRef.current
    setSelectorLoad(true)
  }, [])

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <meta name="google-adsense-account" content="ca-pub-7088061295215371"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
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
