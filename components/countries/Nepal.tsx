interface Props {
  np:string;
  NP:boolean;
  setCountrySelect:Function;
}

const Nepal:React.FC<Props> = ({ np, NP, setCountrySelect }) => {
  return (
    <g className={'nepal'} onMouseOver={() => setCountrySelect('nepal')}>
      <style jsx>{`
      .nepal {
        fill: ${np};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="np" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#np)" />
    </defs>
    <path fill={NP ? "url(#np)" : null} d="M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z" stroke="black"/>
    </g>
  )
}

export default Nepal