const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

fetch("news.json")
  .then(res => res.json())
  .then(json => {
    const berita = json.find(item => item.id === id);

    if (!berita) {
      document.getElementById("judul").innerText = "Berita tidak ditemukan!";
      return;
    }

    document.getElementById("judul").innerText = berita.judul;
    document.getElementById("gambar").src = berita.img;
    document.getElementById("tanggal").innerText = berita.tanggal;
    document.getElementById("isi").innerText = berita.isi;
  });
