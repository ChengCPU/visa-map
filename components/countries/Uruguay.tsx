interface Props {
  uy:string;
  UY:boolean;
  setCountrySelect:Function;
}

const Uruguay:React.FC<Props> = ({ uy, UY, setCountrySelect }) => {
  return (
    <g className={'uruguay'} onMouseOver={() => setCountrySelect('uruguay')}>
      <style jsx>{`
      .uruguay {
        fill: ${uy};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="uy" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#uy)" />
    </defs>
    <path fill={UY ? "url(#uy)" : null} d="M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z" stroke="black"/>
    </g>
  )
}

export default Uruguay