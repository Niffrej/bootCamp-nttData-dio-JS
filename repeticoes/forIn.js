let vaga = [8,1,2,5,6,7]

console.log(vaga)

for (let pos in vaga) {
    console.log(vaga[pos])
}

let pos1 = vaga.indexOf(8) 
if(pos1 == -1) {
console.log(`O valor  nao foi encontrado`)
} else {
    console.log(`O valor  esta na posicao ${pos1}`)
}