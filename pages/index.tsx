import { useEffect } from 'react';
import Map from '../components/Map/Map';
import Head from 'next/head';
import InfoBox from '../components/InfoBox';
interface Props {
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priority:any;
  setPriority:Function;
  setSelectorLoad:Function;
  tempPriority:any;
  tempDiff:any;
  setDiff:Function;
}

export default function Home({ mousePos, hover, setHover, countrySelect, priority, setPriority, setSelectorLoad, tempPriority, tempDiff, setDiff }:Props) {

  useEffect(() => {
    setSelectorLoad(true)
    setPriority(tempPriority)
    setDiff(tempDiff)
  })

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map
      setHover={setHover}
    />
    <InfoBox
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priority={priority}
    />
    </>
  )
}
