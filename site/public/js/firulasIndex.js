// <!-- NavBar -->

var numBarra = 1
var barra = document.getElementById('novaNav').style
function menuEscondidaNova() {
    if (numBarra == 1) {

        barra.left = "0"

        numBarra++
    }
}

function fecharEscondidaNova() {
    if (numBarra != 1) {
        barra.left = "-100%"

        numBarra = 1
    }
}

















// <!-- Mudar Tema -->

var numTema = 1
function mudarTema() {
    var btn = document.getElementById('button-tema')
    var body = document.body.style
    var h1 = document.getElementById('titulo-nav').style
    var txt3 = document.getElementById('text-existem').style
    var spn3 = document.getElementById('span-existem').style
    var card1 = document.getElementById('card-um').style
    var card2 = document.getElementById('card-dois').style
    var card3 = document.getElementById('card-tres').style
    var textcard1 = document.getElementById('text-card-um').style
    var textcard2 = document.getElementById('text-card-dois').style
    var textcard3 = document.getElementById('text-card-tres').style
    var caixa = document.getElementById('caixa').style
    var txtInfo1 = document.getElementById('info-1').style
    var txtInfo2 = document.getElementById('info-2').style
    var txtInfo3 = document.getElementById('info-3').style
    var txtInfo4 = document.getElementById('info-4').style
    var txtInfo5 = document.getElementById('info-5').style
    var tituloQuinta = document.getElementById('titulo-quinta').style
    var navBarEscondida = document.getElementById('novaNav').style
    var telaLogin = document.getElementById('div-login').style
    var telaCad = document.getElementById('div-cadastro').style
    var daniel = document.getElementById('daniel_bomAmigo').style

    if (numTema == 1) {
        body.backgroundColor = "#383838"
        btn.style.transform = "rotate(540deg)"
        h1.color = "#f5f5f5"
        txt3.color = "#f5f5f5"
        spn3.color = "#f5f5f5"
        card1.backgroundColor = "#d5d5d5"
        card2.backgroundColor = "#d5d5d5"
        card3.backgroundColor = "#d5d5d5"
        textcard1.color = "#383838"
        textcard2.color = "#383838"
        textcard3.color = "#383838"
        caixa.backgroundColor = "#383838"
        txtInfo1.color = "#f5f5f5"
        txtInfo2.color = "#f5f5f5"
        txtInfo3.color = "#f5f5f5"
        txtInfo4.color = "#f5f5f5"
        txtInfo5.color = "#f5f5f5"
        tituloQuinta.color = "#f5f5f5"
        navBarEscondida.backgroundColor = "#383838"
        telaLogin.backgroundColor = "#383838"
        telaCad.backgroundColor = "#383838"
        daniel.color= "#f5f5f5"

        numTema++
    } else {
        body.backgroundColor = "#f5f5f5"
        btn.style.transform = "rotate(0deg)"
        h1.color = "#383838"
        txt3.color = "#383838"
        spn3.color = "#383838"
        card1.backgroundColor = "#383838"
        card2.backgroundColor = "#383838"
        card3.backgroundColor = "#383838"
        textcard1.color = "#f5f5f5"
        textcard2.color = "#f5f5f5"
        textcard3.color = "#f5f5f5"
        caixa.backgroundColor = "#f5f5f5"
        txtInfo1.color = "#383838"
        txtInfo2.color = "#383838"
        txtInfo3.color = "#383838"
        txtInfo4.color = "#383838"
        txtInfo5.color = "#383838"
        tituloQuinta.color = "#383838"
        navBarEscondida.backgroundColor = "#f5f5f5"
        telaLogin.backgroundColor = "#f5f5f5"
        telaCad.backgroundColor = "#f5f5f5"
        daniel.color= "#bb3838"

        numTema = 1
    }
}














// <!-- Nav escondida -->

var numBar = 1
var escond = document.getElementById('div-escondida')
function menuEscondida() {

    if (numBar == 1) {
        escond.style.top = "0"

        numBar++

    }
}

function sumirEscondida() {

    if (numBar != 1) {
        escond.style.top = "-500%"

        numBar = 1
    }
}




















// <!-- Scroll Reveal -->

ScrollReveal().reveal('.reveal1',
    {
        duration: 900,
        reset: true
    }
);

ScrollReveal().reveal('.reveal2',
    {
        duration: 2300,
        reset: true,
    }
);

ScrollReveal().reveal('.reveal3',
    {
        duration: 3300,
        reset: true
    }
);

ScrollReveal().reveal('.joao',
    {
        distance: '300px',
        duration: 1200,
        reset: true,
        origin: 'right'
    }
);

ScrollReveal().reveal('.pedro',
    {
        distance: '300px',
        duration: 1200,
        reset: true,
        origin: 'left'
    }
);
















// <!-- Carousel -->

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// <!-- Mudar aba -->

var numAba = 1
var principal = document.getElementById('div-principal')
var curiosidades = document.getElementById('div-curiosidades')
var link1 = document.getElementById('um-link')
var link2 = document.getElementById('dois-link')

function curiosidade() {

    principal.style.display = "none"
    curiosidades.style.display = "block"
    link1.classList.remove("aqui")
    link2.classList.add("aqui")
    // link2.style.opacity = "0.4"
    // link1.style.opacity = "1"
}

function ParaInicial() {
    principal.style.display = "block"
    curiosidades.style.display = "none"
    link1.classList.add("aqui")
    link2.classList.remove("aqui")
    // link1.style.opacity = "0.4"
    // link2.style.opacity = "1"
}


















// <!-- Modal -->

var numModal = 1
var cortinas = document.getElementById('div-cortinas').style
var portas = document.getElementById('div-portas').style
var idioma = document.getElementById('div-idioma').style

function abrirModal1() {
    cortinas.display = "flex"

    numModal++
}
function fecharModal1() {
    cortinas.display = "none"

    numModal++
}

// Segundo
function abrirModal2() {
    portas.display = "flex"

    numModal++
}
function fecharModal2() {
    portas.display = "none"

    numModal++
}

// Terceiro
function abrirModal3() {
    idioma.display = "flex"

    numModal++
}
function fecharModal3() {
    idioma.display = "none"

    numModal++
}



















// <!-- Chamando o login e o Cadastrar -->

var numLogin = 1
var numCad = 1
var divLogin = document.getElementById('div-login').style
var divCad = document.getElementById('div-cadastro').style

function abrirLogin() {
    divLogin.left = "0"
    divCad.left = "-100%"
}

function fecharLogin() {
    divLogin.left = "-100%"
}

function abrirCad() {
    divCad.left = "0%"
    divLogin.left = "-100%"
}

function fecharCad() {
    divCad.left = "-100%"
}






// Versiculo do dia 

function versiculoDia() {
    var versiculo = {
        mateus: ['Mateus 7:7 ??? ???Pe??am, e ser?? dado; busquem, e encontrar??o; batam, e a porta ser?? aberta???.', 'Mateus 28:19 ??? ???Portanto, v??o e fa??am disc??pulos de todas as na????es, batizando-os em nome do Pai e do Filho e do Esp??rito Santo???.', 'Mateus 26:41 ??? ???Vigiem e orem para que n??o caiam em tenta????o. O esp??rito est?? pronto, mas a carne ?? fraca.???'],
        romanos: ['Romanos 10:17 ??? ???Consequentemente, a f?? vem por se ouvir a mensagem, e a mensagem ?? ouvida mediante a palavra de Cristo???.', 'Romanos 8:28 ??? ???Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu prop??sito???.', 'Romanos 12:2 ??? ???N??o se amoldem ao padr??o deste mundo, mas transformem-se pela renova????o da sua mente, para que sejam capazes de experimentar e comprovar a boa, agrad??vel e perfeita vontade de Deus???.'],
        salmos: ['Salmos 37:5 ??? ???Entregue o seu caminho ao Senhor; confie nEle, e Ele agir?????:', 'Salmo 126:5 ??? ???Aqueles que semeiam com l??grimas, com cantos de alegria colher??o???.', 'Salmo 122:1 ??? ???Alegrei-me com os que me disseram: ???Vamos ?? casa do Senhor!???'],
        joao: ['Jo??o 10:10 ??? ???O ladr??o vem apenas para roubar, matar e destruir; Eu vim para que tenham vida e a tenham plenamente???.', 'Jo??o 16:33 ??? ???Eu disse essas coisas para que em mim voc??s tenham paz. Neste mundo voc??s ter??o afli????es; contudo, tenham ??nimo! Eu venci o mundo???.', 'Jo??o 1:12 ??? ???Contudo, aos que o receberam, aos que creram em seu nome, deu-lhes o direito de se tornarem filhos de Deus???.']
    }
    var aleatorio1 = parseInt(1 + Math.random() * 4)
    var aleatorio2 = parseInt(Math.random() * 2)
    var escolhido

    if (aleatorio1 == 1) {

        versiculo_dia.innerHTML = `${versiculo.joao[aleatorio2]}`

    } else if (aleatorio1 == 2) {

        versiculo_dia.innerHTML = `${versiculo.mateus[aleatorio2]}`

    } else if (aleatorio1 == 3) {

        versiculo_dia.innerHTML = `${versiculo.romanos[aleatorio2]}`

    } else {

        versiculo_dia.innerHTML = `${versiculo.salmos[aleatorio2]}`
    }

}