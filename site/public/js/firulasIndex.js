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
    divCad.left = "-60%"
}

function fecharLogin() {
    divLogin.left = "-60%"
}

function abrirCad() {
    divCad.left = "0%"
    divLogin.left = "-60%"
}

function fecharCad() {
    divCad.left = "-60%"
}






// Versiculo do dia 

function versiculoDia() {
    var versiculo = {
        mateus: ['Mateus 7:7 – “Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta”.', 'Mateus 28:19 – “Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo”.', 'Mateus 26:41 – “Vigiem e orem para que não caiam em tentação. O espírito está pronto, mas a carne é fraca.”'],
        romanos: ['Romanos 10:17 – “Consequentemente, a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo”.', 'Romanos 8:28 – “Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito”.', 'Romanos 12:2 – “Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus”.'],
        salmos: ['Salmos 37:5 – “Entregue o seu caminho ao Senhor; confie nEle, e Ele agirá”:', 'Salmo 126:5 – “Aqueles que semeiam com lágrimas, com cantos de alegria colherão”.', 'Salmo 122:1 – “Alegrei-me com os que me disseram: “Vamos à casa do Senhor!”'],
        joao: ['João 10:10 – “O ladrão vem apenas para roubar, matar e destruir; Eu vim para que tenham vida e a tenham plenamente”.', 'João 16:33 – “Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo”.', 'João 1:12 – “Contudo, aos que o receberam, aos que creram em seu nome, deu-lhes o direito de se tornarem filhos de Deus”.']
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