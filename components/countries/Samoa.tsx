interface Props {
  ws:string;
  WS:boolean;
  setCountrySelect:Function;
}

const Samoa:React.FC<Props> = ({ ws, WS, setCountrySelect }) => {
  return (
    <g className={'samoa'} onMouseOver={() => setCountrySelect('samoa')}>
      <style jsx>{`
      .samoa {
        fill: ${ws};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ws" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ws)" />
    </defs>
    <circle fill={WS ? "url(#ws)" : null} r="5" cy="590" cx="20" stroke="black"/>
    </g>
  )
}

export default Samoa