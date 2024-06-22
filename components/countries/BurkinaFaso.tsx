interface Props {
  bf:string;
  BF:boolean;
  setCountrySelect:Function;
}

const BurkinaFaso:React.FC<Props> = ({ bf, BF, setCountrySelect }) => {
  return (
    <g className={'burkinaFaso'} onMouseOver={() => setCountrySelect('burkinaFaso')}>
      <style jsx>{`
      .burkinaFaso {
        fill: ${bf};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="bf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bf)" />
    </defs>
    <path fill={BF && "url(#bf)"} d="M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z" stroke="black"/>
    </g>
  )
}

export default BurkinaFaso