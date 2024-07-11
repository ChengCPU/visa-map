import { useState, useContext } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import Rectangle from './Map/Legend/Rectangle'
import LegendButton from './LegendButton'
const legendArray:number[] = Array.from({length:15},(_,index) => index)
const rgb:string[] = ['rgb(255,20,147)','rgb(255,145,0)','rgb(0,135,93)','rgb(0,51,153)','rgb(153,123,61)','rgb(255,179,191)','rgb(50,205,50)','rgb(81,205,123)','rgb(161,224,123)','rgb(255,255,92)','rgb(135,206,250)','rgb(118,65,171)','rgb(200,200,200)','rgb(150,150,150)','rgb(0,0,0)']
const policy:string[] = ['Home country','OECS','MERCOSUR','EU','GCC','Freedom of movement','Visa-free','ETA/ESTA','Visa on arrival/E-visa','Visa on arrival','E-visa','Special permit','Simplified visa','Visa required','Confirmation required']
interface Props {
  legend:boolean[];
  position:string;
}

const Legend:React.FC<Props> = ({ legend, position }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  const [collapse, setCollapse] = useState<boolean>(true)

  const renderLegend = (legendArray:number[]) => {
    return legendArray.map(legendArray => 
      legend[legendArray] &&
      <div className={'element'}>
        <style jsx>{`
          .element {
            position: relative;
            display: flex;
            margin-left: 0.75px;
            align-items: center;
            justify-content: left;
            height: 18px;
          }
          .text {
            margin-left: 4px;
          }
        `}</style>
          <Rectangle color={rgb[legendArray]}/>
          <p className={'text'}>{policy[legendArray]}</p>
      </div>
    )
  }

  return (
    (dimensions.width <= 800 && legend[13]) &&
    <div className={'legend'}>
      <div className={'legendButton'}>
        <LegendButton
          collapse={collapse}
          setCollapse={setCollapse}
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .legend {
          background-color: white;
          position: fixed;
          ${(position == '90') ? 'top: ' + position + 'px;' : 'bottom: ' + position + 'px;'}
          border-radius: 8px;
          border-color: black;
          ${collapse && 'border-style: solid;'}
          border-width: 2px;
        }
        .element {
          position: relative;
          display: flex;
          margin-left: 0.75px;
          align-items: center;
          justify-content: left;
          height: 18px;
        }
        .text {
          margin-left: 4px;
        }
        .legendButton {
          position: absolute;
          bottom: calc(100% + 5px);
          left: 7%;
          transform: translateX(-50%);
          background-color: none;
          padding: 2px;
          border-radius: 5px;
          z-index: 999;
          ${!collapse && 'padding-left: 32px'}
        }
    `}</style>
      {collapse &&
      <table>
        <tbody>
          <tr>
            <td>
              {renderLegend(legendArray)}
            </td>
          </tr>
        </tbody>
      </table>
      }
    </div>
  )
}

export default Legend