interface Props {
  il:string;
  IL:boolean;
  setCountrySelect:Function;
}

const Israel:React.FC<Props> = ({ il, IL, setCountrySelect }) => {
  return (
    <g className={'israel'} onMouseOver={() => setCountrySelect('israel')}>
      <style jsx>{`
      .israel {
        fill: ${il};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="il" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#il)" />
    </defs>
    <path fill={IL && "url(#il)"} d="M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z" stroke="black"/>
    </g>
  )
}

export default Israel