let spiner = document.getElementById('spinner');

async function getData(){
  spiner.removeAttribute('hidden');
  const url = "https://api.football-data.org/v2/competitions/2014/standings?season=2020";
  const response = await fetch(url,{
      method: 'GET',
      headers:{
          "X-Auth-Token": "eebe3fda525e46cea273687fcfff665e" 
      }
  });
  spiner.setAttribute('hidden', '');
  const info = await response.json()
  //console.log(info.standings)
  maClassificacion(info.standings)
  //createTbale(top5)
}

getData()
//let monArray = dataClasificaciones

function maClassificacion(standings){
   // console.log(monArray)
   //let monobjet = monArray.standings
   let tableArray = []
   let objetTableArray , posicionObject
   let position,name,crestUrl,playedGames,winner,lost,points,goalsFor,goalsAgainst,goalDifference,goalDifferences
   for(let i =0; i<standings.length; i++){
        let myNewArray = standings[i]
        tableArray = myNewArray.table

        let table = document.getElementById("tbody1")
            for(let j =0; j<tableArray.length; j++){

                objetTableArray = tableArray[j]
                posicionObject = objetTableArray.position
                winner = objetTableArray.won
                //console.log("mis posiciones",posicionObject)
                position = objetTableArray.position
                crestUrl = objetTableArray.team.crestUrl
                name = objetTableArray.team.name
                playedGames = objetTableArray.playedGames
                lost = objetTableArray.lost
                points = objetTableArray.points
                goalsFor = objetTableArray.goalsFor
                goalsAgainst = objetTableArray.goalsAgainst
                goalDifference = objetTableArray.goalDifference

                 var tr1 = document.createElement('tr');   
        
                 //posicion
                 let miPosicion = document.createElement('td')
                 let posit = document.createTextNode(position)
                 miPosicion.appendChild(posit)
        
                //awayTeam, escudo 
                let myTdA = document.createElement('td')
                let awayTeamtd = document.createElement('img')
                awayTeamtd.src= crestUrl
                awayTeamtd.style.width=30
                awayTeamtd.style.marginTop = -10
                let value2 = document.createTextNode(name)
                myTdA.appendChild(value2)
                myTdA.appendChild(awayTeamtd)
           
                // Mg
                let miPlayGames = document.createElement('td')
                let miGames = document.createTextNode(playedGames)
                miPlayGames.appendChild(miGames)

                //G
                let miG = document.createElement('td')
                let g = document.createTextNode(winner)
                miG.appendChild(g)

                  //N
                  let miN = document.createElement('td')
                  let N = document.createTextNode(lost)
                  miN.appendChild(N)

                   //P
                   let miP = document.createElement('td')
                   let P = document.createTextNode(points)
                   miP.appendChild(P)

                     //BC   
                     let migf = document.createElement('td')
                     let gf = document.createTextNode(goalsFor)
                     migf.appendChild(gf)

                      //DB  
                      let miDB = document.createElement('td')
                      let db = document.createTextNode(goalsAgainst)
                      miDB.appendChild(db)

                        //GD
                        let miGD = document.createElement('td')
                        let GD = document.createTextNode(goalDifference)
                        miGD.appendChild(GD)



                 tr1.appendChild(miPosicion)
                 tr1.appendChild(myTdA)
                 tr1.appendChild(miPlayGames)
                 tr1.appendChild(miG)
                 tr1.appendChild(miN)
                 tr1.appendChild(miP)
                 tr1.appendChild(migf)
                 tr1.appendChild(miDB)
                 tr1.appendChild(miGD)



                 table.appendChild(tr1);
            }
         
        
   }
}
//maClassificacion(dataClasificaciones.standings)

