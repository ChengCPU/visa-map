interface Props {
  ps:string;
  PS:boolean;
  setCountrySelect:Function;
}

const Palestine:React.FC<Props> = ({ ps, PS, setCountrySelect }) => {
  return (
    <g className={'palestine'} onMouseOver={() => setCountrySelect('palestine')}>
      <style jsx>{`
      .palestine {
        fill: ${ps};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ps" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ps)" />
    </defs>
    {PS ?
    <>
    <path fill="url(#ps)" d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z" />
    <circle fill="url(#ps)" r="3" cy="297" cx="1178" stroke="black"/>
    </>
    :
    <>
    <path d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z" />
    <circle r="3" cy="297" cx="1178" stroke="black"/>
    </>
    }
    </g>
  )
}

export default Palestine