interface Props {
  bj:string;
  BJ:boolean;
  setCountrySelect:Function;
}

const Benin:React.FC<Props> = ({ bj, BJ, setCountrySelect }) => {
  return (
    <g className={'benin'} onMouseOver={() => setCountrySelect('benin')}>
      <style jsx>{`
      .benin {
        fill: ${bj};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="bj" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bj)" />
    </defs>
    <path fill={BJ ? "url(#bj)" : null} d="M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z" stroke="black"/>
    </g>
  )
}

export default Benin