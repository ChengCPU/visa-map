interface Props {
  width:number;
  margin:number;
  count:number;
}

const EVisa:React.FC<Props> = ({ width, margin, count }) => {
  return (
    <>
    <div className={'evisa'}>
      <style jsx>{`
        .evisa {
          margin: 0px;
          padding: 8px 0px 0px;
          width: ${width}px;
          height: 20px;
          background: rgb(135, 206, 250);
          position: absolute;
          text-align: left;
          float: left;
        }
      `}</style>
    </div>
    <p className={'evisaText'}>
      <style jsx>{`
        .evisaText {
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

export default EVisa