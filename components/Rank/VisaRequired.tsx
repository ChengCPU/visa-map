interface Props {
  width:number;
  margin:number;
  count:number;
}

const VisaRequired:React.FC<Props> = ({ width, margin, count }) => {
  return (
    <>
    <div className={'visaRequired'}>
      <style jsx>{`
        .visaRequired {
          margin: 0px;
          padding: 8px 0px 0px;
          width: ${width}px;
          height: 20px;
          background: rgb(150, 150, 150);
          position: absolute;
          text-align: left;
          float: left;
        }
      `}</style>
    </div>
    <p className={'visaRequired'}>
      <style jsx>{`
        .visaRequired {
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

export default VisaRequired