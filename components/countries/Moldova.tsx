interface Props {
  md:string;
  MD:boolean;
  setCountrySelect:Function;
}

const Moldova:React.FC<Props> = ({ md, MD, setCountrySelect }) => {
  return (
    <g className={'moldova'} onMouseOver={() => setCountrySelect('moldova')}>
      <style jsx>{`
      .moldova {
        fill: ${md};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="md" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#md)" />
    </defs>
    <path fill={MD ? "url(#md)" : null} d="M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z" />
    </g>
  )
}

export default Moldova