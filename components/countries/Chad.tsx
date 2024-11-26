interface Props {
  td:string;
  TD:boolean;
  setCountrySelect:Function;
}

const Chad:React.FC<Props> = ({ td, TD, setCountrySelect }) => {
  return (
    <g className={'chad'} onMouseOver={() => setCountrySelect('chad')}>
      <style jsx>{`
      .chad {
        fill: ${td};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="td" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#td)" />
    </defs>
    <path fill={TD ? "url(#td)" : null} d="M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z" stroke="black"/>
    </g>
  )
}

export default Chad