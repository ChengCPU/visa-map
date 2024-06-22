interface Props {
  me:string;
  ME:boolean;
  setCountrySelect:Function;
}

const Montenegro:React.FC<Props> = ({ me, ME, setCountrySelect }) => {
  return (
    <g className={'montenegro'} onMouseOver={() => setCountrySelect('montenegro')}>
      <style jsx>{`
      .montenegro {
        fill: ${me};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="me" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#me)" />
    </defs>
    <path d="M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z" stroke="black"/>
    <circle fill={ME && "url(#me)"} r="4" cy="227" cx="1086" stroke="black"/>
    </g>
  )
}

export default Montenegro