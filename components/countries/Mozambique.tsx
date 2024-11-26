interface Props {
  mz:string;
  MZ:boolean;
  setCountrySelect:Function;
}

const Mozambique:React.FC<Props> = ({ mz, MZ, setCountrySelect }) => {
  return (
    <g className={'mozambique'} onMouseOver={() => setCountrySelect('mozambique')}>
      <style jsx>{`
      .mozambique {
        fill: ${mz};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mz" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mz)" />
    </defs>
    <path fill={MZ ? "url(#mz)" : null} d="M1166.7 673.5l-4.1 0-0.3-2.9-0.6-2.9-0.4-2.3 1.4-7.1-1.1-4.6-2.2-9 6.2-7.3 1.7-4.6 0.8-0.6 0.9-3.8-0.8-1.9 0.4-4.8 1.3-4.4 0.4-8.2-2.8-2-2.7-0.5-1.1-1.6-2.6-1.3-4.7 0.1-0.2-2.4-0.4-4.6 17.2-5.3 3.2 3.1 1.5-0.6 2.2 1.6 0.2 2.6-1.3 3 0.2 4.5 3.5 4 1.9-4.5 2.5-1.3-0.1-8.3-2.2-4.6-1.9-2.1-0.4 0-0.6-7.3 1.5-6.1 2.2-0.2 6.7 1.8 1.5-0.8 3.9-0.2 2.1-1.9 3.4 0.1 6.2-2.5 4.6-3.7 0.9 2.8-0.5 6.4 0.5 5.7-0.2 10 0.8 3.1-1.9 4.6-2.4 4.5-3.7 4-5.3 2.4-6.5 3.1-6.6 6.9-2.2 1.2-4.2 4.6-2.3 1.4-0.8 4.6 2.4 4.9 0.9 3.7 0 2 1-0.4-0.5 6.3-1.1 3 1.2 1.1-1 2.7-2.4 2.3-4.7 2.1-6.9 3.5-2.5 2.4 0.3 2.7 1.3 0.4-0.7 3.4z" stroke="black"/>
    </g>
  )
}

export default Mozambique