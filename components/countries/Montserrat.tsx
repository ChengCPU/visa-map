interface Props {
  ms:string;
  MS:boolean;
  setCountrySelect:Function;
}

const Montserrat:React.FC<Props> = ({ ms, MS, setCountrySelect }) => {
  return (
    <g className={'montserrat'} onMouseOver={() => setCountrySelect('montserrat')}>
      <style jsx>{`
      .montserrat {
        fill: ${ms};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ms" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ms)" />
    </defs>
    <circle fill={MS ? "url(#ms)" : null} r="2.5" cy="401" cx="637" stroke="black"/>
    </g>
  )
}

export default Montserrat