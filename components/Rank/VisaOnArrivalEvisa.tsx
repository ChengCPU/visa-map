interface Props {
  widthCalculation:Function;
  marginCalculation:Function;
  verticalColumn:number;
  count:number;
}

const VisaOnArrivalEvisa:React.FC<Props> = ({ widthCalculation, marginCalculation, verticalColumn, count }) => {
  return (
    <>
    <div className={'visaOnArrivalEvisa'}><style jsx>{`.visaOnArrivalEvisa {
      margin: 0px;
      padding: 8px 0px 0px;
      width: ${widthCalculation('visaOnArrivalEvisa', verticalColumn)}px;
      height: 20px;
      background: rgb(161, 224, 123);
      position:absolute;
      text-align: left;
      float: left;
    }`}</style></div>
    <p className={'visaOnArrivalEvisaText'}><style jsx>{`.visaOnArrivalEvisaText {
      margin: 5px;
      margin-left: ${marginCalculation('visaOnArrivalEvisa', verticalColumn)}px;
      text-align: center;
      position:absolute;
      user-select: none;
    }`}</style>
    {(count == 0) ? null : count}</p>
    </>
  )
}

export default VisaOnArrivalEvisa