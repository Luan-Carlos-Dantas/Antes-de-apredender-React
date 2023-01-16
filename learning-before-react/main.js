import * as math from './lib/math.js'
import sum from './lib/sum.js'

document.querySelector('#app').style.fontFamily = 'sans-serif'
// Nullish Coalescing Operator
const idade =  0;

const user = {
  nome:"Luan",
  idade: 23,
  endereco: {
    rua: "Rua Teste",
    number: 200,
    cep: { 
      cidade: 'Guarulhos',
      code: '000000'
    }
  }
}

function mostraIdade ({ idade }){
    return idade
}

const { endereco , idade:age} = user

const { nome: name, ...rest} = user

const array = [0,1,2,3,4,5,6]

const [first, second, ...others] = array

const nameProduct = 'Iphone'
const price = 9900.00

const product = {
  nameProduct,
  price
}

document.querySelector('#app').innerHTML = `
  <h1>Hello World</h1>
  <div>
    <h2>Nullish Coalescing Operator</h2>
    <b>const idade =  0; <br>
    idade ?? 'Não informado'</b>
    <p>Sua idade é: ${idade ?? 'Não informado'}</p>
  </div>  

  <div>
  <h2>Objects</h2>
  <b>
  const user = {
    nome:"Luan",
    idade: 23,
    endereco: {
      rua: "Rua Teste",
      number: 200
    }
  }
  </b>
  <h3>Object.keys</h3>
  <b>Object.keys(user)</b>
  <p>${Object.keys(user)}</p>
  <h3>Object.values</h3>
  <b>JSON.stringify(Object.values(user))</b>
  <p>${JSON.stringify(Object.values(user))}</p>
  <h3>Object.entries</h3>
  <b>JSON.stringify(Object.entries(user))</b>
  <p>${JSON.stringify(Object.entries(user))}</p>

  <h3>Desestruturação</h3>
  <b>const { endereco } = user<br>
  const { endereco, idade:age} = user</b> 
  <p>${JSON.stringify(Object.values({endereco, age}))}</p>

  <p>${mostraIdade(user)}</p>

  <h3>Rest Operator</h3>
  <b>const { nome: name, ...rest} = user<br>
  Object.values({nome, rest})</b> 
  <p>${JSON.stringify(Object.values({name, rest}))}</p>

  <b>const array = [0,1,2,3,4,5,6]<br>

  const [first, second, ...others] = array</b> 
  <p>
  JSON.stringify(first, second, ...others)
  </p>
  <p>${JSON.stringify({first, second, ...others})}</p>

  <h3>Short Sintax</h3>
  <b>
  const nameProduct = 'Iphone' <br>
  const price = 9900.00 <br>
  
  const product = {
    nameProduct,
    price
  }</b> 
  <p>
  JSON.stringify(product)
  </p>
  <p>${JSON.stringify(product)}</p>

  <h3>Optional Changing</h3>
  <b>
  const user = {
    nome:"Luan",
    idade: 23,
    endereco: {
      rua: "Rua Teste",
      number: 200,
      cep: { 
        cidade: 'Guarulhos',
        code: '000000'
      }
    }
  }<br>
  user.endereco?.cep.code ?? 'Não Informado'  - Caso não exista endereço ou CEP code retorna "Não Informado"
  </b>
  <p>${user.endereco?.cep.code ?? 'Não Informado'}</p>

  <h2>Array Methods</h2>
  <div>
  <h3>For Of</h3>
  </div>
</div>  
`
for (let i of array){
  document.querySelector("#app").innerHTML += `<p>${i}</p>`
}

const newArray = array.map(i=>{
  return i*2
})

const newArray2 = array.filter(i=>{
  if(i % 3 === 0)
  return i
})

const algunsItemSaoNumeros = array.some(i=> {
  return typeof i === 'number'
})

const todosItemSaoNumeros = array.every(i=> {
  return typeof i === 'number'
})

const ePar = array.find(i=> {
  return i % 2 === 0
})

const soma = array.reduce((acc, item)=>{
  return acc += item
}
,0)

document.querySelector("#app").innerHTML += `<h3>Map (Retorna um vetor do mesmo tamanho)</h3>
<b>const newArray = array.map(i=>{
  return i*2
})</b></br>
${JSON.stringify(newArray)}`

document.querySelector("#app").innerHTML += `<h3>Filter (Retorna um vetor com os valores filtrados)</h3>
<b>const newArray2 = array.filter(i=>{
  if(i % 3 === 0)
  return i
})</b></br>
${JSON.stringify(newArray2)}`

document.querySelector("#app").innerHTML += `<h3>Every (Retorna um boleano dependendo se todos os itens satisfazerem a condição)</h3>
<b>const todosItemSaoNumeros = array.every(i=> {
  return typeof i === 'number'
})</b></br>
${todosItemSaoNumeros}`

document.querySelector("#app").innerHTML += `<h3>Some (Retorna um boleano dependendo se um item satifazer a condição)</h3>
<b>const todosItemSaoNumeros = array.some(i=> {
  return typeof i === 'number'
})</b></br>
${algunsItemSaoNumeros}`

document.querySelector("#app").innerHTML += `<h3>Find (Retorna o primeiro que satisfazer a condição)</h3>
<b>const ePar = array.find(i=> {
  return i % 2 === 0
})</b></br>
${ePar}`

document.querySelector("#app").innerHTML += `<h3>Reduce (Retorna uma nova estrutura de dados)</h3>
<b>const soma = array.reduce((acc (acumulador) , item (items do array) )=>{
  return acc += item
}
,0 (valor inicial))</b></br>
${soma}`

document.querySelector("#app").innerHTML += `<h2>Promisses</h2>
<h3>.then || .cacth
`
const somaDoisNumeros = (a,b) => { 
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(a + b)
    },4000)}
  )
}

somaDoisNumeros(2,3)
  .then(soma=>{
    document.querySelector("#app").innerHTML += soma
  }
  )

  // fetch('http://api.github.com/users/Luan-Carlos-Dantas')
  //   .then(
  //     response =>{
  //       return response.json()
  //       // response.json().then(
  //       //   body=>{
  //       //     document.querySelector("#app").innerHTML += `${JSON.stringify(body)}`
  //       //   }
  //       // )
  //     }
  //   ).then(body =>{
  //     // document.querySelector("#app").innerHTML += `${JSON.stringify(body)}`
  //     document.querySelector("#app").innerHTML += `<img src=${body.avatar_url}>`
  //   })
  //   .catch(err =>{
  //     console.log(err)
  //   })
  //   .finally(()=>{
  //     console.log('FINALLY')
  //   })

async function buscaDados() {

  try {
    const response = await fetch('http://api.github.com/users/Luan-Carlos-Dantas')
    const body = await response.json()

      // document.querySelector("#app").innerHTML += `${JSON.stringify(body)}`
      // document.querySelector("#app").innerHTML += `<img src=${body.avatar_url}>`
    console.log(body)
  } catch (error) {
    console.log(error)
  } finally{
    console.log('Finally')
  }
}
buscaDados()

document.querySelector('#app').innerHTML += `<h2>Import / Exports</h2>`
document.querySelector('#app').innerHTML += `<b>import * as math from './lib/math.js'</b><br><b>import { somar, sub } from './lib/math.js'</b>
<p>${math.somar(3,4)}</p>`
document.querySelector('#app').innerHTML += `<p>${math.sub(3,4)}</p>`
document.querySelector('#app').innerHTML += `<b>import sum from './lib/sum.js'</b><p>${sum(10,23)}</p>`




