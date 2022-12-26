interface Props {
  widthCalculation:Function;
  marginCalculation:Function;
  verticalColumn:number;
  visaPolicyData:any;
}

const VisaOnArrival:React.FC<Props> = ({ widthCalculation, marginCalculation, verticalColumn, visaPolicyData }) => {
  return (
    <>
    <div className={'visaOnArrival'}><style jsx>{`.visaOnArrival {
      margin: 0px;
      padding: 8px 0px 0px;
      width: ${widthCalculation('visaOnArrival', verticalColumn)}px;
      height: 20px;
      background: rgb(255, 255, 0);
      position:absolute;
      text-align: left;
      float: left;
    }`}</style></div>
    <p className={'visaOnArrivalText'}><style jsx>{`.visaOnArrivalText {
      margin: 5px;
      margin-left: ${marginCalculation('visaOnArrival', verticalColumn)}px;
      text-align: center;
      position:absolute;
    }`}</style>
    {(visaPolicyData[verticalColumn]?.[3] == 0) ? null : visaPolicyData[verticalColumn]?.[3]}</p>
    </>
  )
}

export default VisaOnArrival