interface Props {
  xk:string;
  XK:boolean;
  setCountrySelect:Function;
}

const Kosovo:React.FC<Props> = ({ xk, XK, setCountrySelect }) => {
  return (
    <g className={'kosovo'} onMouseOver={() => setCountrySelect('kosovo')}>
      <style jsx>{`
      .kosovo {
        fill: ${xk};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="xk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#xk)" />
    </defs>
    <circle fill={XK ? "url(#xk)" : null} r="4" cy="228" cx="1095" stroke="black"/>
    </g>
  )
}

export default Kosovo