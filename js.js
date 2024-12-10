function showPlanetMass() {
    const planet = document.getElementById('planet-select').value;
    const result = document.getElementById('result');

    // Massa atmosfer planet di Tata Surya (dalam kilogram)
    const planetMass = {
        earth: '5.15 × 10^18 kg', // Massa atmosfer Bumi
        mars: '1.2 × 10^16 kg',   // Massa atmosfer Mars
        jupiter: '1.3 × 10^20 kg', // Massa atmosfer Jupiter
        venus: '4.8 × 10^17 kg',   // Massa atmosfer Venus
        saturn: '3.6 × 10^18 kg',  // Massa atmosfer Saturnus
        neptune: '2.0 × 10^18 kg'  // Massa atmosfer Neptunus
    };

    // Menampilkan hasil massa atmosfer berdasarkan planet yang dipilih
    if (planetMass[planet]) {
        result.innerHTML = `<p>Massa atmosfer planet ${planet.charAt(0).toUpperCase() + planet.slice(1)}: <strong>${planetMass[planet]}</strong></p>`;
    } else {
        result.innerHTML = `<p>Planet tidak ditemukan!</p>`;
    }
}