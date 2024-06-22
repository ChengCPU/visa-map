interface Props {
  mc:string;
  MC:boolean;
  setCountrySelect:Function;
}

const Monaco:React.FC<Props> = ({ mc, MC, setCountrySelect }) => {
  return (
    <g className={'monaco'} onMouseOver={() => setCountrySelect('monaco')}>
      <style jsx>{`
      .monaco {
        fill: ${mc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mc)" />
    </defs>
    <circle fill={MC && "url(#mc)"} r="4" cy="224" cx="1021" stroke="black"/>
    </g>
  )
}

export default Monaco