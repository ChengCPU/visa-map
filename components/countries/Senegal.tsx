interface Props {
  sn:string;
  SN:boolean;
  setCountrySelect:Function;
}

const Senegal:React.FC<Props> = ({ sn, SN, setCountrySelect }) => {
  return (
    <g className={'senegal'} onMouseOver={() => setCountrySelect('senegal')}>
      <style jsx>{`
      .senegal {
        fill: ${sn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sn)" />
    </defs>
    <path fill={SN ? "url(#sn)" : null} d="M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z" stroke="black"/>
    </g>
  )
}

export default Senegal