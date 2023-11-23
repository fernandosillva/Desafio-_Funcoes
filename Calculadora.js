
function calcular(vitorias,derrotas){
   return vitorias - derrotas

}

function nivel (nivel){
  if (nivel <=10 ){
    return "Ferro"
  }else if (nivel >=11 && nivel <=20) {
    return "Bronze"
  }else if (nivel >=21 && nivel <=50) {
    return "Prata"
  }else if (nivel >=51 && nivel <=80) {
    return "Ouro"
  }else if (nivel >=81 && nivel <=90) {
    return "Diamante"
  }else if (nivel >=91 && nivel <=100) {
    return "Lendario"
  } else  {
    return "Imortal"
  }  
}

function main (){
  let vitorias = 10000
  let derrotas = 1000
  const saldoVitorias = calcular(vitorias, derrotas)
  const resultadoNivel= nivel(saldoVitorias)

  console.log(`O Heroi tem saldo de ${saldoVitorias} XP e esta no nivel de ${resultadoNivel}`)
}

main()


