interface Props {
  tl:string;
  TL:boolean;
  setCountrySelect:Function;
}

const EastTimor:React.FC<Props> = ({ tl, TL, setCountrySelect }) => {
  return (
    <g className={'eastTimor'} onMouseOver={() => setCountrySelect('eastTimor')}>
      <style jsx>{`
      .eastTimor {
        fill: ${tl};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tl" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tl)" />
    </defs>
    {TL ?
    <>
    <path fill="url(#tl)" d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z" />
    <circle fill="url(#tl)" r="5" cy="558" cx="1699" stroke="black"/>
    </>
    :
    <>
    <path d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z" />
    <circle r="5" cy="558" cx="1699" stroke="black"/>
    </>
    }
    </g>
  )
}

export default EastTimor