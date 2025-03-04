interface Props {
  ee:string;
  EE:boolean;
  setCountrySelect:Function;
}

const Estonia:React.FC<Props> = ({ ee, EE, setCountrySelect }) => {
  return (
    <g className={'estonia'} onMouseOver={() => setCountrySelect('estonia')}>
      <style jsx>{`
      .estonia {
        fill: ${ee};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ee" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ee)" />
    </defs>
    <path fill={EE ? "url(#ee)" : null} d="M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z" stroke="black"/>
    </g>
  )
}

export default Estonia