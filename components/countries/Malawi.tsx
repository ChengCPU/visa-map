interface Props {
  mw:string;
  MW:boolean;
  setCountrySelect:Function;
}

const Malawi:React.FC<Props> = ({ mw, MW, setCountrySelect }) => {
  return (
    <g className={'malawi'} onMouseOver={() => setCountrySelect('malawi')}>
      <style jsx>{`
      .malawi {
        fill: ${mw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mw)" />
    </defs>
    <path fill={MW && "url(#mw)"} d="M1182.3 588.9l0.4 0 1.9 2.1 2.2 4.6 0.1 8.3-2.5 1.3-1.9 4.5-3.5-4-0.2-4.5 1.3-3-0.2-2.6-2.2-1.6-1.5 0.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-0.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-0.1 0.8 1.8 4.1 0.2 7.7-1.8 3.6 1.6 4.7-0.2 2.8 1.2 1.9-0.1 2.4 0.9 1.4 1-1.6 1.9 2.5 0.2-0.8-1-3.4-1.1-0.3-0.1-0.9z" stroke="black"/>
    </g>
  )
}

export default Malawi