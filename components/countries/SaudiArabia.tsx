interface Props {
  sa:string;
  SA:boolean;
  setCountrySelect:Function;
}

const SaudiArabia:React.FC<Props> = ({ sa, SA, setCountrySelect }) => {
  return (
  <g className={'saudiArabia'} onMouseOver={() => setCountrySelect('saudiArabia')}>
    <style jsx>{`
    .saudiArabia {
      fill: ${sa};
      stroke-width: 1;
    }
    `}</style>
  <defs>
    <pattern id="sa" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect className="checker" x="0" width="2" height="2" y="0"/>
      <rect className="checker" x="2" width="2" height="2" y="2"/>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#sa)" />
  </defs>
  <path fill={SA ? "url(#sa)" : null} d="M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z" stroke="black"/>
  </g>
  )
}

export default SaudiArabia