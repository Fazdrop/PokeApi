const itemCard = document.getElementById("item-card");
const btnRefresh = document.getElementById("btn-refresh");

const getData = async () => {
  itemCard.innerHTML = ""; // kosongkan dulu

  // Ambil 20 pokemon dari API (fixed list)
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();
  const results = data.results;

  // Pilih 3 random dari 20 tersebut
  const shuffled = results.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach((item) => {
    const id = item.url.split("/")[6];
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${item.name}" />
      <h3 class="capitalize">${item.name}</h3>
      <p>${item.url}</p>
    `;
    `<div class="bg-white p-4 rounded shadow" id="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${item.name}" class="w-full h-48 object-cover rounded" >
            <h2 class="text-xl font-semibold">${item.name}</h2>
            <p>Ini adalah isi kotak 1.</p>
        </div>`
    itemCard.appendChild(card);
  });
};

// Panggil getData sekali saat halaman load
getData();

// Pasang event listener refresh sekali di luar fungsi
btnRefresh.addEventListener("click", getData);
