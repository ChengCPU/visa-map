interface Props {
  gn:string;
  GN:boolean;
  setCountrySelect:Function;
}

const Guinea:React.FC<Props> = ({ gn, GN, setCountrySelect }) => {
  return (
    <g className={'guinea'} onMouseOver={() => setCountrySelect('guinea')}>
      <style jsx>{`
      .guinea {
        fill: ${gn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gn)" />
    </defs>
    <path fill={GN ? "url(#gn)" : null} d="M921.5 421.9l0.3 2.4 0.9 0 1.5-0.9 0.9 0.2 1.6 1.7 2.4 0.5 1.5-1.4 1.9-0.9 1.3-0.9 1.1 0.2 1.3 1.4 0.6 1.8 2.3 2.7-1.1 1.6-0.3 2.1 1.2-0.6 0.7 0.7-0.3 1.9 1.7 1.9-1.1 0.5-0.5 2.2 1.3 2.6 1.4 5.2-2.1 0.7-0.5 0.9 0.4 1.3-0.4 2.8-0.9 0-1.6-0.2-1.1 2.6-1.6 0-1.1-1.4 0.4-2.6-2.4-3.9-1.4 0.7-1.3 0.2-1.5 0.3 0.1-2.3-0.9-1.7 0.2-1.9-1.2-2.7-1.6-2.3-4.5 0-1.3 1.2-1.6 0.2-1 1.4-0.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-0.9-1.4-1.3-0.6-2.8-0.8-1.4-1.7-1.1 2.6-3.1 1.7 0.1 1.5-1 1.2-0.1 0.9-0.8-0.4-2.1 0.6-0.7 0.1-2.2 2.7 0.1 4.1 1.5 1.2-0.1 0.4-0.7 3.1 0.5 0.8-0.4z" stroke="black"/>
    </g>
  )
}

export default Guinea