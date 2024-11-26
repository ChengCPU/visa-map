interface Props {
  ke:string;
  KE:boolean;
  setCountrySelect:Function;
}

const Kenya:React.FC<Props> = ({ ke, KE, setCountrySelect }) => {
  return (
    <g className={'kenya'} onMouseOver={() => setCountrySelect('kenya')}>
      <style jsx>{`
      .kenya {
        fill: ${ke};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ke" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ke)" />
    </defs>
    <path fill={KE ? "url(#ke)" : null} d="M1223.5 476.7l-4.9 7.2 0.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2 0.4-0.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-0.3-3.7-20.5-13.1 0.4-4.7-1.4-2.5 0-0.3 1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-0.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1 0.1 3.6 1.9 2.1 4 0 7.2 5.4 1.8 0.1 1.3-0.2 1.3 0.7 3.8 0.6 1.6-2.7 5.2-2.7 2.3 2.2 3.9 0z" stroke="black"/>
    </g>
  )
}

export default Kenya