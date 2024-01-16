import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import FourZeroFour from '../public/404.gif'

export default function Custom404() {
	const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

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
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div className={'container'}>
		<style jsx>{`
			.container {
				user-select: none;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			.text {
				color: #FFFFFF;
			}
		`}</style>
		<h1 className={'text'}>404</h1>
		<Image src={FourZeroFour} alt={'404'} height={200} width={200}/>
		<br />
		<p className={'text'}>{"You're not supposed to be here."}</p>
		<p className={'text'}>{"(Redirecting...)"}</p>
		</div>
		</>
	)
}