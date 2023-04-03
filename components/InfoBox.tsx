interface Props {
  mousePos:number | boolean[];
  hover:boolean;
  countrySelect:string;
  priority:any;
}

const InfoBox:React.FC<Props> = ({ mousePos, hover, countrySelect, priority }) => {

  const rgbToText = (rgb:string) => {
    switch(rgb) {
      case 'rgb(255,20,147)':
        return 'Home country'
      case 'rgb(255,145,0)':
        return 'OECS freedom of movement'
      case 'rgb(0,135,93)':
        return 'MERCSOUR freedom of movement'
      case 'rgb(0,51,153)':
        return 'EU freedom of movement'
      case 'rgb(153,123,61)':
        return 'GCC freedom of movement'
      case 'rgb(255,179,191)':
        return 'Freedom of movement'
      case 'rgb(50,205,50)':
        return 'Visa-free'
      case 'rgb(161,224,123)':
        return 'Visa on arrival/E-visa'
      case 'rgb(255,255,92)':
        return 'Visa on arrival'
      case 'rgb(135,206,250)':
        return 'E-visa'
      case 'rgb(118,65,171)':
        return 'Special permit/police check'
      case 'rgb(200,200,200)':
        return 'Simplified visa'
      case 'rgb(149,150,150)':
        return 'Visa required'
    }
  }

  return (
    (hover == true) ?
    <div className={'infoBox'}><style jsx>{`
    .infoBox {
      background-color: white;
      position: absolute;
      left: ${mousePos[0] + 5 + 'px'};
      top: ${mousePos[1] + 5 + 'px'};
      border-radius: 8px;
      border-color: black;
      border-style: solid;
      border-width: 2px;
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
            <td><p>{rgbToText(priority[countrySelect + 'Color'])}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    :
    null
  )
}

export default InfoBox