import SelectorButton from './SelectorButton'

const SelectorButtonContainer = ({ setOpenDrawer, select, setSelect, selectArray}) => {
  return (
    <>
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={0} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={1} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={2} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={3} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={4} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={5} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={6} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={7} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={8} />
    <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={9} />
    </>
  )
}

export default SelectorButtonContainer