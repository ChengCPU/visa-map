import { useEffect, MutableRefObject } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import worldMap from '../components/Blog/EasiestCitizenship/images/map.png'
interface Props {
  setSelectorLoad:Function;
  passportDataRef:MutableRefObject<Array<[string|number]>>;
}

const Blog:React.FC<Props> = ({ setSelectorLoad, passportDataRef }) => {

  useEffect(() => {
    setSelectorLoad(false)
  }, [])

  return (
    <>
    <Head>
			<title>Visa-map</title>
			<meta name='viewport' content='width=device-width, user-scalable=no'></meta>
			<link rel='shortcut icon' href='/favicon.png' />
		</Head>
    <div className={'container'}>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: 600px;
          margin-top: 60px;
        }
        .article {
          width: 200px;
          height: 100px;
        }
        .item {
          width: 200px;
          height: 100px;
        }
        h1 {
          color:#FFFFFF;
          margin: 5px;
        }
        .article-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .article-list li {
          margin: 10px 0;
        }
        .article-list li a {
          text-decoration: none;
          color: #0070f3;
          font-size: 1.2rem;
        }
        .article-list li a:hover {
          text-decoration: underline;
        }
      `}</style>
      <ul className='article-list'>
        <li style={{backgroundImage: `url(${worldMap.src})`,backgroundSize: 'cover',backgroundPosition: 'center',height: '100px',width: '100%'}} className={'article'}><Link href='/blog/easiestcitizenship'><h1>{'Which country is the easiest to naturalize in?'}</h1></Link></li>
      </ul>
    </div>
    </>
  )
}

export default Blog