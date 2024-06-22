interface Props {
  ht:string;
  HT:boolean;
  setCountrySelect:Function;
}

const Haiti:React.FC<Props> = ({ ht, HT, setCountrySelect }) => {
  return (
    <g className={'haiti'} onMouseOver={() => setCountrySelect('haiti')}>
      <style jsx>{`
      .haiti {
        fill: ${ht};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ht" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ht)" />
    </defs>
    <path fill={HT && "url(#ht)"} d="M586.8 375.3l0.1 3.4-0.7 2.5-1.5 1.1 1.3 1.9-0.3 1.8-3.6-1.1-2.7 0.4-3.4-0.4-2.7 1.2-2.8-2 0.7-2.1 5.1 0.9 4.1 0.5 2.2-1.4-2.3-2.8 0.4-2.5-3.5-1 1.5-1.7 3.4 0.2 4.7 1.1z" stroke="black"/>
    </g>
  )
}

export default Haiti