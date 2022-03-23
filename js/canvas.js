const canvas = document.querySelector('.jogo')
  const ctx = canvas.getContext('2d')
  const root = document.querySelector(':root')
  const corAzul = getComputedStyle(root).getPropertyValue('--blue-color')
  const corCinza = '#495057'
  canvas.width = '1200'
  canvas.height = '800'
  ctx.lineWidth = 4.5
  
  //#region Contador de tentavivas
  function desenhar() {
    switch(contador) {
      case 0:
        desenharForca()
        break
      case 1:
        desenharCabeca()
        break
      case 2:
        desenharTronco()
        break
      case 3:
        desenharBracoEsq()
        break
      case 4:
        desenharBracoDir()
        break
      case 5:
        desenharPernaEsq()
        break
      case 6:
        desenharPernaDir()
        break
      default:
        break
    }
  }
  //#endregion
  
  //#region Funções de desenho corpo
  function desenharForca() {
    ctx.fillStyle = corAzul
    ctx.fillRect(400, 88, 177.5, 4.5)
    ctx.fillRect(400, 88, 4.5, 360)
    ctx.fillRect(575.5, 88 , 4.5, 49.5)
    ctx.fillRect(330, 445, 294, 5)
  }
  
  function desenharCabeca() {
    ctx.strokeStyle = corAzul
    ctx.beginPath();
    ctx.arc(577.5, 170, 31.5, 0, Math.PI * 2)
    ctx.stroke();
  }
  
  function desenharTronco() {
    ctx.fillStyle = corAzul
    ctx.fillRect(575.5, 201, 4.5, 135)
  }
  
  function desenharBracoEsq() {
    ctx.strokeStyle = corAzul
    ctx.beginPath()
    ctx.moveTo(577.5,201);
    ctx.lineTo(547.5, 273);
    ctx.stroke();
  }
  
  function desenharBracoDir() {
    ctx.strokeStyle = corAzul
    ctx.beginPath()
    ctx.moveTo(577.5,201);
    ctx.lineTo(607.5,273);
    ctx.stroke();
  }

  function desenharPernaEsq() {
  
    ctx.strokeStyle = corAzul
    ctx.beginPath()
    ctx.moveTo(577.5,336);
    ctx.lineTo(547.5,408);
    ctx.stroke();
  }
  
  function desenharPernaDir() {
    ctx.strokeStyle = corAzul
    ctx.beginPath()
    ctx.moveTo(577.5,336);
    ctx.lineTo(607.5,408);
    ctx.stroke();
  }
  //#endregion
  
  //#region Funções desenha letras e afins 
  function desenharTracos(count) {
    ctx.fillStyle = corAzul
    let a = 245
    let b = 80
    ctx.fillRect(a, 658, b, 4);
  
    let arr = [a]
      
    let i = 1
    for(i; i <= count - 1; i++) {
      c = a + b
      ctx.fillRect(c + 16, 658, b, 4);
        
      a = c + 16
      arr.push(a)
    }
    return arr
  }
  
  function desenharLetrasCertas(letra,indice, xPos) {
    ctx.fillStyle = corAzul
    const l = letra.toUpperCase()
    ctx.font = '48px inter';
    ctx.fillText(`${l}`, xPos[indice] + ( 48 / 2), 658 - 32)
  }
  
  let posiErradas = [405]
  for(let i = 0; i < 6; i++) {
    a = posiErradas[i]
    b = a + 48
    posiErradas.push(b)
  }
  
  function desenharLetrasErradas(letra, xPos) {
    const l = letra.toUpperCase()
    ctx.fillStyle = corCinza
    ctx.font = '24px inter';
    ctx.fillText(`${l}`, xPos, 706)
  
  }
  //#endregion
  
  //#region Funções desenha resultados
  function desenharDerrota() {
    ctx.fillStyle = 'red'
    ctx.font = '24px inter';
    ctx.fillText('VOCÊ PERDEU!', 650, 250)
    delayRecarrega()
  }
  function desenharDesistir() {
    ctx.fillStyle = 'black'
    ctx.font = '24px inter';
    ctx.fillText('ATÉ A PRÓXIMA!', 650, 250)
    delayRecarrega()
  }
  
  function desenharVitoria() {
    contador = 7
    posiErradas = []
    ctx.fillStyle = 'green'
    ctx.font = '24px inter';
    ctx.fillText('VOCÊ GANHOU PARABÉNS!', 650, 250)
    delayRecarrega()
  }
  //#endregion