import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface Props {
  verticalColumn:number | null;
  width:string;
  height:string;
  color:string;
  percentage:number;
}

const ProgressBar:React.FC<Props> = ({ verticalColumn, width, height, color, percentage }) => {

  const valueCalculation = () => {
    if(verticalColumn == null) {return percentage * 100 / 250}
    return percentage * 100 / 250
  }

  return (
    <div style={{ width: width, height: height, color: color }}>
      <CircularProgressbar 
      value={valueCalculation()}
      text={`${valueCalculation()}%`}
      styles={{
      // Customize the root svg element
      root: {},
      // Customize the path, i.e. the "completed progress"
      path: {
        // Path color
        stroke: `${color}`,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
        // Customize transition animation
        transition: 'stroke-dashoffset 0.5s ease 0s',
        // Rotate the path
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      },
      // Customize the circle behind the path, i.e. the "total progress"
      trail: {
        // Trail color
        stroke: '#222222',
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
        // Rotate the trail
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      },
      // Customize the text
      text: {
        // Text color
        fill: '#ffffff',
        // Text size
        fontSize: '20px',
      },
      // Customize background - only used when the `background` prop is true
      background: {
        fill: '#3e98c7',
      },
      }}/>
    </div>
  )
}

export default ProgressBar