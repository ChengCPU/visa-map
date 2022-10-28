import LegendContainer from './LegendContainer';

const Legend:React.FC = () => {
  return (
    <>
    <LegendContainer text={'Host'} color={"rgb(255,20,147)"}/>
    <LegendContainer text={'Freedom of movement'} color={"rgb(255,179,191)"}/>
    <LegendContainer text={'MERCOSUR FoM'} color={"rgb(0,135,93)"}/>
    <LegendContainer text={'EU/EFTA FoM'} color={"rgb(0,51,153)"}/>
    <LegendContainer text={'GCC FoM'} color={"rgb(153,123,61)"}/>
    <LegendContainer text={'OECS FoM'} color={"rgb(255,145,0)"}/>
    <LegendContainer text={'Visa-Free'} color={"rgb(50,205,50)"}/>
    <LegendContainer text={'Visa-on-Arrival/E-visa'} color={"rgb(161,224,123)"}/>
    <LegendContainer text={'Visa-on-Arrival'} color={"rgb(255,255,92)"}/>
    <LegendContainer text={'E-visa/eTA'} color={"rgb(135,206,250)"}/>
    <LegendContainer text={'Simplified visa'} color={"rgb(200,200,200)"}/>
    <LegendContainer text={'Passport not recognised/Confirmation required'} color={"rgb(0,0,0)"}/>
    </>
  )
}

export default Legend