interface Props {
  cr:string;
  CR:boolean;
  setCountrySelect:Function;
}

const CostaRica:React.FC<Props> = ({cr, CR, setCountrySelect }) => {
  return (
    <g className={'costaRica'} onMouseOver={() => setCountrySelect('costaRica')}>
      <style jsx>{`
      .costaRica {
        fill: ${cr};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="cr" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cr)" />
    </defs>
    <path fill={CR ? "url(#cr)" : null} d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z" stroke="black"/>
    </g>
  )
}

export default CostaRica