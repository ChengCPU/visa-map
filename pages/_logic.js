const colors = [
    "afghanistanColor", "albaniaColor", "algeriaColor", "andorraColor", "angolaColor", "anguillaColor"
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
            anguillaColor: data[country].anguilla
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

/*
{
    afghanistanColor: data[country].afghanistan,
    albaniaColor: data[country].albania,
    algeriaColor: data[country].algeria,
    andorraColor: data[country].andorra,
    angolaColor: data[country].angola,
    anguillaColor: data[country].anguilla
}

setAssignedColors(assignedColors = [[assignedColors[0], assignedColors[1], assignedColors[2], assignedColors[3], assignedColors[4], assignedColors[5], assignedColors[6], assignedColors[7], assignedColors[8], assignedColors[9]][[select.selection]] = {
    selection: select.selection, afghanistanColor: "rgb(255,20,147)", albaniaColor: "rgb(255,20,147)", algeriaColor: "rgb(255,20,147)", andorraColor: "rgb(255,20,147)", angolaColor: "rgb(255,20,147)", anguillaColor: "rgb(255,20,147)"
}])

*/