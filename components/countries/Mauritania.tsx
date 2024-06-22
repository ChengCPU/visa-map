interface Props {
  mr:string;
  MR:boolean;
  setCountrySelect:Function;
}

const Mauritania:React.FC<Props> = ({ mr, MR, setCountrySelect }) => {
  return (
    <g className={'mauritania'} onMouseOver={() => setCountrySelect('mauritania')}>
      <style jsx>{`
      .mauritania {
        fill: ${mr};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mr" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mr)" />
    </defs>
    <path fill={MR && "url(#mr)"} d="M959.2 341.5l-8.5 0.1 2.4 27.7 2.5 27.7 1 0.8-1.3 4.5-22.5 0.1-0.9 1.4-2.1-0.4-3.2 1.3-3.9-1.8-1.8 0.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8-3.1 0-2.8 1.4-2.7-0.5-2 2-0.4-3.4 1.6-3.2 0.8-6-0.4-6.4-0.6-3.2 0.6-3.2-1.4-3-2.8-2.8 1.3-2.1 21.7 0-0.9-9.3 1.5-3.3 5.2-0.5 0.2-16.5 18 0.4 0.2-9.8 20.5 15.6z" stroke="black"/>
    </g>
  )
}

export default Mauritania