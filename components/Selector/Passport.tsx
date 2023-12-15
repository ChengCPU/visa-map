import Image from 'next/image'
import defaultImage from '/public/defaultImage.png'
interface Props {image:any};

const Passport:React.FC<Props> = ({ image }) => {
  return (
    <Image
      alt={'passport'}
      src={(image == null) ? defaultImage : image}
      style={{width: 60, height: 90.4}}
    />
  )
}

export default Passport