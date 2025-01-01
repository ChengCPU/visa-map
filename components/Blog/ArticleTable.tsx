interface Props {
  left:any;
  right:any;
}

const ArticleTable:React.FC<Props> = ({ left, right }) => {

  return (
    <div className={'main'}>
    <style jsx>{`
      .main {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
      }
      .sub {
        flex: 1 1 calc(50% - 10px);
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        display: grid;
        place-items: center;
      }
    `}</style>
      <div className={'sub'}>{left}</div>
      <div className={'sub'}>{right}</div>
    </div>
  )
}

export default ArticleTable