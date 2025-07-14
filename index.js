let candidatos=JSON.parse(localStorage.getItem('candidatosData'))
if (!candidatos || candidatos.length===0) {
  candidatos=[
  {nomeCand:"noExist", numleit:00,votos:0}
  ]
  localStorage.setItem('candidatosData', JSON.stringify(candidatos))
}

window.addEventListener('storage', (event)=>{
  if (event.key=="candidatosData"){
    candidatos=JSON.parse(event.newValue)
    console.log("mudou")
  } else{
    console.log("nao ha alteracoes")
  }
})

function cank(){
  candidatos.forEach(i=>{
    for (const [y,z] of Object.entries(i)){
      console.log(`${y}:${z}`)
    }
  })
}
cank()


function put(valor){
  var valor1=document.getElementById("campo1").value
  var valor2=document.getElementById("campo2").value
  
  if(valor1==""){
    document.getElementById("campo1").value=valor
  } else if (valor2==""){
    document.getElementById("campo2").value=valor
  }
}

function correc(){
  document.getElementById("campo1").value=""
  document.getElementById("campo2").value=""
}


function votar(){
  var valor1=parseInt(document.getElementById("campo1").value)
  var valor2=parseInt(document.getElementById("campo2").value)
  var valorDef=parseInt(String(valor1)+String(valor2))
  console.log(valorDef)
  console.log(candidatos)
  candidatos.forEach(i=>{
    if (valorDef==i.numleit){
      i.votos++
      localStorage.setItem('candidatosData', JSON.stringify(candidatos))
      document.getElementById("campo1").value=""
      document.getElementById("campo2").value=""
    }
  })
}