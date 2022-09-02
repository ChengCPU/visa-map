export const a = (country, setAssignedColors, assignedColors, select) => {
    fetch('visaPolicy.json')
        .then((res) => res.json())
        .then((data) => {
        setAssignedColors(assignedColors = [...assignedColors, assignedColors[select.selection].afghanistanColor = "red"])
        setAssignedColors(assignedColors = [assignedColors[0], assignedColors[1], assignedColors[2], assignedColors[3], assignedColors[4], assignedColors[5], assignedColors[6], assignedColors[7], assignedColors[8], assignedColors[9]])
        console.log(assignedColors)
    })
}

/*
{
    afghanistanColor: data[country].afghanistan,
    albaniaColor: data[country].albania,
    algeriaColor: data[country].algeria,
    andorraColor: data[country].andorra,
    angolaColor: data[country].angola,
    anguillaColor: data[country].anguilla
}
*/