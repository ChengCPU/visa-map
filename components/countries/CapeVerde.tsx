interface Props {
  cv:string;
  CV:boolean;
  setCountrySelect:Function;
}

const CapeVerde:React.FC<Props> = ({ cv, CV, setCountrySelect }) => {
  return (
    <g className={'capeVerde'} onMouseOver={() => setCountrySelect('capeVerde')}>
      <style jsx>{`
      .capeVerde {
        fill: ${cv};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="cv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cv)" />
    </defs>
    <circle fill={CV && "url(#cv)"} r="5" cy="400" cx="853" stroke="black"/>
    </g>
  )
}

export default CapeVerde