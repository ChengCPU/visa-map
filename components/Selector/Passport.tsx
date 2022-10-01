import Image from 'next/image';

const Passport = ({ image }) => {
  return (
    <Image
      src={image}
      width={64}
      height={90.8}
    />
  )
}

export default Passport