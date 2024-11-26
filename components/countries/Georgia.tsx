interface Props {
  ge:string;
  GE:boolean;
  setCountrySelect:Function;
}

const Georgia:React.FC<Props> = ({ ge, GE, setCountrySelect }) => {
  return (
    <g className={'georgia'} onMouseOver={() => setCountrySelect('georgia')}>
      <style jsx>{`
      .georgia {
        fill: ${ge};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ge" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ge)" />
    </defs>
    <path fill={GE ? "url(#ge)" : null} d="M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z" stroke="black"/>
    </g>
  )
}

export default Georgia