interface Props {
  mk:string;
  MK:boolean;
  setCountrySelect:Function;
}

const NorthMacedonia:React.FC<Props> = ({ mk, MK, setCountrySelect }) => {
  return (
    <g className={'northMacedonia'} onMouseOver={() => setCountrySelect('northMacedonia')}>
      <style jsx>{`
      .northMacedonia {
        fill: ${mk};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mk)" />
    </defs>
    <path fill={MK ? "url(#mk)" : null} d="M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z" stroke="black"/>
    </g>
  )
}

export default NorthMacedonia