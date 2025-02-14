interface Props {
  ba:string;
  BA:boolean;
  setCountrySelect:Function;
}

const BosniaAndHerzegovina:React.FC<Props> = ({ ba, BA, setCountrySelect }) => {
  return (
    <g className={'bosniaAndHerzegovina'} onMouseOver={() => setCountrySelect('bosniaAndHerzegovina')}>
      <style jsx>{`
      .bosniaAndHerzegovina {
        fill: ${ba};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ba" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ba)" />
    </defs>
    <path fill={BA ? "url(#ba)" : null} d="M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z" stroke="black"/>
    </g>
  )
}

export default BosniaAndHerzegovina