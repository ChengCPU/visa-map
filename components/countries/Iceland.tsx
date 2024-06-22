interface Props {
  is:string;
  IS:boolean;
  setCountrySelect:Function;
}

const Iceland:React.FC<Props> = ({ is, IS, setCountrySelect }) => {
  return (
    <g className={'iceland'} onMouseOver={() => setCountrySelect('iceland')}>
      <style jsx>{`
      .iceland {
        fill: ${is};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="is" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#is)" />
    </defs>
    <path fill={IS && "url(#is)"} d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z" stroke="black"/>
    </g>
  )
}

export default Iceland