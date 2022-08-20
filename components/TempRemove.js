import Image from "next/image"
import selector from '../public/selector.png'

const TempRemove = ({ setSelectArray, selectArray, select }) => {

  return (
    <Image
      onClick={() => setSelectArray(selectArray = [...selectArray, selectArray[select.selection].passport = undefined])}
      src={selector}
      width={64}
      height={90.8}
    />
  )
}

export default TempRemove