async function getPokemon(){
    try{
    const pokemon = document.getElementById('input-pokemon') //pega o valor do input com id input-pokemon
    const pokemonMinusculo = pokemon.value.toLowerCase() //transforma o valor do input em minusculo
    const url = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonMinusculo}`) //faz a requisição para a api do pokemon
    console.log(pokemon.value)
    const pokemonName = url.data.name
    const pokemonMove = url.data.moves
    const pokemonType = url.data.types

    let pokeData = document.getElementById('pokemon-data') //pega o elemento com id pokemon-data
    let pokeName = document.getElementById('pokemon-name') //pega o elemento com id pokemon-name
    let pokeType = document.getElementById('pokemon-type') //pega o elemento com id pokemon-type
    let pokeMove = document.getElementById('pokemon-move') //pega o elemento com id pokemon-move
    
    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }
    
    clearcontent('erro-pokemon')
    clearcontent('pokemon-name')
    clearcontent('pokemon-type')
    clearcontent('pokemon-move')

    
    let name =  document.createElement('h3') //cria um elemento h3
    name.innerHTML = 'Nome Pokémon:' //adiciona o texto 'Nome Pokémon' dentro do elemento h3
    pokeName.appendChild(name) //adiciona o elemento h3 dentro do elemento pokeName

    let nameData = document.createElement('p') //cria um elemento p
    nameData.innerHTML = pokemonName //adiciona o texto do pokemonName dentro do elemento p
    pokeName.appendChild(nameData) //adiciona o elemento p dentro do elemento pokeName


    let type = document.createElement('h3')
    type.innerHTML = 'Tipo:'
    pokeType.appendChild(type)

    let typeData = document.createElement('p')
    for(i in pokemonType){
        typeData.innerHTML += pokemonType[i].type.name + ' '
    }
    pokeType.appendChild(typeData)


    let move = document.createElement('h3')
    move.innerHTML = 'Movimentos:'
    pokeMove.appendChild(move)

    for(i in pokemonMove){
        let moveData = document.createElement('li')
        if(i < 4){
            moveData.innerHTML = pokemonMove[i].move.name
            pokeMove.appendChild(moveData)
        }    
    }   
    
    }catch(error){
        function clearcontent(elementID) {
            document.getElementById(elementID).innerHTML = "";
        }
        clearcontent('erro-pokemon')
        clearcontent('pokemon-name')
        clearcontent('pokemon-type')
        clearcontent('pokemon-move')
        let pokeData = document.getElementById('erro-pokemon') //pega o elemento com id pokemon-data
        erroPokemon = document.createElement('p')
        erroPokemon.innerHTML = 'Pokemon não encontrado'
        pokeData.appendChild(erroPokemon)

    }
    
}

