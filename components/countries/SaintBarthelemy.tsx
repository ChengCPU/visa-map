interface Props {
  bl:string;
  BL:boolean;
  setCountrySelect:Function;
}

const SaintBarthelemy:React.FC<Props> = ({ bl, BL, setCountrySelect }) => {
  return (
    <g className={'saintBarthelemy'} onMouseOver={() => setCountrySelect('saintBarthelemy')}>
      <style jsx>{`
      .saintBarthelemy {
        fill: ${bl};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="bl" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bl)" />
    </defs>
    <circle fill={BL ? "url(#bl)" : null} r="2.5" cy="388" cx="627" stroke="black"/>
    </g>
  )
}

export default SaintBarthelemy