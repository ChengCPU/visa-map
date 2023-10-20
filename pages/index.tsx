import { useEffect } from 'react';
import Map from '../components/Map/Map';
import Head from 'next/head';
import InfoBox from '../components/InfoBox';
interface Props {
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priorityRef:any;
  setSelectorLoad:Function;
  tempPriorityRef:any;
  tempDiff:any;
  setDiff:Function;
}

export default function Home({ mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, tempPriorityRef, tempDiff, setDiff }:Props) {

  useEffect(() => {
    priorityRef.current = tempPriorityRef.current
    setSelectorLoad(true)
    setDiff(tempDiff)
  })

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
    />
    <InfoBox
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
    />
    </>
  )
}
