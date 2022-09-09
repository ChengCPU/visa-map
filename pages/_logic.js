const colors = [
    "afghanistanColor", "albaniaColor", "algeriaColor", "andorraColor", "angolaColor", "anguillaColor", "antiguaAndBarbudaColor", "argentinaColor", "armeniaColor", "arubaColor", "australiaColor", "austriaColor", "azerbaijanColor", "bahamasColor", "bahrainColor", "bangladeshColor", "barbadosColor", "belarusColor", "belgiumColor", "belizeColor", "beninColor", "bermudaColor", "bhutanColor", "boliviaColor", "bosniaAndHerzegovinaColor", "botswanaColor", "brazilColor"
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
            argentinaColor: data[country].argentina,
            armeniaColor: data[country].armenia,
            arubaColor: data[country].aruba,
            australiaColor: data[country].australia,
            austriaColor: data[country].austria,
            azerbaijanColor: data[country].azerbaijan,
            bahamasColor: data[country].bahamas,
            bahrainColor: data[country].bahrain,
            bangladeshColor: data[country].bangladesh,
            barbadosColor: data[country].barbados,
            belarusColor: data[country].belarus,
            belgiumColor: data[country].belgium,
            belizeColor: data[country].belize,
            beninColor: data[country].benin,
            bermudaColor: data[country].bermuda,
            bhutanColor: data[country].bhutan,
            boliviaColor: data[country].bolivia,
            bosniaAndHerzegovinaColor: data[country].bosniaAndHerzegovina,
            botswanaColor: data[country].botswana,
            brazilColor: data[country].brazil
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
//visa policy of australia needs fixing (evisa)
//visa policy of austria needs fixing (schengen)
//visa policy of azerbaijan needs fixing (evisa)
//visa policy of bahrain needs fixing (evisa)
//visa policy of bangladesh needs fixing (visa on arrival)
//visa policy of belarus needs fixing (air/land travel restrictions)
//visa policy of belgium needs fixing (schengen)
//visa policy of bolivia needs fixing (air/land travel restrictions)
//visa policy of bolivia needs fixing (hard visas)