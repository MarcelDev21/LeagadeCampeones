let spiner = document.getElementById('spinner');

async function getData(){
    spiner.removeAttribute('hidden');
    const url = "https://api.football-data.org/v2/competitions/2014/matches?season=2020";
    const response = await fetch(url,{
        method: 'GET',
        headers:{
            "X-Auth-Token": "eebe3fda525e46cea273687fcfff665e" 
        }
    });
    spiner.setAttribute('hidden', '');
    const info = await response.json()
    Partidos(info.matches)
    createTbale(top5)
}


getData()

let top5
function Partidos(partido) {
    let homeTeam, awayTeam, status, id, goal, matches
    let miArray = []
    let tab

    for (let i = 0; i < partido.length; i++) {
        status = partido[i].status
        if (status != "FINISHED") {
            //console.log("no seguir y mirar siguiente partido")
            continue
        }
    }

    let duplicados = []
    for (let i = 0; i < partido.length; i++) {
        for (let j = i + 1; j < partido.length; j++) {
            if (partido[i].homeTeam.id == partido[j].homeTeam.id) {
                if (duplicados.indexOf(partido[i].homeTeam.id) == -1) {
                    let id = partido[i].homeTeam.id
                    duplicados.push(id);
                }
            }
        }
    }


    let name, idj, recupèreId, but, matcches, imagenLocal
    for (let i = 0; i < duplicados.length; i++) {
        let id = duplicados[i]
        for (let j = 0; j < partido.length; j++) {
            idj = partido[j].homeTeam.id

            if (id == idj) {
                name = partido[j].homeTeam.name
                imagenLocal = "https://crests.football-data.org/"+partido[j].homeTeam.id+".svg"
                but = 0
                matcches = 0
                recupèreId = id
                mediaGoles = 0
            }
        }
        miArray.push({ recupèreId, name, but, matcches, mediaGoles, imagenLocal })
    }



    for (let i = 0; i < miArray.length; i++) {
        for (let j = 0; j < partido.length; j++) {
            //console.log(partido[j].id)
            if (miArray[i].recupèreId === partido[j].homeTeam.id) {
                let homeTeamGoals = partido[j].score.fullTime.homeTeam
                miArray[i].matcches++
                miArray[i].but += homeTeamGoals     
            }

            if(miArray[i].recupèreId === partido[j].awayTeam.id ){
                let awayTeamGoals = partido[j].score.fullTime.awayTeam
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

          top5 = miArray.slice(0,5)
}




function createTbale(tableEstatistica){
    let table = document.getElementById('tbodyClassEstatica')

    for(let i =0; i<tableEstatistica.length; i++){
        
        
        let id = tableEstatistica[i].recupèreId
        let name = tableEstatistica[i].name
        let but = tableEstatistica[i].but
        let matches = tableEstatistica[i].matcches
        let avg = tableEstatistica[i].mediaGoles
        let imgLocal = tableEstatistica[i].imagenLocal

       // let tbody = document.getElementById('tbodyClassEstatica')
        for(let j =0; j<1;j++){
           let tr = document.createElement('tr')

           //id
           let idEquipo = document.createElement('td')
           let inicialId = document.createTextNode(id)
           idEquipo.appendChild(inicialId)
           //name
           let idName = document.createElement('td')
           let inicialName = document.createTextNode(name)
                let myImage = document.createElement('img')
                myImage.src=imgLocal
                myImage.style.width=30
           idName.appendChild(inicialName)
           idName.appendChild(myImage)
           //but
           let idBut = document.createElement('td')
           let inicialBut = document.createTextNode(but)
           idBut.appendChild(inicialBut)
           //matches
           let idMatches = document.createElement('td')
           let inicialMatches = document.createTextNode(matches)
           idMatches.appendChild(inicialMatches)
           //avg
           let idAvg = document.createElement('td')
           let inicialAvg = document.createTextNode(avg)
           idAvg.appendChild(inicialAvg)
   

           tr.appendChild(idEquipo)
           tr.appendChild(idName)
           tr.appendChild(idBut)
           tr.appendChild(idMatches)
           tr.appendChild(idAvg)

           table.appendChild(tr)
        }
    }
}

//createTbale(top5)

