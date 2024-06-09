interface Props {
  width:number;
  margin:number;
  count:number;
}

const VisaOnArrivalEvisa:React.FC<Props> = ({ width, margin, count }) => {
  return (
    <>
    <div className={'visaOnArrivalEvisa'}>
      <style jsx>{`
        .visaOnArrivalEvisa {
          margin: 0px;
          padding: 8px 0px 0px;
          width: ${width}px;
          height: 20px;
          background: rgb(161, 224, 123);
          position: absolute;
          text-align: left;
          float: left;
        }
      `}</style>
    </div>
    <p className={'visaOnArrivalEvisaText'}>
      <style jsx>{`
        .visaOnArrivalEvisaText {
          margin: 5px;
          margin-left: ${margin}px;
          text-align: center;
          position: absolute;
          user-select: none;
        }
      `}</style>
      {count > 0 && count}
    </p>
    </>
  )
}

export default VisaOnArrivalEvisa