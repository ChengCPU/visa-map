interface Props {
  be:string;
  BE:boolean;
  setCountrySelect:Function;
}

const Belgium:React.FC<Props> = ({ be, BE, setCountrySelect }) => {
  return (
    <g className={'belgium'} onMouseOver={() => setCountrySelect('belgium')}>
      <style jsx>{`
      .belgium {
        fill: ${be};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="be" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#be)" />
    </defs>
    <path fill={BE ? "url(#be)" : null} d="M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z" stroke="black"/>
    </g>
  )
}
    
export default Belgium