interface Props {
  fi:string;
  FI:boolean;
  setCountrySelect:Function;
}

const Finland:React.FC<Props> = ({ fi, FI, setCountrySelect }) => {
  return (
    <g className={'finland'} onMouseOver={() => setCountrySelect('finland')}>
      <style jsx>{`
      .finland {
        fill: ${fi};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="fi" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#fi)" />
    </defs>
    <path fill={FI ? "url(#fi)" : null} d="M1104.1 70.1l0.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-0.9 3.8 7.4 3.9-0.9 2.9-3.4 3.4-8 7.4-8 0.5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9 0.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-0.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-0.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1-0.8 3.8z" stroke="black"/>
    </g>
  )
}

export default Finland