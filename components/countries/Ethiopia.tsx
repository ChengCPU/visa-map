interface Props {
  et:string;
  ET:boolean;
  setCountrySelect:Function;
}

const Ethiopia:React.FC<Props> = ({ et, ET, setCountrySelect }) => {
  return (
    <g className={'ethiopia'} onMouseOver={() => setCountrySelect('ethiopia')}>
      <style jsx>{`
      .ethiopia {
        fill: ${et};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="et" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#et)" />
    </defs>
    <path fill={ET ? "url(#et)" : null} d="M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z" stroke="black"/>
    </g>
  )
}

export default Ethiopia