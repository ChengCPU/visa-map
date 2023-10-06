interface Props {
  widthCalculation:Function;
  marginCalculation:Function;
  verticalColumn:number;
  count:number;
}

const VisaRequired:React.FC<Props> = ({ widthCalculation, marginCalculation, verticalColumn, count }) => {
  return (
    <>
    <div className={'visaRequired'}><style jsx>{`.visaRequired {
      margin: 0px;
      padding: 8px 0px 0px;
      width: ${widthCalculation('visaRequired', verticalColumn)}px;
      height: 20px;
      background: rgb(150, 150, 150);
      position:absolute;
      text-align: left;
      float: left;
    }`}</style></div>
    <p className={'visaRequired'}><style jsx>{`.visaRequired {
      margin: 5px;
      margin-left: ${marginCalculation('visaRequired', verticalColumn)}px;
      text-align: center;
      position:absolute;
      user-select: none;
    }`}</style>
    {(count == 0) ? null : count}</p>
    </>
  )
}

export default VisaRequired