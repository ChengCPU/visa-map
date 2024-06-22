interface Props {
  sx:string;
  SX:boolean;
  setCountrySelect:Function;
}

const SintMaarten:React.FC<Props> = ({ sx, SX, setCountrySelect }) => {
  return (
    <g className={'sintMaarten'} onMouseOver={() => setCountrySelect('sintMaarten')}>
      <style jsx>{`
      .sintMaarten {
        fill: ${sx};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sx)" />
    </defs>
    <circle fill={SX && "url(#sx)"} r="2.5" cy="384" cx="630" stroke="black"/>
    </g>
  )
}

export default SintMaarten