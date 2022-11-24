function postarBio() {
    var texto = bio_por.value

    bio.innerHTML = `<p><b>Bio: </b>${texto}</p><span class="material-symbols-outlined" onclick="mostrarAdicionar()">
                edit
            </span>`
    document.getElementById('div_adicionar_bio').style.display = 'none'

    setTimeout(() => {

    }, 500);
}

function mostrarAdicionar() {
    document.getElementById('div_adicionar_bio').style.display = 'flex'
}

var divPublicacaoNew = document.getElementById('div_publicacao').style
var divMuralnew = document.getElementById('div_mural').style

function chamarPubli() {
    divPublicacaoNew.top = '0'
    divMuralnew.top = '50%'
    divMuralnew.height = '50vh'  
}

function esconderPubloi() {
    divPublicacaoNew.top = '-50%'
    divMuralnew.top = '0' 
    divMuralnew.height = '100vh'
}