console.log("Hello, world!");

// var nomeVar = 'João'
// console.log(nomeVar)
// nomeVar = 'Pedro'
// console.log(nomeVar)

// let nomeLet = 'Maria'
// console.log(nomeLet)
// nomeLet = 'Joana'
// console.log(nomeLet)

// const nomeConst = 'José'
// console.log(nomeConst)
// nomeConst = 'Novo valor'

// const nome = 'João' // string
// const idade = 25 // number
// const estudante = true // boolean
// const cidade = null // null
// let pais // undefined

// console.log(nome, typeof nome) // João string
// console.log(idade, typeof idade) // 25 number
// console.log(estudante, typeof estudante) // true boolean
// console.log(cidade, typeof cidade) // null object
// console.log(pais, typeof pais) // undefined undefined

// const pessoa = {
//     nome: 'João',
//     idade: 25
//    }
//    const frutas = ['maçã', 'banana', 'laranja']
//    // 0 1 2
//    function saudacao() {
//      return 'Olá, Mundo!'
//    }
//    console.log(pessoa) // { nome: 'João', idade: 25 }
//    console.log(frutas) // ['maçã', 'banana', 'laranja']
//    console.log(saudacao()) // Olá, Mundo!

// // Declaração de um array vazio
// const frutas = []
// // Inicialização de um array com elementos
// const numeros = [1, 2, 3, 4, 5]
// // Acessando elementos do array
// console.log(numeros[0]) // 1
// console.log(numeros[2]) // 3
// // Modificando elementos do array
// numeros[2] = 10
// console.log(numeros) // [1, 2, 10, 4, 5]

// const frutas = []
// frutas.push('maçã')
// frutas.push('banana', 'laranja')
// console.log(frutas) // ['maçã', 'banana', 'laranja']

// const frutas = ['maçã', 'banana', 'laranja']
// frutas.pop()
// console.log(frutas) // ['maçã', 'banana']
// frutas.shift()
// console.log(frutas) // ['banana']

// const frutas = ['banana']
// const indice = frutas.indexOf('banana')
// console.log(indice) // 0

// const frutas = ['banana']
// frutas.splice(indice, 1) // Remove 1 elemento a partir do índice 0
// console.log(frutas) // []

// // Declaração de um objeto vazio
// const pessoa = {}
// // Inicialização de um objeto com propriedades
// const carro = {
//  marca: 'Toyota',
//  modelo: 'Corolla',
//  ano: 2021
// }
// // Acessando propriedades do objeto
// console.log(carro.marca) // Toyota
// console.log(carro['modelo']) // Corolla
// // Modificando propriedades do objeto
// carro.ano = 2022
// console.log(carro) // { marca: 'Toyota', modelo: 'Corolla', ano: 2022 }
// // Adicionando novas propriedades
// carro.cor = 'Prata'
// console.log(carro) // { marca: 'Toyota', modelo: 'Corolla', ano: 2022, cor: 'Prata' }

// // Adicionar durante a criação
// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2021,
//      ligar: function() {
//      console.log('O carro está ligado.')
//     }
//    }
//    carro.ligar() // O carro está ligado.
//    // Adicionar após a criação
//    carro.desligar = function() {
//      console.log('O carro está desligado.')
//    }
//    carro.desligar() // O carro está desligado.

// const chaves = Object.keys(carro)
// console.log(chaves) // ['marca', 'modelo', 'ano', 'cor', 'ligar']
// const valores = Object.values(carro)
// console.log(valores) // ['Toyota', 'Corolla', 2022, 'Prata', function]
// const entradas = Object.entries(carro)
// console.log(entradas)
// // [['marca', 'Toyota'], ['modelo', 'Corolla'], ['ano', 2022], ['cor', 'Prata'], ['ligar', function]]

// const idade = 20
// if (idade >= 18) {
//   console.log('Adulto')
// }

// const nota = 85
// if (nota >= 90) {
//   console.log('A')
// } else if (nota >= 80) {
//   console.log('B')
// } else if (nota >= 70) {
//   console.log('C')
// } else if (nota >= 60) {
//   console.log('D')
// } else {
//   console.log('F')
// }

// const idade = 20
// if (idade >= 18) {
//   console.log('Adulto')
// } else {
//   console.log('Menor de idade')
// }

// const dia = 'segunda'
// switch (dia) {
//   case 'segunda':
//   console.log('Hoje é segunda-feira')
//   break
//   case 'terça':
//   console.log('Hoje é terça-feira')
//   break
//   default:
//   console.log('Hoje não é segunda nem terça-feira')
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }

// // For...in com Arrays:
// const frutas = ['maçã', 'banana', 'laranja']
// for (const indice in frutas) {
//   console.log(`${indice}: ${frutas[indice]}`)
// }
// // 0: maçã
// // 1: banana
// // 2: laranja

// // For...in com Objetos:
// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     cidade: 'São Paulo'
//    }
//    for (const chave in pessoa) {
//      console.log(`${chave}: ${pessoa[chave]}`)
//    }
//    // nome: João
//    // idade: 30
//    // cidade: São Paulo

// const numeros = [1, 2, 3, 4, 5]
// for (const numero of numeros) {
//   console.log(numero)
// }
// // 1
// // 2
// // 3
// // 4
// // 5

// const saudacao = 'Olá'
// for (const letra of saudacao) {
//   console.log(letra)
// }
// // O
// // l
// // á

// let i = 0
// while (i < 5) {
//   console.log(i)
//  i++
// }

// let i = 0
// do {
//   console.log(i)
//  i++
// } while (i < 5)

// //              Parametro
// function saudacao(nome) {
//     return `Olá, ${nome}`
//   }
//   console.log(saudacao('Maria')) // Olá, Maria
// //                    Argumento

// // Função anônima
// const saudacaoAnonima = function(nome) {
//     return `Olá, ${nome}`
//   }
//   console.log(saudacaoAnonima('João')) // Olá, João
  

// // Arrow function
// const saudacaoArrow = (nome) => {
//     return `Olá, ${nome}`
//   }
//   console.log(saudacaoArrow('Ana')) // Olá, Ana
//   // Arrow function reduzida
//   const saudacaoArrowReduzida = (nome) => `Olá, ${nome}`
//   console.log(saudacaoArrowReduzida('Ana')) // Olá, Ana

// function soma(a, b) {
//     return a + b
//   }
//   const resultado = soma(2, 3)
//   console.log(resultado) // 5

// function mostrarMensagem(mensagem) {
//     console.log(mensagem)
//   }
//   mostrarMensagem('Olá, Mundo!') // Olá, Mundo!

// function exemploEscopo() {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem) // Acessível aqui
//   }
//   exemploEscopo()
//   console.log(mensagem) // Erro: mensagem não definida

// if (true) {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem) // Acessível aqui
//   }
//   console.log(mensagem) // Erro: mensagem não definida

// const fetchData = async () => {
//     try {
//     const response = await fetch('https://api.exemplo.com/dados')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.error('Erro ao buscar dados:', error)
//    }
//   }
//   fetchData()

// function fetchData(callback) {
//     setTimeout(() => {
//     callback('Dados recebidos')
//     }, 1000)
//    }
//    fetchData((mensagem) => {
//      console.log(mensagem)
//    })

// try {
//     const resultado = someFunction()
//     console.log(resultado)
//   } catch (error) {
//     console.error('Erro:', error)
//   }

// // modulo.js
// export function saudacao(nome) {
//     return `Olá, ${nome}`
//   }
//   // index.js
//   import { saudacao } from './modulo.js'
//   console.log(saudacao('Maria'))

// // modulo.js
// function saudacao(nome) {
//     return `Olá, ${nome}`
//   }
//   module.exports = saudacao
//   // app.js
//   const saudacao = require('./modulo')
//   console.log(saudacao('Maria'))

// const minhaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve('Dados recebidos')
//     }, 1000)
//    })
//    minhaPromise.then((mensagem) => {
//      console.log(mensagem) // Dados recebidos (exibido após 1 segundo)
//    }).catch((erro) => {
//      console.error('Erro:', erro)
//    })

// const fetchData = async () => {
//     try {
//     const response = await fetch('https://api.exemplo.com/dados')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.error('Erro ao buscar dados:', error)
//    }
//   }
//   fetchData()

// const pessoa = { nome: 'Maria', idade: 30 }
// const { nome, idade } = pessoa
// console.log(nome, idade) // Maria 30

// const array1 = [1, 2, 3]
// const array2 = [...array1, 4, 5, 6]
// console.log(array2) // [1, 2, 3, 4, 5, 6]
// const objeto1 = { a: 1, b: 2 }
// const objeto2 = { ...objeto1, c: 3 }
// console.log(objeto2) // { a: 1, b: 2, c: 3 }

// function somar(...numeros) {
//     return numeros.reduce((acc, numero) => acc + numero, 0)
//   }
//   console.log(somar(1, 2, 3)) // 6
//   console.log(somar(4, 5, 6, 7)) // 22
//   const { a, b, ...resto } = { a: 1, b: 2, c: 3, d: 4 }
//   console.log(a, b) // 1 2
//   console.log(resto) // { c: 3, d: 4 }