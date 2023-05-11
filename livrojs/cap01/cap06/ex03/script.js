const carros = []
carros.push = ({modelo: "Palio", preco: 20000})
carros.push = ({modelo: "Up", preco: 25000})
for (const carro of carros) {
    console.log(`${carro.modelo} - R$ ${carro.preco}`)
}