function hitungSegitiga() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var hitung = document.getElementById("hitung").value;

    var hasil;
    var rumus;

    if (hitung === "keliling") {
        hasil = hitungKelilingSegitiga(alas, tinggi);
        var sisiMiring = Math.sqrt(alas**2 + tinggi**2); // Menghitung sisi miring dengan teorema Pythagoras
        rumus = "Keliling = " + alas + "+" + tinggi + "+" + sisiMiring;
    } else {
        hasil = hitungLuasSegitiga(alas, tinggi);
        rumus = "Luas = 1/2 x " + alas + " x " + tinggi
    }

    document.getElementById("hasil").innerHTML = hasil + " Cm";
    document.getElementById("rumus").innerHTML = rumus;
}

function hitungKelilingSegitiga(alas, tinggi) {
    var sisiMiring = Math.sqrt(alas * alas + tinggi * tinggi);
    return alas + tinggi + sisiMiring;
}

function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function validateAndHitung() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;

    if (alas === "" && tinggi === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lengkapi alas dan tinggi.'
        });
    } else if (alas === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lengkapi alas.'
        });
    } else if (tinggi === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lengkapi tinggi.'
        });
    } else {
        hitungSegitiga();
    }
}

function resetForm() {
    document.getElementById("segitigaForm").reset();
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("rumus").innerHTML = "";
}