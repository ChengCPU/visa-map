interface Props {
  er:string;
  ER:boolean;
  setCountrySelect:Function;
}

const Eritrea:React.FC<Props> = ({ er, ER, setCountrySelect }) => {
  return (
    <g className={'eritrea'} onMouseOver={() => setCountrySelect('eritrea')}>
      <style jsx>{`
      .eritrea {
        fill: ${er};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="er" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#er)" />
    </defs>
    <path fill={ER ? "url(#er)" : null} d="M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z" stroke="black"/>
    </g>
  )
}

export default Eritrea