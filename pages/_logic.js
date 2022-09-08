const colors = [
    "afghanistanColor", "albaniaColor", "algeriaColor", "andorraColor", "angolaColor", "anguillaColor", "antiguaAndBarbudaColor", "argentinaColor"
]
export const a = (country, setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation) => {
    fetch('visaPolicy.json')
        .then((res) => res.json())
        .then((data) => {
        setAssignedColors(assignedColors, assignedColors[select.selection] = { 
            afghanistanColor: data[country].afghanistan,
            albaniaColor: data[country].albania,
            algeriaColor: data[country].algeria,
            andorraColor: data[country].andorra,
            angolaColor: data[country].angola,
            anguillaColor: data[country].anguilla,
            antiguaAndBarbudaColor: data[country].antiguaAndBarbuda,
            argentinaColor: data[country].argentina
        });
        for(let x = 0; x < assignedColors.length; x++) {
            for(let y = 0; y < colors.length; y++) {
              switch(assignedColors[x][colors[y]]) {
                case "rgb(255,20,147)":
                    setPriority(priority, priority[colors[y]] = "rgb(255,20,147)");
                break;
                case "rgb(50,205,50)":
                    for(let w = 0; w < assignedColors.length; w++) {
                        if(assignedColors[w][colors[y]] == "rgb(255,20,147)") {
                            break;
                        }
                        if(w == 9) {
                            setPriority(priority, priority[colors[y]] = "rgb(50,205,50)");
                        }
                    }
                break;
                }
            }
        }
        console.log(select)
        console.log(selectArray)
        console.log(assignedColors)
        console.log(priority)
        setRerender(!rerender)
    })
}

//visa policy of antigua and barbuda needs fixing (evisa)