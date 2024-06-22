interface Props {
  lk:string;
  LK:boolean;
  setCountrySelect:Function;
}

const SriLanka:React.FC<Props> = ({ lk, LK, setCountrySelect }) => {
  return (
    <g className={'sriLanka'} onMouseOver={() => setCountrySelect('sriLanka')}>
      <style jsx>{`
      .sriLanka {
        fill: ${lk};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="lk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lk)" />
    </defs>
    <path fill={LK && "url(#lk)"} d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
    </g>
  )
}

export default SriLanka