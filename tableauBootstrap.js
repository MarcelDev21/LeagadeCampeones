let data

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
    data = info.matches
   //console.log(info.matches)
   RecupèreApi(info.matches)
   //createTbale(top5)
}

getData()
//miArray = data.matches
function RecupèreApi(position){
    //miArray
    let awayTeam, homeTeam, fullHomeTeam,fullTimeAwayTeam
    let valueFirstObject

    let table = document.getElementById('tBody')
    table.innerHTML=""

for(let i =0; i<position.length;i++){
    
    valueFirstObject=position[i];
    awayTeam = valueFirstObject.awayTeam.name
    homeTeam = valueFirstObject.homeTeam.name
    fullHomeTeam = valueFirstObject.score.fullTime.homeTeam
    fullTimeAwayTeam = valueFirstObject.score.fullTime.awayTeam
    matchday = valueFirstObject.matchday
    utcDate = valueFirstObject.utcDate

    let vslo = fullHomeTeam +" - "+ fullTimeAwayTeam
   
    imagenLocal = "https://crests.football-data.org/"+valueFirstObject.homeTeam.id+".svg"
    imagenVisitantes = "https://crests.football-data.org/"+valueFirstObject.awayTeam.id+".svg"
    
    let imagenLocales = document.createElement('img');
    /*imagenLocales.src= "https://crests.football-data.org/"+valueFirstObject.homeTeam.id+".svg"
    imagenLocales.alt = "altd"*/
    imagenLocales.setAttribute("class","border_class")

    let imagenVisitante = document.createElement('img');
    //imagenVisitante.src= "https://crests.football-data.org/"+valueFirstObject.awayTeam.id+".svg"
    //imagenVisitante.alt = "altd"
    imagenVisitante.setAttribute("class","border_class")

   

     for(let j=0; j<1;j++){
        var tr = document.createElement('tr');   
        
         let matchestd = document.createElement('td')
         let myMatchesValue = document.createTextNode(matchday)
         matchestd.appendChild(myMatchesValue)

         // homeTeam y escudo
         let myTd = document.createElement('td')
         let homeTeamtd = document.createElement('img')
         homeTeamtd.src= imagenVisitantes
         homeTeamtd.style.width=30
         homeTeamtd.style.marginTop = -10
        // let awayTeamtd = document.createElement('p')
         let value1 = document.createTextNode(homeTeam)
         myTd.appendChild(value1)
         myTd.appendChild(homeTeamtd)
         //let value2 = document.createTextNode(imagenLocal)

         // result
         let displayResult = document.createElement('td')
         let scoreEquip1 = document.createElement('p')
         // affect value
         let finalResultLocale = document.createTextNode(vslo)
         //let finalResultVisitante = document.createTextNode(fullTimeAwayTeam)
          scoreEquip1.appendChild(finalResultLocale)
         //resultLocal.appendChild(finalResultLocale)
         //resultVisit.appendChild(finalResultVisitante)
        //append with td
        displayResult.appendChild(finalResultLocale)
        //displayResult.appendChild(finalResultVisitante)

        //awayTeam, escudo 
        let myTdA = document.createElement('td')
        let awayTeamtd = document.createElement('img')
        awayTeamtd.src= imagenLocal
        awayTeamtd.style.width=30
        awayTeamtd.style.marginTop = -10
        let value2 = document.createTextNode(awayTeam)
        myTdA.appendChild(value2)
        myTdA.appendChild(awayTeamtd)
       
        // Date
       let myDate = document.createElement('td')
       let dateUct = document.createTextNode(utcDate)
       myDate.appendChild(dateUct)

         tr.appendChild(matchestd)
         tr.appendChild(myTd)
         tr.appendChild(displayResult)
         tr.appendChild(myTdA)
         tr.appendChild(myDate)

        table.appendChild(tr);
        
       // console.log(table)
     }

}
}

//RecupèreApi(data.matches)

 // tabla clasificacion

 /*function RechercheElement(position){ 
  search = document.getElementById("mySearch").value
   //console.log("element"+ search)
 // console.log(search)

  let homeTeam,autreTab,awayTeam, utcData,matchday, fullHomeTeam, fullTimeAwayTeam,imagenVisitante
    let monDouble = false
    let arraEquipo = []
    let myBouble = false
    // .filter, includes, hacer un forloop, crear un array nueva
    //console.log(miArray)
    for(let i =0; i<position.length;i++){
        homeTeam = position[i].homeTeam.name
        awayTeam = position[i].awayTeam.name
        utcData = position[i].utcDate
        matchday = position[i].matchday
        fullHomeTeam = position[i].score.fullTime.homeTeam
        fullTimeAwayTeam = position[i].score.fullTime.awayTeam

         if(search === homeTeam|| search === awayTeam){
            myBouble = true
             arraEquipo.push({homeTeam,awayTeam,utcData,matchday,fullHomeTeam,fullTimeAwayTeam})
            // console.log(arraEquipo)
         }
    }
   // console.log(miArray)
   // el barato
   if(myBouble === true){
       console.log(arraEquipo)
   }
 }

 // for loop
 RechercheElement(data.matches)*/

 function BuscarElemento(partidos){
    let inputBusqueda = document.getElementById("mySearch").value
    //console.log("mensage"+inputBusqueda)
    let myBoolean = true
    if(inputBusqueda == ""){
      RecupèreApi(partidos)
    }


   
    /*for(let i =0; i<partidos.length;i++){
       let homeTeam = partidos[i].homeTeam.name
        if(inputBusqueda != homeTeam){
           myBoolean = false
           console.log("no conozco esta variable")
        }
        if(inputBusqueda === homeTeam){
           myBoolean
        }
    }

    if(myBoolean === false){
       console.log(myBoolean)
       console.log("no conozco esta variable")
       alert("No conozco el valor que habeis entrado")
        return RecupèreApi(partidos)
    }*/
    
          
    let miTablaFiltrada = partidos.filter((item) => {
       return(
          item.homeTeam.name.toLowerCase().includes(inputBusqueda.toLowerCase()) || 
          item.awayTeam.name.toLowerCase().includes(inputBusqueda.toLowerCase())
       )
    })
    //console.log(miTablaFiltrada)
       RecupèreApi(miTablaFiltrada)





 }

      let buttonBusqueda = document.getElementById("button")
      buttonBusqueda.addEventListener("click",()=> {
          BuscarElemento(data)
      })

      /*function executeSpinner(){
         let spiner = true
         let recupSpiner = document.getElementById('spinner')
         if(BuscarElemento(data.matches) === 0){
            spiner = true
            recupSpiner
            console.log("spiner")
         }else{
            spiner = false
            console.log("spéner")
         }
      }

      executeSpinner()*/
