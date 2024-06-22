interface Props {
  gq:string;
  GQ:boolean;
  setCountrySelect:Function;
}

const EquatorialGuinea:React.FC<Props> = ({ gq, GQ, setCountrySelect }) => {
  return (
    <g className={'equatorialGuinea'} onMouseOver={() => setCountrySelect('equatorialGuinea')}>
      <style jsx>{`
      .equatorialGuinea {
        fill: ${gq};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gq" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gq)" />
    </defs>
    {GQ ?
    <>
    <path fill="url(#gq)" d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z" />
    <circle fill="url(#gq)" r="5" cy="491" cx="1045" stroke="black"/>
    </>
    :
    <>
    <path d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z" />
    <circle r="5" cy="491" cx="1045" stroke="black"/>
    </>
    }
    </g>
  )
}

export default EquatorialGuinea