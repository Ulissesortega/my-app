//fetches goes here

async function GetData(){
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    return data;
}

export{GetData}