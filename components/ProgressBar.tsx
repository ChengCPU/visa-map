import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
interface Props {
  verticalColumn:number | null;
  width:string;
  height:string;
  color:string;
  percentage:number;
}

const ProgressBar:React.FC<Props> = ({ verticalColumn, width, height, color, percentage }) => {

  const valueCalculation:Function = () => {
    if(verticalColumn == null) {return Math.round((percentage * 100 / 247) * 10) / 10}
    return Math.round((percentage * 100 / 247) * 10) / 10
  }

  return (
    <div style={{ width: width, height: height, color: color }}>
      <CircularProgressbar
      value={valueCalculation()}
      text={`${valueCalculation()}%`}
      styles={{
      root: {},
      path: {
        stroke: `${color}`,
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      },
      trail: {
        stroke: '#222222',
        strokeLinecap: 'butt',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      },
      text: {
        fill: '#ffffff',
        fontSize: '20px',
        userSelect: 'none',
      },
      background: {
        fill: '#3e98c7',
      },
      }}/>
    </div>
  )
}

export default ProgressBar
