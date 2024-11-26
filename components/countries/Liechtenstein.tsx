interface Props {
  li:string;
  LI:boolean;
  setCountrySelect:Function;
}

const Liechtenstein:React.FC<Props> = ({ li, LI, setCountrySelect }) => {
  return (
    <g className={'liechtenstein'} onMouseOver={() => setCountrySelect('liechtenstein')}>
      <style jsx>{`
      .liechtenstein {
        fill: ${li};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="li" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#li)" />
    </defs>
    <circle fill={LI ? "url(#li)" : null} r="4" cy="200" cx="1038" stroke="black"/>
    </g>
  )
}

export default Liechtenstein