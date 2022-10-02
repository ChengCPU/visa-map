import Image from 'next/image'
interface Props {
  image: any
}
const Passport:React.FC<Props> = ({ image }) => {
  return (
    <Image
      alt={'passport'}
      src={image}
      width={64}
      height={90.8}
    />
  )
}

export default Passport