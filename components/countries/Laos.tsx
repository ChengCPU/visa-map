interface Props {
  la:string;
  LA:boolean;
  setCountrySelect:Function;
}

const Laos:React.FC<Props> = ({ la, LA, setCountrySelect }) => {
  return (
    <g className={'laos'} onMouseOver={() => setCountrySelect('laos')}>
      <style jsx>{`
      .laos {
        fill: ${la};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="la" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#la)" />
    </defs>
    <path fill={LA && "url(#la)"} d="M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z" stroke="black"/>
    </g>
  )
}

export default Laos