import SelectorButton from './SelectorButton'
interface Props {
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  selectArray:null | string[];
}

const SelectorButtonContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, selectArray}) => {
  return (
    <>
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={0} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={1} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={2} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={3} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={4} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={5} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={6} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={7} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={8} />
    <SelectorButton setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={9} />
    </>
  )
}

export default SelectorButtonContainer