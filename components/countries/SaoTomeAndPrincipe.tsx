interface Props {
  st:string;
  ST:boolean;
  setCountrySelect:Function;
}

const SaoTomeAndPrincipe:React.FC<Props> = ({ st, ST, setCountrySelect }) => {
  return (
    <g className={'saoTomeAndPrincipe'} onMouseOver={() => setCountrySelect('saoTomeAndPrincipe')}>
      <style jsx>{`
      .saoTomeAndPrincipe {
        fill: ${st};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="st" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#st)" />
    </defs>
    <circle fill={ST && "url(#st)"} r="5" cy="500" cx="1025" stroke="black"/>
    </g>
  )
}

export default SaoTomeAndPrincipe