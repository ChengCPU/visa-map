interface Props {
  mq:string;
  MQ:boolean;
  setCountrySelect:Function;
}

const Martinique:React.FC<Props> = ({ mq, MQ, setCountrySelect }) => {
  return (
    <g className={'martinique'} onMouseOver={() => setCountrySelect('martinique')}>
      <style jsx>{`
      .martinique {
        fill: ${mq};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mq" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mq)" />
    </defs>
    <circle fill={MQ ? "url(#mq)" : null} r="2.5" cy="413" cx="648" stroke="black"/>
    </g>
  )
}

export default Martinique