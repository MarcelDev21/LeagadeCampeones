function RechercheElement(){
    /* search = document.getElementById("searches").value
 
     console.log("searches", search)
     let homeTeam,autreTab 
     let monDouble = false
     let arraEquipo = []
    for(let i =0; i<miArray.length; i++){
         homeTeam = miArray[i].homeTeam.name
          if(search === homeTeam){
             autreTab = search
             arraEquipo.push(homeTeam)
              monDouble = true
              //console.log(search+ " Existe")
              //alert("existe")
          }
     }
 
     if(monDouble === true){
       // document.getElementById('tbody').innerText
        // myTbody
         console.log(autreTab+"existe")
         alert(search+" Existe")
     }else{
         alert(search+" no existe")
      console.log(search+"no existe") 
     }*/
 
     
     /*const tab = miArray.filter(function(item, index){
         if(item.homeTeam.name == search){
             console.log(item.homeTeam.name)
             return true
         }
     }) */
   // console.log(miArray)
 
   // recupere premieremnet la valeur
   search = document.getElementById("searches").value
  // console.log(search)
 
   let homeTeam,autreTab 
     let monDouble = false
     let arraEquipo = []
 
     // ETAPA 1 : ir en el array buscando el nombre que entramos
     for(let i =0; i<miArray.length;i++){
         homeTeam = miArray[i].homeTeam.name
          if(search === homeTeam){
             autreTab = search
             arraEquipo.push(homeTeam)
              monDouble = true
             // console.log(homeTeam+ " Existe")
              //alert("existe")
          }
     }
 
    // console.log(homeTeam+ " Existe")
    //console.log(miArray)
     // vamos en el array a recuperar los partidos con el nombre
    // console.log("hey", arraEquipo)
    let nouveauTab 
    for(let j =0; j<miArray.length; j++){
      nouveauTab = miArray[j].homeTeam.name
        if(homeTeam === nouveauTab){
            console.log("affiche", nouveauTab)
        }
    }
  }
 
  RechercheElement()
 
 
 