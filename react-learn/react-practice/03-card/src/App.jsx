import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-center p-6">
        Pokémon Card Binder
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-28 justify-items-center">
      <Card pokemonName={"Bulbasaur"} type={"🌱 Grass"} HP={45} imageLink={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"}/>
      <Card pokemonName={"Charmander"} type={"🔥 Fire"} HP={39} imageLink={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"}/>
      <Card pokemonName={"Squirtle"} type={"💧 Water"} HP={44} imageLink={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"}/>
      <Card pokemonName={"Pikachu"} type={"⚡ Electric"} HP={35} imageLink={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"}/>
      <Card pokemonName={"Mewtwo"} type={"🔮 Psychic"} HP={106} imageLink={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png"}/>
      </div>
    </div>
  )
}

export default App
