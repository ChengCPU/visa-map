import Map from '../components/Map/Map';
import Head from 'next/head';
type LegendType = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
interface Props {
  legend:LegendType;
}

export default function Home({ legend }:Props) {
  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map
      legend={legend}
    />
    </>
  )
}
