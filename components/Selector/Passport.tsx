interface Props {
  image: any
}
const Passport:React.FC<Props> = ({ image }) => {
  return (
    <img
      src={image}
      width={64}
      height={90.8}
    />
  )
}

export default Passport