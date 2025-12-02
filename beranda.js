let data = [];
let currentPage = 1;
const itemsPerPage = 3;

fetch("news.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    displayCards();
    setupPagination();
  })
  .catch(err => console.log("FETCH ERROR:", err));

function displayCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageData = data.slice(start, end);

  pageData.forEach(item => {
    container.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100" onclick="openDetail(${item.id})">
          <img src="${item.img}" alt="">
          <div class="card-text">
            <span class="date">${item.tanggal}</span>
            <h3 class="card-title">${item.judul}</h3>        
          <div>
          <span class="arrow">→</span>
        </div>
    </div>
    `;
  });
}

function openDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}