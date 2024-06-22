interface Props {
  tg:string;
  TG:boolean;
  setCountrySelect:Function;
}

const Togo:React.FC<Props> = ({ tg, TG, setCountrySelect }) => {
  return (
    <g className={'togo'} onMouseOver={() => setCountrySelect('togo')}>
      <style jsx>{`
      .togo {
        fill: ${tg};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tg)" />
    </defs>
    <path fill={TG && "url(#tg)"} d="M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z" stroke="black"/>
    </g>
  )
}

export default Togo