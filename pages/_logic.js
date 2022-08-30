export const a = (country, setAssignedColors, select) => {
    fetch('visaPolicy.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(select.selection)
        setAssignedColors({
            afghanistanColor: data[country].afghanistan,
            albaniaColor: data[country].albania,
            algeriaColor: data[country].algeria,
            andorraColor: data[country].andorra,
            angolaColor: data[country].angola
        })
    })
}