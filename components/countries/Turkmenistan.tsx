interface Props {
  tm:string;
  TM:boolean;
  setCountrySelect:Function;
}

const Turkmenistan:React.FC<Props> = ({ tm, TM, setCountrySelect }) => {
  return (
    <g className={'turkmenistan'} onMouseOver={() => setCountrySelect('turkmenistan')}>
      <style jsx>{`
      .turkmenistan {
        fill: ${tm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tm)" />
    </defs>
    <path fill={TM ? "url(#tm)" : null} d="M1338.3 262l-1.6-0.2-2.9-1.7-0.3 2.2-4.2 1.3 0.2 5.1-2.6 2-4 0.9-0.4 2.9-3.9 0.9-5.9-2.5-1.7-5.3-4-0.3-7.3-5.6-4.3-0.7-6.6-3.3-3.9-0.6-2 1.2-3.6-0.2-3 3.7-4.4 1.2-1.9-4.5-0.6-6.7-4.6-2.2 0.4-4.3-3.5-0.4-0.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6 0.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-0.3 5.9-0.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-0.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8 0.8 3.9z" stroke="black"/>
    </g>
  )
}

export default Turkmenistan