interface Props {
  bg:string;
  BG:boolean;
  setCountrySelect:Function;
}

const Bulgaria:React.FC<Props> = ({ bg, BG, setCountrySelect }) => {
  return (
    <g className={'bulgaria'} onMouseOver={() => setCountrySelect('bulgaria')}>
      <style jsx>{`
      .bulgaria {
        fill: ${bg};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="bg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
    </defs>
    <path fill={BG && "url(#bg)"} d="M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z" stroke="black"/>
    </g>
  )
}

export default Bulgaria