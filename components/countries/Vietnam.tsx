interface Props {
  vn:string;
  VN:boolean;
  setCountrySelect:Function;
}

const Vietnam:React.FC<Props> = ({ vn, VN, setCountrySelect }) => {
  return (
    <g className={'vietnam'} onMouseOver={() => setCountrySelect('vietnam')}>
      <style jsx>{`
      .vietnam {
        fill: ${vn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="vn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#vn)" />
    </defs>
    <path fill={VN ? "url(#vn)" : null} d="M1586.5 363.5l-6.5 5.4-3.7 6.1-0.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9 0.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 0.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6-6.8 0-3.5-5.8-4-5.1 2.7-1.6 4.4 0.1 5.3-0.8 4.1-3.4 3.1 2.4 5.3 1.2-0.3 3.7 3.1 2.6 5.9 1.7z" stroke="black"/>
    </g>
  )
}

export default Vietnam