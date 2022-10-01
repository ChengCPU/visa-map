import LegendContainer from './LegendContainer'
interface Props {
  legendArray:null | string[]
}
const Legend:React.FC<Props> = ({ legendArray }) => {
  return (
    <LegendContainer legendArray={legendArray} />
  )
}

export default Legend