interface Props {
  tn:string;
  TN:boolean;
  setCountrySelect:Function;
}

const Tunisia:React.FC<Props> = ({ tn, TN, setCountrySelect }) => {
  return (
    <g className={'tunisia'} onMouseOver={() => setCountrySelect('tunisia')}>
      <style jsx>{`
      .tunisia {
        fill: ${tn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tn)" />
    </defs>
    <path fill={TN ? "url(#tn)" : null} d="M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z" stroke="black"/>
    </g>
  )
}

export default Tunisia