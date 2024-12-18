interface Props {
  ac:string;
  AC:boolean;
  setCountrySelect:Function;
}

const AscensionIsland:React.FC<Props> = ({ ac, AC, setCountrySelect }) => {
  return (
    <g className={'ascensionIsland'} onMouseOver={() => setCountrySelect('ascensionIsland')}>
      <style jsx>{`
      .ascensionIsland {
        fill: ${ac};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ac" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ac)" />
    </defs>
    <circle fill={AC ? "url(#ac)" : null} r="4" cy="550" cx="900" stroke="black"/>
    </g>
  )
}

export default AscensionIsland