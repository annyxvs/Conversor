function km() {
  const valorVel1 = document.querySelector('#number')
  const valorVel = valorVel1.value
  const result = document.querySelector('#resultado')
  var convert = parseInt(valorVel)
  const transformMult = convert * 3.6
  const valorFinal = transformMult.toFixed(1)
  document.getElementById('resultado').style.display = 'block'
  result.innerHTML = `A sua velocidade em km/h é ${valorFinal}`
}

function ms() {
  const valorVel1 = document.querySelector('#number')
  const valorVel = valorVel1.value
  const result = document.querySelector('#resultado')
  var convert = parseInt(valorVel)
  const transformMult = convert / 3.6
  const valorFinal = transformMult.toFixed(1)
  document.getElementById('resultado').style.display = 'block'
  result.innerHTML = `A sua velocidade em m/s é ${valorFinal}`
}
