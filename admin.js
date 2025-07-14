candidatos=JSON.parse(localStorage.getItem("candidatosData"))
window.addEventListener('storage', (event)=>{
  if (event.key=="candidatosData"){
    candidatos=JSON.parse(event.newValue)
    console.log("mudou")
    WhoWin(candidatos)
  } else{
    console.log("nao ha alteracoes")
  }
})

function WhoWin(candidatos = JSON.parse(localStorage.getItem("candidatosData")) || []){
  const result=document.getElementById("resulT")
  console.log(candidatos)
  var maior = 0
  for (i = 0; i < candidatos.length; i++) {
    if ( candidatos[i].votos > maior ) {
      maior = candidatos[i].votos
    }
  }
  if (maior!==0){
    var nMaior = candidatos.find(nomeCand => nomeCand.votos === maior)
  }
  console.log(nMaior)
  console.log(maior)
  result.innerHTML = `<strong>Nome:</strong> ${nMaior.nomeCand}<br><strong>Votos:</strong> ${nMaior.votos}`
  
  
}

function addCand(){
  nameOfCand=document.getElementById("nomeCandidato").value
  numOfEleit=document.getElementById("numeroEleit").value
  candidatos.push({nomeCand:nameOfCand, numleit:numOfEleit, votos:0})
  localStorage.setItem('candidatosData', JSON.stringify(candidatos))
  console.log(candidatos)
  document.getElementById("nomeCandidato").value=""
  document.getElementById("numeroEleit").value=""
}

function reniciar(){
  localStorage.removeItem("titulo")
  localStorage.removeItem("candidatosData")
  document.getElementById("resulT").innerHTML=""
}