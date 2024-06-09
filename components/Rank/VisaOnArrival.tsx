interface Props {
  width:number;
  margin:number;
  count:number;
}

const VisaOnArrival:React.FC<Props> = ({ width, margin, count }) => {
  return (
    <>
    <div className={'visaOnArrival'}>
      <style jsx>{`
        .visaOnArrival {
          margin: 0px;
          padding: 8px 0px 0px;
          width: ${width}px;
          height: 20px;
          background: rgb(255, 255, 0);
          position: absolute;
          text-align: left;
          float: left;
        }
      `}</style>
    </div>
    <p className={'visaOnArrivalText'}>
      <style jsx>{`
        .visaOnArrivalText {
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

export default VisaOnArrival
