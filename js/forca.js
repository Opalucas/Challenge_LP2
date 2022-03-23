let guardaLetras = []
let contador = 0
let contaLetras = 0

function sortear(min, max) {
    const i = Math.trunc(Math.random() * (max - min) + min)
    const palavra = Palavras[i]
    const posicao = desenharTracos(palavra.length) 
    verificarTecla(palavra, posicao)
    console.log(palavra) 
}

function verificarLetraCorreta(letra, palavra, posicao) {
  guardaLetras.push(letra)
  let regex = new RegExp(letra, 'gi');
  if (regex.test(palavra) && contador < 7) {
    for(let i = 0; i < palavra.length; i++) {
      if(palavra[i] === letra) {
        desenharLetrasCertas(letra, i, posicao)
        contaLetras++
      }
      if(contaLetras === palavra.length){
        desenharVitoria()
      }else{
        'null'
      }
    } 
  } else {
      desenharLetrasErradas(letra, posiErradas[0])
      posiErradas.shift()
      desenhar()
      contador++
      if(contador === 7){
        desenharDerrota()
      }
      else{
        ''
      }
  }
}

function verificarTeclaRepetida(letra, palavra, posicao) {
  if(guardaLetras.includes(letra)){
    alert("Informe uma letra que não tenha sido digitada anteriormente")
  }
  else{
    verificarLetraCorreta(letra, palavra, posicao)
  }
}

function verificarTecla(palavra, posicao) {
document.addEventListener('keydown', (event) => {
  let letra = event.code 
  const regex = /Key/

  if(regex.test(letra)) {
    letra = event.key
    verificarTeclaRepetida(letra, palavra, posicao)
  } 
})
}