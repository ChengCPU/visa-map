interface Props {
  zw:string;
  ZW:boolean;
  setCountrySelect:Function;
}

const Zimbabwe:React.FC<Props> = ({ zw, ZW, setCountrySelect }) => {
  return (
    <g className={'zimbabwe'} onMouseOver={() => setCountrySelect('zimbabwe')}>
      <style jsx>{`
      .zimbabwe {
        fill: ${zw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="zw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#zw)" />
    </defs>
    <path fill={ZW ? "url(#zw)" : null} d="M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z" stroke="black"/>
    </g>
  )
}

export default Zimbabwe