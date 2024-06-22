interface Props {
  cw:string;
  CW:boolean;
  setCountrySelect:Function;
}

const Curacao:React.FC<Props> = ({ cw, CW, setCountrySelect }) => {
  return (
    <g className={'curacao'} onMouseOver={() => setCountrySelect('curacao')}>
      <style jsx>{`
      .curacao {
        fill: ${cw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="cw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cw)" />
    </defs>
    <circle fill={CW && "url(#cw)"} r="2.5" cy="424" cx="598" stroke="black"/>
    </g>
  )
}

export default Curacao