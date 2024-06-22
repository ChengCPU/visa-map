interface Props {
  ci:string;
  CI:boolean;
  setCountrySelect:Function;
}

const IvoryCoast:React.FC<Props> = ({ ci, CI, setCountrySelect }) => {
  return (
    <g className={'ivoryCoast'} onMouseOver={() => setCountrySelect('ivoryCoast')}>
      <style jsx>{`
      .ivoryCoast {
        fill: ${ci};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ci" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ci)" />
    </defs>
    <path fill={CI && "url(#ci)"} d="M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z" stroke="black"/>
    </g>
  )
}

export default IvoryCoast