function Card({pokemonName, HP, type, imageLink  }) {
  return (
    // 1. CARD CONTAINER: Fixed sizing ideal for a binder grid layout
    <div className="w-64 bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group flex flex-col items-center">

      {/* HEADER: Name and HP aligned on opposite sides */}
      <div className="w-full flex justify-between items-baseline mb-3">
        <h1 className="text-xl font-black tracking-wide text-white group-hover:text-blue-400 transition-colors">
          {pokemonName}
        </h1>

        <h3 className="text-sm font-bold text-red-400 tracking-tighter bg-red-950/50 px-2 py-0.5 rounded-full border border-red-900">
          {HP} HP
        </h3>
      </div>

      {/* 2. IMAGE CONTAINER: Centered inner box mimicking a trading card window */}
      <div className="w-full aspect-square bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex justify-center items-center mb-3 p-2 relative group-hover:bg-slate-950 transition-colors">
        <img
          src={imageLink}
          alt={pokemonName}
          className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* FOOTER: Subtitle or Pokémon elemental type badge */}
      <div className="w-full flex justify-start">
        <h2 className="text-xs font-extrabold uppercase tracking-widest bg-gray-400 text-slate-950 px-2.5 py-1 rounded-md shadow-sm">
          {type}
        </h2>
      </div>
    </div>
  );
}

export default Card;
