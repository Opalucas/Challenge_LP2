  const paginas = document.querySelectorAll('.pagina')
  const btnComecar = document.querySelector('#btn-comecar')
  const btnAdicionar = document.querySelector('#btn-adiciona')
  const btnSalvar = document.querySelector('#btn-salvar')
  const btnCancelar = document.querySelector('#btn-cancelar')
  const btnNovoJogo = document.querySelector('#btn-novoJogo')
  const btnDesistir = document.querySelector('#btn-desistir')

  //#region 
  const Palavras = ['javascrip', 'css', 'bootstrap', 'html', 
  'github', 'react', 'canvas', 'alura', 'tecnologia']
  //#endregion Lista de palavras

  //#region Funções dos botões
  btnComecar.addEventListener('click', () => {
    novoJogo()
  })
  
  btnAdicionar.addEventListener('click', () => {
    paginas[0].classList.add('esconder')
    paginas[1].classList.remove('esconder')
  })
  
  btnCancelar.addEventListener('click', () => {
    paginas[1].classList.add('esconder')
    paginas[0].classList.remove('esconder')
  })
  
  btnNovoJogo.addEventListener('click', () => {
    document.location.reload()
    novoJogo()
  })
  
  btnDesistir.addEventListener('click', () => {
    contador = 7
    posiErradas = []
    desenharDesistir()
    
  })
  
  btnSalvar.addEventListener('click', () => {
    const texto = document.querySelector('.adicionar-texto').value.replace(/[^a-zA-Z]/g, "")
    if(texto === '') {return alert('Informe alguma palavra ou clique em cancelar!')}
      paginas[1].classList.add('esconder')
      paginas[2].classList.remove('esconder')
      Palavras.push(texto)
      sortear(0, Palavras.length)
  })
  //#endregion

  //#region Funções auxiliares
  function novoJogo(){
    paginas[0].classList.add('esconder')
    paginas[2].classList.remove('esconder');
    
    sortear(0, Palavras.length)
  }

  //Função para retornar ao início do jogo
function delay(n){
  return new Promise(function(resolve){
    setTimeout(resolve,n*1000);
  });
}
async function delayRecarrega(){
  await delay(3);
  document.location.reload()
}
//#endregion