interface Props {
  lt:string;
  LT:boolean;
  setCountrySelect:Function;
}

const Lithuania:React.FC<Props> = ({ lt, LT, setCountrySelect }) => {
  return (
    <g className={'lithuania'} onMouseOver={() => setCountrySelect('lithuania')}>
      <style jsx>{`
      .lithuania {
        fill: ${lt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="lt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lt)" />
    </defs>
    <path fill={LT ? "url(#lt)" : null} d="M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z" stroke="black"/>
    </g>
  )
}

export default Lithuania