interface Props {
  vc:string;
  VC:boolean;
  setCountrySelect:Function;
}

const SaintVincentAndTheGrenadines:React.FC<Props> = ({ vc, VC, setCountrySelect }) => {
  return (
    <g className={'saintVincentAndTheGrenadines'} onMouseOver={() => setCountrySelect('saintVincentAndTheGrenadines')}>
      <style jsx>{`
      .saintVincentAndTheGrenadines {
        fill: ${vc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="vc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#vc)" />
    </defs>
    <circle fill={VC ? "url(#vc)" : null} r="3.25" cy="426" cx="645" stroke="black"/>
    </g>
  )
}

export default SaintVincentAndTheGrenadines