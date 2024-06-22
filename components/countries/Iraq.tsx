interface Props {
  iq:string;
  IQ:boolean;
  setCountrySelect:Function;
}

const Iraq:React.FC<Props> = ({ iq, IQ, setCountrySelect }) => {
  return (
    <g className={'iraq'} onMouseOver={() => setCountrySelect('iraq')}>
      <style jsx>{`
      .iraq {
        fill: ${iq};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="iq" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#iq)" />
    </defs>
    <path fill={IQ && "url(#iq)"} d="M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z" stroke="black"/>
    </g>
  )
}

export default Iraq