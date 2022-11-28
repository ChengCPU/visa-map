import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Svalbard = () => {

  const { svalbardColor } = useContext(ColorContext)

return (
<g className={'svalbard'}>
  <style jsx>{`
  .svalbard {
  fill: ${svalbardColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M 1076.6 25.2 1069 27.1 1062.2 26 1064.4 24.8 1061.8 23.3 1069.1 22.4 1071 24.1 1076.6 25.2 Z" stroke="black"/>
<path d="M 1051 16.7 1063.6 20.1 1055 21.9 1053.8 25.3 1050.8 26.2 1049.9 30.2 1045.5 30.4 1037 27.5 1040 25.8 1034.3 24.4 1026.6 20.5 1023.4 17 1032.7 15.4 1035 16.9 1040 16.9 1041 15.4 1046.2 15.2 1051 16.7 Z" stroke="black"/>
<path d="M 1075.4 13.7 1082.8 15.2 1078.4 17.6 1068.3 18.1 1057.6 17.3 1056.6 16.1 1051.5 16.1 1047.2 14.1 1057.7 12.9 1063.1 13.9 1066.2 12.6 1075.4 13.7 Z" stroke="black"/>
</g>
)
}

export default Svalbard