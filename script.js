document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}


function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log(
        "Pembagian:",
        b !== 0 ? a / b : "Tidak dapat dibagi nol"
    );
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);


const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
    inputNilai === null ||
    inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) ||
    nilaiMahasiswa < 0 ||
    nilaiMahasiswa > 100
) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}


const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
    case "1":
        alert("Bilangan satu");
        break;
    case "2":
        alert("Bilangan dua");
        break;
    case "3":
        alert("Bilangan tiga");
        break;
    case "4":
        alert("Bilangan empat");
        break;
    case "5":
        alert("Bilangan lima");
        break;
    default:
        alert("Pilihan tidak tersedia");
}

function cekBilangan() {
    document.body.style.backgroundColor = warna;
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}



function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai wajib diisi.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;
}



function hitungNilaiSekolah() {
    const tugas = document.getElementById("tugas").value;
    const uts = document.getElementById("uts").value;
    const uas = document.getElementById("uas").value;

    if (tugas === "" || uts === "" || uas === "") {
        alert("Semua nilai harus diisi.");
        return;
    }

    const nilaiTugas = Number(tugas);
    const nilaiUTS = Number(uts);
    const nilaiUAS = Number(uas);

    if (
        nilaiTugas < 0 || nilaiTugas > 100 ||
        nilaiUTS < 0 || nilaiUTS > 100 ||
        nilaiUAS < 0 || nilaiUAS > 100
    ) {
        alert("Nilai harus berada di antara 0 sampai 100.");
        return;
    }

    const akhir =
        nilaiTugas * 0.20 +
        nilaiUTS * 0.35 +
        nilaiUAS * 0.45;

    let peringkat;
    let predikat;

    if (akhir >= 80) {
        peringkat = "A";
        predikat = "Sangat Baik";
    } else if (akhir >= 70) {
        peringkat = "B";
        predikat = "Baik";
    } else if (akhir >= 60) {
        peringkat = "C";
        predikat = "Cukup";
    } else if (akhir >= 50) {
        peringkat = "D";
        predikat = "Kurang";
    } else {
        peringkat = "E";
        predikat = "Sangat Kurang";
    }

    document.getElementById("nilaiAkhir").value =
        akhir.toFixed(2);

    document.getElementById("peringkat").value = peringkat;
    document.getElementById("predikat").value = predikat;
}

function resetNilai() {
    document.getElementById("tugas").value = "";
    document.getElementById("uts").value = "";
    document.getElementById("uas").value = "";
    document.getElementById("nilaiAkhir").value = "";
    document.getElementById("peringkat").value = "";
    document.getElementById("predikat").value = "";
}
