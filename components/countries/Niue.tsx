interface Props {
  nu:string;
  NU:boolean;
  setCountrySelect:Function;
}

const Niue:React.FC<Props> = ({ nu, NU, setCountrySelect }) => {
  return (
    <g className={'niue'} onMouseOver={() => setCountrySelect('niue')}>
      <style jsx>{`
      .niue {
        fill: ${nu};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="nu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#nu)" />
    </defs>
    <circle fill={NU ? "url(#nu)" : null} r="5" cy="615" cx="32" stroke="black"/>
    </g>
  )
}

export default Niue