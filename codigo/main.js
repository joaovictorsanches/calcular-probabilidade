function Calcular() {
  espaço_amostral = document.getElementById('n-amostral').value
  numero_de_evento = document.getElementById('n-eventos').value
  probabilidade = Number(numero_de_evento/espaço_amostral * 100) //formula: P = n(a) / n(e)
  totprob = probabilidade
  document.getElementById('result').innerHTML = 'Resultado: ' + String(probabilidade.toFixed(2)) + '%'
}

function mostreFloat() {
  document.getElementById('result').innerHTML = 'Resultado' + String(totprob) + '%' 
  console.log(totprob)
  
}