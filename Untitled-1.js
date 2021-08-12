//console.log("kong", data.matches)
function Estatistica(partido) {
    let miArray = []
    let homeTeam, awayTeam
    for (let i = 0; i < partido.length; i++) {
        homeTeam = partido[i].homeTeam.name
        awayTeam = partido[i].awayTeam.name
    }
}

function avg(goals, matches) {
    let result = goals / matches
    return result
}

function Partidos() {
    var arrayMatches = data.matches
    let homeTeam, awayTeam, status, id, goal, matches
    let miArray = []
    let tab

    for (let i = 0; i < arrayMatches.length; i++) {
        status = arrayMatches[i].status
        if (status != "FINISHED") {
            //console.log("no seguir y mirar siguiente partido")
        }
    }

    let duplicados = []
    for (let i = 0; i < arrayMatches.length; i++) {
        for (let j = i + 1; j < arrayMatches.length; j++) {
            if (arrayMatches[i].homeTeam.id == arrayMatches[j].homeTeam.id) {
                if (duplicados.indexOf(arrayMatches[i].homeTeam.id) == -1) {
                    let id = arrayMatches[i].homeTeam.id
                    duplicados.push(id);
                }
            }
        }
    }


    let somme = 0
    let name, idj, recupèreId, but, matcches
    for (let i = 0; i < duplicados.length; i++) {
        let id = duplicados[i]
        for (let j = 0; j < arrayMatches.length; j++) {
            idj = arrayMatches[j].homeTeam.id

            if (id == idj) {
                name = arrayMatches[j].homeTeam.name
                but = 0
                matcches = 0
                recupèreId = id
                mediaGoles = 0
            }
        }
        miArray.push({ recupèreId, name, but, matcches, mediaGoles })
    }



    for (let i = 0; i < miArray.length; i++) {
        //let equipo = miArray[i].name
        for (let j = 0; j < arrayMatches.length; j++) {
            //console.log(arrayMatches[j].id)
            if (miArray[i].recupèreId === arrayMatches[j].homeTeam.id) {
                let homeTeamGoals = arrayMatches[j].score.fullTime.homeTeam
                miArray[i].matcches++
                miArray[i].but += homeTeamGoals     
            }

            if(miArray[i].recupèreId === arrayMatches[j].awayTeam.id ){
                let awayTeamGoals = arrayMatches[j].score.fullTime.awayTeam
                miArray[i].but += awayTeamGoals
                miArray[i].matcches++
             }  
        } 
        miArray[i].mediaGoles = miArray[i].but / miArray[i].matcches
        miArray[i].mediaGoles= miArray[i].mediaGoles.toFixed(2)

    }
        miArray.sort(function(a,b){
            return b.mediaGoles - a.mediaGoles
        })

         let top5 = miArray.slice(0,5)
         console.log(top5)
}


Partidos()
