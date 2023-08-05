function belanjaSekarang(){
    window.location.href='toko.html'
}

function validasiLogin(){
    let nama = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(nama=="" || password==""){
        alert("Anda harus mengisi data dengan lengkap!")
    } else{
        window.location.href='index.html'
    }
}