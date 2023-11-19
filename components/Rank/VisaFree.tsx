interface Props {
  widthCalculation:Function;
  marginCalculation:Function;
  verticalColumn:number;
  count:number;
}

const VisaFree:React.FC<Props> = ({ widthCalculation, verticalColumn, count }) => {
  return (
    <>
    <div className={'visaFree'}>
    <style jsx>{`.visaFree {
      margin: 0px;
      padding: 8px 0px 0px;
      width: ${widthCalculation('visaFree', verticalColumn)}px;
      height: 20px;
      background: rgb(50, 205, 50);
      position:absolute;
      text-align: left;
      float: left;
    }`}</style>
    </div>
    <p className={'visaFreeText'}>
    <style jsx>{`.visaFreeText {
      margin: 5px;
      text-align: center;
      position:absolute;
      user-select: none;
    }`}</style>
    {count}</p>
    </>
  )
}

export default VisaFree