interface Props {
  xo:string;
  XO:boolean;
  setCountrySelect:Function;
}

const SouthOssetia:React.FC<Props> = ({ xo, XO, setCountrySelect }) => {
  return (
    <g className={'southOssetia'} onMouseOver={() => setCountrySelect('southOssetia')}>
      <style jsx>{`
      .southOssetia {
        fill: ${xo};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="xo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#xo)" />
    </defs>
    <circle fill={XO && "url(#xo)"} r="3.5" cy="229" cx="1212" stroke="black"/>
    </g>
  )
}

export default SouthOssetia