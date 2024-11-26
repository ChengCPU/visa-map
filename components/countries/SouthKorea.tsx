interface Props {
  kr:string;
  KR:boolean;
  setCountrySelect:Function;
}

const SouthKorea:React.FC<Props> = ({ kr, KR, setCountrySelect }) => {
return (
    <g className={'southKorea'} onMouseOver={() => setCountrySelect('southKorea')}>
      <style jsx>{`
      .southKorea {
        fill: ${kr};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kr" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kr)" />
    </defs>
    <path fill={KR ? "url(#kr)" : null} d="M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z" stroke="black"/>
    </g>
  )
}

export default SouthKorea