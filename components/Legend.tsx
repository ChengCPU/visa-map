import { useState, useContext } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import Rectangle from './Map/Legend/Rectangle'
import LegendButton from './LegendButton'
interface Props {
  legend:boolean[];
  position:string;
}

const Legend:React.FC<Props> = ({ legend, position }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  const [collapse, setCollapse] = useState(true)

  return (
    <>
    {(dimensions.width <= 800 && legend[13]) ?
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
        bottom: ${position}px;
        border-radius: 8px;
        border-color: black;
        ${(collapse) ? 'border-style: solid;' : null}
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
        ${(collapse) ? null : 'padding-left: 22px'}
      }
    `}</style>
      {(collapse) ?
      <table>
        <tbody>
          <tr>
            <td>
              {(legend[0]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(255,20,147)'}/>
                <p className={'text'}>{'Home country'}</p>
              </div> : null }
              {(legend[1]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(255,145,0)'}/>
                <p className={'text'}>{'OECS'}</p>
              </div> : null}
              {(legend[2]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(0,135,93)'}/>
                <p className={'text'}>{'MERCOSUR'}</p>
              </div> : null}
              {(legend[3]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(0,51,153)'}/>
                <p className={'text'}>{'EU'}</p>
              </div> : null}
              {(legend[4]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(153,123,61)'}/>
                <p className={'text'}>{'GCC'}</p>
              </div> : null}
              {(legend[5]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(255,179,191)'}/>
                <p className={'text'}>{'Freedom of movement'}</p>
              </div> : null}
              {(legend[6]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(50,205,50)'}/>
                <p className={'text'}>{'Visa-free'}</p>
              </div> : null}
              {(legend[7]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(81,205,123)'}/>
                <p className={'text'}>{'ETA/ESTA'}</p>
              </div> : null}
              {(legend[8]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(161,224,123)'}/>
                <p className={'text'}>{'Visa on arrival/E-visa'}</p>
              </div> : null}
              {(legend[9]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(255,255,92)'}/>
                <p className={'text'}>{'Visa on arrival'}</p>
              </div> : null}
              {(legend[10]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(135,206,250)'}/>
                <p className={'text'}>{'E-visa'}</p>
              </div> : null}
              {(legend[11]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(118,65,171)'}/>
                <p className={'text'}>{'Special permit'}</p>
              </div> : null}
              {(legend[12]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(200,200,200)'}/>
                <p className={'text'}>{'Simplified visa'}</p>
              </div> : null}
              {(legend[13]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(150,150,150)'}/>
                <p className={'text'}>{'Visa required'}</p>
              </div> : null}
              {(legend[14]) ?
              <div className={'element'}>
                <Rectangle color={'rgb(0,0,0)'}/>
                <p className={'text'}>{'Confirmation required'}</p>
              </div> : null}
            </td>
          </tr>
        </tbody>
      </table>
      : null
      }
    </div>
    : null }
    </>
  )
}

export default Legend