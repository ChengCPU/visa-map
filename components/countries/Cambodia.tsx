interface Props {
  kh:string;
  KH:boolean;
  setCountrySelect:Function;
}

const Cambodia:React.FC<Props> = ({ kh, KH, setCountrySelect }) => {
  return (
    <g className={'cambodia'} onMouseOver={() => setCountrySelect('cambodia')}>
      <style jsx>{`
      .cambodia {
        fill: ${kh};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kh)" />
    </defs>
    <path fill={KH && "url(#kh)"} d="M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z" stroke="black"/>
    </g>
  )
}

export default Cambodia