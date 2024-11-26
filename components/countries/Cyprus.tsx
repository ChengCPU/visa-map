interface Props {
  cy:string;
  CY:boolean;
  setCountrySelect:Function;
}

const Cyprus:React.FC<Props> = ({ cy, CY, setCountrySelect }) => {
  return (
    <g className={'cyprus'} onMouseOver={() => setCountrySelect('cyprus')}>
      <style jsx>{`
      .cyprus {
        fill: ${cy};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="cy" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cy)" />
    </defs>
    <circle fill={CY ? "url(#cy)" : null} r="4" cy="280" cx="1160" stroke="black"/>
    </g>
  )
}

export default Cyprus