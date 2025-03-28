interface Props {
  sr:string;
  SR:boolean;
  setCountrySelect:Function;
}

const Suriname:React.FC<Props> = ({ sr, SR, setCountrySelect }) => {
  return (
    <g className={'suriname'} onMouseOver={() => setCountrySelect('suriname')}>
      <style jsx>{`
      .suriname {
        fill: ${sr};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sr" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sr)" />
    </defs>
    <path fill={SR ? "url(#sr)" : null} d="M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z" stroke="black"/>
    </g>
  )
}

export default Suriname