import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface Props {
  percentage:number;
}

const ProgressBar:React.FC<Props> = ({ percentage }) => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar 
      value={percentage}
      text={`${percentage}%`}
      styles={{
      // Customize the root svg element
      root: {},
      // Customize the path, i.e. the "completed progress"
      path: {
        // Path color
        stroke: 'rgb(50,205,50)',
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
        stroke: '#d6d6d6',
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
        fontSize: '16px',
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