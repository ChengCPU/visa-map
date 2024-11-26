interface Props {
  gt:string;
  GT:boolean;
  setCountrySelect:Function;
}

const Guatemala:React.FC<Props> = ({ gt, GT, setCountrySelect }) => {
  return (
    <g className={'guatemala'} onMouseOver={() => setCountrySelect('guatemala')}>
      <style jsx>{`
      .guatemala {
        fill: ${gt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gt)" />
    </defs>
    <path fill={GT ? "url(#gt)" : null} d="M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z" stroke="black"/>
    </g>
  )
}

export default Guatemala