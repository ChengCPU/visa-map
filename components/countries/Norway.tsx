interface Props {
  no:string;
  NO:boolean;
  setCountrySelect:Function;
}

const Norway:React.FC<Props> = ({ no, NO, setCountrySelect }) => {
  return (
    <g className={'norway'} onMouseOver={() => setCountrySelect('norway')}>
      <style jsx>{`
      .norway {
        fill: ${no};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="no" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#no)" />
    </defs>
    <path fill={NO && "url(#no)"} d="M 1113.7 67.5 1107.3 69.6 1104.1 70.1 1104.9 66.3 1099.1 64.2 1093.2 66 1092.1 70 1088.7 72.4 1084 71.1 1078.7 71.3 1073.6 68.5 1071.4 69.9 1068.8 70.1 1068.9 73.7 1060.9 72.8 1060.3 75.9 1056.3 75.9 1054 79.8 1050.6 85.9 1044.9 93.8 1046.7 95.8 1045.4 98 1041.1 97.9 1038.7 103.3 1039.7 111 1042.8 113.9 1042 120.8 1038.6 124.8 1036.8 128.2 1033.5 124.6 1024.9 131.4 1018.8 132.8 1012.3 129.8 1010.5 123.5 1008.5 110 1012.5 106.3 1023.8 101.4 1031.9 95.5 1039.1 87.7 1048 77 1054.4 72.9 1064.7 66.1 1073.2 63.7 1079.9 64 1085.1 59.6 1092.5 59.8 1099.5 58.8 1113.2 62.7 1108.3 64.1 1113.7 67.5 Z" stroke="black"/>
    </g>
  )
}

export default Norway