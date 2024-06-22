interface Props {
  dx:string;
  DO:boolean;
  setCountrySelect:Function;
}

const DominicanRepublic:React.FC<Props> = ({ dx, DO, setCountrySelect }) => {
  return (
    <g className={'dominicanRepublic'} onMouseOver={() => setCountrySelect('dominicanRepublic')}>
      <style jsx>{`
      .dominicanRepublic {
        fill: ${dx};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="do" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#do)" />
    </defs>
    <path fill={DO && "url(#do)"} d="M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z" stroke="black"/>
    </g>
  )
}

export default DominicanRepublic