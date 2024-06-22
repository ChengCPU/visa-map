interface Props {
  ad:string;
  AD:boolean;
  setCountrySelect:Function;
}

const Andorra:React.FC<Props> = ({ ad, AD, setCountrySelect }) => {
  return (
    <g className={'andorra'} onMouseOver={() => setCountrySelect('andorra')}>
      <style jsx>{`
      .andorra {
        fill: ${ad};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ad" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ad)" />
    </defs>
    <circle fill={AD && "url(#ad)"} r="4" cy="230" cx="993" stroke="black"/>
    </g>
  )
}

export default Andorra