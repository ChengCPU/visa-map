interface Props {
  pt:string;
  PT:boolean;
  setCountrySelect:Function;
}

const Portugal:React.FC<Props> = ({ pt, PT, setCountrySelect }) => {
  return (
    <g className={'portugal'} onMouseOver={() => setCountrySelect('portugal')}>
      <style jsx>{`
      .portugal {
        fill: ${pt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="pt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pt)" />
    </defs>
    <path fill={PT && "url(#pt)"} d="M946.9 263.7l-2.2 1.6-2.8-0.9-2.7 0.7 0.9-5-0.3-3.9-2.4-0.6-1.1-2.4 0.5-4.2 2.2-2.3 0.5-2.6 1.2-3.8 0-2.7-0.9-2.3-0.2-2.2 1.9-1.6 2.2-0.9 1.2 3.1 3 0 0.9-0.8 3.1 0.2 1.3 3.2-2.4 1.7-0.3 5-0.8 0.9-0.3 3.1-2.3 0.5 2 3.8-1.6 4.2 1.8 1.9-0.8 1.7-2 2.4 0.4 2.2z" stroke="black"/>
    </g>
  )
}

export default Portugal