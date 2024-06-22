interface Props {
  bw:string;
  BW:boolean;
  setCountrySelect:Function;
}

const Botswana:React.FC<Props> = ({ bw, BW, setCountrySelect }) => {
  return (
    <g className={'botswana'} onMouseOver={() => setCountrySelect('botswana')}>
      <style jsx>{`
      .botswana {
        fill: ${bw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="bw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bw)" />
    </defs>
    <path fill={BW && "url(#bw)"} d="M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z" stroke="black"/>
    </g>
  )
}

export default Botswana