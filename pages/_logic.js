const colors = [
    "afghanistanColor", 
    "albaniaColor",
    "algeriaColor",
    "andorraColor",
    "angolaColor",
    "anguillaColor",
    "antiguaAndBarbudaColor",
    "argentinaColor",
    "armeniaColor",
    "arubaColor",
    "australiaColor",
    "austriaColor",
    "azerbaijanColor",
    "bahamasColor",
    "bahrainColor",
    "bangladeshColor",
    "barbadosColor",
    "belarusColor",
    "belgiumColor",
    "belizeColor",
    "beninColor",
    "bermudaColor",
    "bhutanColor",
    "boliviaColor",
    "bosniaAndHerzegovinaColor",
    "botswanaColor",
    "brazilColor",
    "britishVirginIslandsColor",
    "bruneiColor",
    "bulgariaColor",
    "burkinaFasoColor",
    "burundiColor",
    "cambodiaColor",
    "cameroonColor",
    "canadaColor",
    "capeVerdeColor",
    "caymanIslandsColor",
    "centralAfricanRepublicColor",
    "chadColor",
    "chileColor",
    "chinaColor",
    "colombiaColor",
    "comorosColor",
    "congoColor",
    "cookIslandsColor",
    "croatiaColor",
    "cubaColor",
    "curacaoColor",
    "cyprusColor",
    "czechRepublicColor",
    "denmarkColor",
    "djiboutiColor",
    "dominicaColor",
    "dominicanRepublicColor",
    "eastTimorColor",
    "ecuadorColor",
    "egyptColor",
    "elSalvadorColor",
    "equatorialGuineaColor",
    "eritreaColor",
    "estoniaColor",
    "eswatiniColor",
    "ethiopiaColor",
    "falklandIslandsColor",
    "fijiColor",
    "finlandColor",
    "franceColor",
    "frenchGuianaColor"
]
export const a = (country, assignedColors, setAssignedColors, select, selectArray, priority, setPriority, rerender, setRerender) => {
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
            brazilColor: data[country].brazil,
            britishVirginIslandsColor: data[country].britishVirginIslands,
            bruneiColor: data[country].brunei,
            bulgariaColor: data[country].bulgaria,
            burkinaFasoColor: data[country].burkinaFaso,
            burundiColor: data[country].burundi,
            cambodiaColor: data[country].cambodia,
            cameroonColor: data[country].cameroon,
            canadaColor: data[country].canada,
            capeVerdeColor: data[country].capeVerde,
            caymanIslandsColor: data[country].caymanIslands,
            centralAfricanRepublicColor: data[country].centralAfricanRepublic,
            chadColor: data[country].chad,
            chileColor: data[country].chile,
            chinaColor: data[country].china,
            colombiaColor: data[country].colombia,
            comorosColor: data[country].comoros,
            congoColor: data[country].congo,
            cookIslandsColor: data[country].cookIslands,
            croatiaColor: data[country].croatia,
            cubaColor: data[country].cuba,
            curacaoColor: data[country].curacao,
            cyprusColor: data[country].cyprus,
            czechRepublicColor: data[country].czechRepublic,
            denmarkColor: data[country].denmark,
            djiboutiColor: data[country].djibouti,
            dominicaColor: data[country].dominica,
            dominicanRepublicColor: data[country].dominicanRepublic,
            eastTimorColor: data[country].eastTimor,
            ecuadorColor: data[country].ecuador,
            egyptColor: data[country].egypt,
            elSalvadorColor: data[country].elSalvador,
            equatorialGuineaColor: data[country].equatorialGuinea,
            eritreaColor: data[country].eritrea,
            estoniaColor: data[country].estonia,
            eswatiniColor: data[country].eswatini,
            ethiopiaColor: data[country].ethiopia,
            falklandIslandsColor: data[country].falklandIslands,
            fijiColor: data[country].fiji,
            finlandColor: data[country].finland,
            franceColor: data[country].france,
            frenchGuianaColor: data[country].frenchGuiana
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