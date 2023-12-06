import Image from 'next/image'
import logo from '../public/github-mark-white.svg'

const GithubLogo:React.FC = () => {
  return (
    <div className={'container'}>
      <style jsx>{`
        .container {
          top:4px;
          left:20px;
          position: absolute;
        }
      `}</style>
      <a href='https://github.com/ChengCPU/visa-map' target='_blank' rel="noreferrer"><Image height={38} width={40} src={logo} alt={'Github'}/></a>
    </div>
  )
}

export default GithubLogo