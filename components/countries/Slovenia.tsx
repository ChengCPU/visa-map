interface Props {
  si:string;
  SI:boolean;
  setCountrySelect:Function;
}

const Slovenia:React.FC<Props> = ({ si, SI, setCountrySelect }) => {
  return (
    <g className={'slovenia'} onMouseOver={() => setCountrySelect('slovenia')}>
      <style jsx>{`
      .slovenia {
        fill: ${si};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="si" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#si)" />
    </defs>
    <path fill={SI && "url(#si)"} d="M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z" stroke="black"/>
    </g>
  )
}

export default Slovenia