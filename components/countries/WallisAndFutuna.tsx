interface Props {
  wf:string;
  WF:boolean;
  setCountrySelect:Function;
}

const WallisAndFutuna:React.FC<Props> = ({ wf, WF, setCountrySelect }) => {
  return (
    <g className={'wallisAndFutuna'} onMouseOver={() => setCountrySelect('wallisAndFutuna')}>
      <style jsx>{`
      .wallisAndFutuna {
        fill: ${wf};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="wf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#wf)" />
    </defs>
    <circle fill={WF && "url(#wf)"} r="5" cy="590" cx="2015" stroke="black"/>
    </g>
  )
}

export default WallisAndFutuna