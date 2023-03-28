interface Props {
  mousePos:number | boolean[];
  hover:boolean;
}

const InfoBox:React.FC<Props> = ({ mousePos, hover }) => {

  return (
    (hover == true) ?
    <div className={'infoBox'}><style jsx>{`
    .infoBox {
      background-color: white;
      position: absolute;
      left: ${mousePos[0] + 5 + 'px'};
      top: ${mousePos[1] + 5 + 'px'};
      border-radius: 8px;
      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;
      pointer-events:none;
    }`}</style>
      <table>
        <tbody>
          <tr>
            <td><p>X: {mousePos[0]} Y: {mousePos[1]}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    :
    null
  )
}

export default InfoBox