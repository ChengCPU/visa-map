interface Props {
  count:number;
  max:number;
}

const FreedomOfMovement:React.FC<Props> = ({ count, max }) => {
  return (
    <>
    <div className={'freedomOfMovement'}>
      <style jsx>{`
        .freedomOfMovement {
          margin: 0px;
          padding: 8px 0px 0px;
          width: ${Math.max(4, (count/max) * 100)}%;
          height: 20px;
          background: rgb(255,179,191);
          position: absolute;
          text-align: left;
          float: left;
        }
      `}</style>
    </div>
    <p className={'freedomOfMovementText'}>
      <style jsx>{`
        .freedomOfMovementText {
          margin: 5px;
          text-align: center;
          position: absolute;
          user-select: none;
        }
      `}</style>
      {count}
    </p>
    </>
  )
}

export default FreedomOfMovement
