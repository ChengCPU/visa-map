interface Props {
  widthCalculation:Function;
  marginCalculation:Function;
  verticalColumn:number;
  count:number;
}

const EVisa:React.FC<Props> = ({ widthCalculation, marginCalculation, verticalColumn, count }) => {
  return (
    <>
    <div className={'evisa'}>
    <style jsx>{`.evisa {
      margin: 0px;
      padding: 8px 0px 0px;
      width: ${widthCalculation('evisa', verticalColumn)}px;
      height: 20px;
      background: rgb(135, 206, 250);
      position:absolute;
      text-align: left;
      float: left;
    }`}</style>
    </div>
    <p className={'evisa'}>
    <style jsx>{`.evisa {
      margin: 5px;
      margin-left: ${marginCalculation('evisa', verticalColumn)}px;
      text-align: center;
      position:absolute;
      user-select: none;
    }`}</style>
    {(count == 0) ? null : count}</p>
    </>
  )
}

export default EVisa