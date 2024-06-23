import { useEffect, MutableRefObject } from 'react'
import legendCalculation from '../logic/legendCalculation'
import Map from '../components/Map/Map'
import Head from 'next/head'
import Script from 'next/script'
import InfoBox from '../components/InfoBox'
import Legend from '../components/Legend'
import Ad from '../components/Ads/Ad'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setSelectorLoad:Function;
  panzoomReset:boolean;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  legend:boolean[];
  setLegend:Function;
}

export default function Home({ selectArrayRef, mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, panzoomReset, visaDurationRef, legend, setLegend }:Props) {

  const title = 'Visa-map: visualize the strength of your passport'
  const description = 'Easily visualize travel requirements for passports and visas. Get up-to-date information on document needs for various countries.'
  const url = 'https://www.visamap.co/'
  const image = 'https://www.visamap.co/favicon.png'
  const keywords = 'visa, passport, travel, citizenship, immigration'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Visamap.co',
    'url': url,
    'logo': 'https://www.visamap.co/favicon.png',
    'sameAs': [
      'https://www.github.com/ChengCPU/visa-map',
      'https://www.chengl.ee'
    ]
  };

  useEffect(() => {
    if(selectArrayRef.current[0] != null) { legendCalculation(setLegend, priorityRef) }
    setSelectorLoad(true)
  }, [])

  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147951612524944" crossOrigin="anonymous"></Script>
    <Script id='meta' type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}></Script>
    <Head>
      <title>Visa-map</title>
      <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
      panzoomReset={panzoomReset}
    />
    <Legend
      legend={legend}
      position={'90'}
    />
    <Ad />
    <InfoBox
      selectArrayRef={selectArrayRef}
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
      selected={null}
      visaDurationRef={visaDurationRef}
      visaPolicyDurationRef={null}
    />
    </>
  )
}