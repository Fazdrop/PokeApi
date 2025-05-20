const itemCard = document.getElementById("item-card");
const btnRefresh = document.getElementById("btn-refresh");

const getData = async () => {
  itemCard.innerHTML = ""; // kosongkan dulu

  // Ambil 150 pokemon dari API
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();
  const results = data.results;

  // Pilih 6 random pokemon
  const shuffled = results.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  selected.forEach((item) => {
    const id = item.url.split("/")[6];
    const card = document.createElement("div");
    card.className =
      "bg-gray-900 p-6 rounded-xl shadow-[0_0_15px_#0ff,0_0_40px_#0ff] flex flex-col items-center transition-transform hover:scale-110 cursor-pointer";

    card.innerHTML = `
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
        alt="${item.name}"
        class="w-48 h-48 object-contain mb-6 drop-shadow-[0_0_8px_cyan]"
      />
      <h3
        class="text-cyan-400 text-2xl font-bold capitalize mb-2 tracking-wide drop-shadow-[0_0_8px_cyan]"
      >
        ${item.name}
      </h3>
      <p class="text-gray-400 text-center break-words">${item.url}</p>
    `;

    itemCard.appendChild(card);
  });
};

// Load data pertama kali
getData();

// Event refresh
btnRefresh.addEventListener("click", getData);
