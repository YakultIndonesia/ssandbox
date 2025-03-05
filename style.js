/* ======== GENERAL STYLES ======== */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #181818;
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
}

/* ======== HEADER ======== */
header {
    background: linear-gradient(to right, #ffcc00, #b8860b);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(255, 204, 0, 0.5);
    border-bottom: 3px solid #ffcc00;
}

.logo {
    width: 120px;
    animation: glow 1.5s infinite alternate;
}

/* Animasi glow emas */
@keyframes glow {
    0% { filter: drop-shadow(0 0 5px gold); }
    100% { filter: drop-shadow(0 0 15px gold); }
}

/* ======== GAME SELECTION ======== */
.game-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.game-list a {
    background: linear-gradient(135deg, #222, #444);
    padding: 10px;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: 0.3s;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4cm; /* Lebar kontainer sesuai gambar */
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
}

.game-list a:hover {
    border-color: gold;
    transform: scale(1.05);
    box-shadow: 0 0 15px gold;
}

/* Ukuran gambar: Lebar 4cm, Tinggi 5cm */
.game-list img {
    display: block;
    width: 4cm !important;
    height: 5cm !important;
    border-radius: 5px;
    transition: 0.3s;
    object-fit: cover; /* Pastikan gambar tidak melebar */
}

.game-list a:hover img {
    transform: scale(1.05);
}

/* ======== TRANSAKSI PAGE ======== */
main {
    padding: 30px;
}

input, select {
    width: 90%;
    max-width: 400px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid gold;
    background-color: #222;
    color: white;
    text-align: center;
}

button {
    padding: 15px;
    width: 90%;
    max-width: 400px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to right, gold, #b8860b);
    color: black;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(255, 204, 0, 0.5);
}

button:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(255, 204, 0, 0.7);
}

/* ======== FOOTER ======== */
footer {
    margin-top: 20px;
    padding: 15px;
    background-color: #1e1e1e;
    border-top: 3px solid gold;
    font-size: 14px;
    text-align: center;
    box-shadow: 0 -4px 10px rgba(255, 204, 0, 0.3);
}