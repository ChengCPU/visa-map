interface Props {
  ec:string;
  EC:boolean;
  setCountrySelect:Function;
}

const Ecuador:React.FC<Props> = ({ ec, EC, setCountrySelect }) => {
  return (
    <g className={'ecuador'} onMouseOver={() => setCountrySelect('ecuador')}>
      <style jsx>{`
      .ecuador {
        fill: ${ec};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ec" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ec)" />
    </defs>
    <path fill={EC ? "url(#ec)" : null} d="M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z" stroke="black"/>
    </g>
  )
}

export default Ecuador