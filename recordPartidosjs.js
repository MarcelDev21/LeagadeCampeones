
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

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        

        let firstImagen = document.createElement('img')
            firstImagen.src = imagenLocal
            firstImagen.setAttribute("class","border_class")
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let secondImagen = document.createElement('img')
            secondImagen.src= imagenVisitantes
            secondImagen.setAttribute("class","border_class")
        let td6 = document.createElement('td');

        let text1 = document.createTextNode(homeTeam);
        let text2 = document.createTextNode(awayTeam);
           let imgLocal = document.createTextNode(imagenLocal)
        let text3 = document.createTextNode(fullHomeTeam);
        let text4 = document.createTextNode(fullTimeAwayTeam);
           let imgVisit = document.createTextNode(imagenVisitante)
        let text5 = document.createTextNode(matchday);
        let text6 = document.createTextNode(utcDate);
    
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3)
           firstImagen.appendChild(imgLocal)
        td4.appendChild(text4)
        td5.appendChild(text5)
           secondImagen.appendChild(imgVisit)
        td6.appendChild(text6)

        tr.appendChild(td1);
        tr.appendChild(td2);
             tr.appendChild(firstImagen)
        tr.appendChild(td3);
        tr.appendChild(td4);
             tr.appendChild(secondImagen)
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        table.appendChild(tr);
        
       // console.log(table)
     }

}
}

 RecupèreApi(data.matches)

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
    if(inputBusqueda == ""){
      RecupèreApi(data.matches)
    }

    
          
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
          BuscarElemento(data.matches)
      })

      function executeSpinner(){
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

      executeSpinner()

                /*position = objetTableArray.position
                crestUrl = objetTableArray.team.crestUrl
                name = objetTableArray.team.name
                playedGames = objetTableArray.playedGames
                lost = objetTableArray.lost
                points = objetTableArray.points
                goalsFor = objetTableArray.goalsFor
                goalsAgainst = objetTableArray.goalsAgainst
                goalDifference = objetTableArray.goalDifference
                //console.log(objetTableArray.team.crestUrl)

                 let tr1 = document.createElement('tr');

                 let td1 = document.createElement('td')
                 let td2 = document.createElement('img')
                 td2.src=crestUrl
                 td2.alt = "alto"
                 td2.setAttribute("class","border_class")
                 let td3 = document.createElement('td');
                 let td4 = document.createElement('td');
                 let td5 = document.createElement('td');
                 let td6 = document.createElement('td');
                 let td7 = document.createElement('td');
                 let td8 = document.createElement('td');
                 let td9 = document.createElement('td');
                 let td10 = document.createElement('td');


                 let text1 = document.createTextNode(position);
                 let text2 = document.createTextNode(crestUrl);
                 let text3 = document.createTextNode(name);
                 let text4 = document.createTextNode(playedGames);
                 let text5 = document.createTextNode(winner);
                 let text6 = document.createTextNode(lost);
                 let text7 = document.createTextNode(points);
                 let text8 = document.createTextNode(goalsFor);
                 let text9 = document.createTextNode(goalsAgainst);
                 let text10 = document.createTextNode(goalDifference);

                 td1.appendChild(text1);
                 td2.appendChild(text2);
                 td3.appendChild(text3);
                 td4.appendChild(text4);
                 td5.appendChild(text5);
                 td6.appendChild(text6);
                 td7.appendChild(text7);
                 td8.appendChild(text8);
                 td9.appendChild(text9);
                 td10.appendChild(text10);

                 tr1.appendChild(td1)
                     tr1.appendChild(td2)
                 tr1.appendChild(td3)
                 tr1.appendChild(td4)
                 tr1.appendChild(td5)
                 tr1.appendChild(td6)
                 tr1.appendChild(td7)
                 tr1.appendChild(td8)
                 tr1.appendChild(td9)
                 tr1.appendChild(td10)

                 tr1.appendChild(td2)*/