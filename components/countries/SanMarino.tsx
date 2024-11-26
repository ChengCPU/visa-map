interface Props {
  sm:string;
  SM:boolean;
  setCountrySelect:Function;
}

const SanMarino:React.FC<Props> = ({ sm, SM, setCountrySelect }) => {
  return (
    <g className={'sanMarino'} onMouseOver={() => setCountrySelect('sanMarino')}>
      <style jsx>{`
      .sanMarino {
        fill: ${sm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sm)" />
    </defs>
    <circle fill={SM ? "url(#sm)" : null} r="4" cy="223" cx="1053" stroke="black"/>
    </g>
  )
}

export default SanMarino