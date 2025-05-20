const itemCard = document.getElementById("item-card");
const btnRefresh = document.getElementById("btn-refresh");

const getData = async () => {
  itemCard.innerHTML = ""; // kosongkan dulu

  // Ambil 150 pokemon dari API
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();
  const results = data.results;

  // Pilih 3 random pokemon
  const shuffled = results.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  selected.forEach((item) => {
    const id = item.url.split("/")[6];
    const card = document.createElement("div");
    // Tailwind styling untuk card
    card.className =
      "bg-white p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:scale-105";

    card.innerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${item.name}" class="w-32 h-32 object-contain mb-4" />
      <h3 class="text-xl font-bold capitalize mb-2">${item.name}</h3>
      <p class="text-gray-500 text-sm break-words">${item.url}</p>
    `;

    itemCard.appendChild(card);
  });
};

// Load data pertama kali
getData();

// Event refresh
btnRefresh.addEventListener("click", getData);
