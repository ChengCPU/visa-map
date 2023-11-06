import Image from 'next/image'
import logo from '../public/github-mark-white.svg'

const GithubLogo:React.FC = () => {
  return (
    <div className={'container'}>
      <style jsx>{`
      .container {
        top:4px;
        left:10px;
        position: absolute;
      }
      `}</style>
      <a href='https://github.com/ChengCPU/visa-map' target='_blank'><Image height={38} width={41.2} src={logo}/></a>
    </div>
  )
}

export default GithubLogo