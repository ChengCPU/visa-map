interface Props {
  jo:string;
  JO:boolean;
  setCountrySelect:Function;
}

const Jordan:React.FC<Props> = ({ jo, JO, setCountrySelect }) => {
  return (
    <g className={'jordan'} onMouseOver={() => setCountrySelect('jordan')}>
      <style jsx>{`
      .jordan {
        fill: ${jo};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="jo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#jo)" />
    </defs>
    <path fill={JO ? "url(#jo)" : null} d="M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z" stroke="black"/>
    </g>
  )
}

export default Jordan