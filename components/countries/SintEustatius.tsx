interface Props {
  xe:string;
  XE:boolean;
  setCountrySelect:Function;
}

const SintEustatius:React.FC<Props> = ({ xe, XE, setCountrySelect }) => {
  return (
    <g className={'sintEustatius'} onMouseOver={() => setCountrySelect('sintEustatius')}>
      <style jsx>{`
      .sintEustatius {
        fill: ${xe};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="xe" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#xe)" />
    </defs>
    <circle fill={XE ? "url(#xe)" : null} r="2.5" cy="393.5" cx="629" stroke="black"/>
    </g>
  )
}

export default SintEustatius