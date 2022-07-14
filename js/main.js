AOS.init();
const URLactual = window.location;

function hoverStyle(event) {
    event.addEventListener("mousemove", (e) => {
        const { x, y } = event.getBoundingClientRect();
        event.style.setProperty("--x", e.clientX - x);
        event.style.setProperty("--y", e.clientY - y);
    });
}

var shiny = document.querySelectorAll('.shiny');
shiny.forEach(function (shinyItem) {
    hoverStyle(shinyItem);
});

document.addEventListener("click", (e) => {
    if (e.target.closest("li a")) {
        localStorage.setItem('CatNovedad', "none");
    }
    if (e.target.closest(".formulario button") || e.target.closest("footer .part1 form button")) {
        localStorage.setItem('url-actual', `${URLactual}`);
    }
    if ($('section.thanks-page .top').length > 0) {
        var link = localStorage.getItem("url-actual");
        $('.top a').attr("href", link);
    }
})

MyApp = {
    scroll: {
        init: function () {
            window.addEventListener("scroll", function () {
                if (this.pageYOffset > 60) {
                    document.querySelector("header").classList.add("sticky");
                }
                else {
                    document.querySelector("header").classList.remove("sticky");
                }
            });
        }
    },
    labelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    email = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    tel = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!tel) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formaempresa")) {
                    document.querySelector(".formaempresa").classList.add("focusin");
                    document.querySelector(".formaempresa span").classList.add("animacion");
                } else {
                    document.querySelector(".formaempresa").classList.remove("focusin");
                    empresa = document.getElementById('name-empresa').value;
                    document.querySelector(".formaempresa span").classList.remove("animacion");
                    if (!empresa) {
                        document.querySelector(".formaempresa").classList.remove("ok");
                    } else {
                        document.querySelector(".formaempresa").classList.add("ok");
                    }
                }
                if (e.target.closest(".enviar")) {      
                    valorNombre = 0;
                    valorEmpresa = 0;
                    valorEmail = 0;
                    valorTelefono = 0;
                    valorCheckbox = 0;
                    if (!document.getElementById('name').value) {
                        document.querySelector(".formname span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorNombre = 1;
                    }
                    if (!document.getElementById('email').value) {
                        document.querySelector(".formcorreo span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmail = 1;
                    }
                    if (!document.getElementById('telephone').value) {
                        document.querySelector(".formtel span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorTelefono = 1;
                    }
                    if (!document.getElementById('name-empresa').value) {
                        document.querySelector(".formaempresa span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmpresa = 1;
                    }
                    if ($('#terminos').is(':checked')) {   
                        valorCheckbox = 1;                     
                    }else{
                        document.querySelector(".checkbox-box").classList.add("falto");
                    }
                    if (valorCheckbox * valorEmail * valorEmpresa * valorNombre * valorTelefono == 1) {
                        document.querySelector("form").submit();    
                        document.querySelector("form").reset();    
                    }                    
                }
            })
        }
    },
    trabajolabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    asunto = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!asunto) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    textarea = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!textarea) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formmensaje")) {
                    document.querySelector(".formmensaje").classList.add("focusin");
                    document.querySelector(".formmensaje span").classList.add("animacion");
                } else {
                    document.querySelector(".formmensaje").classList.remove("focusin");
                    email = document.getElementById('mensaje').value;
                    document.querySelector(".formmensaje span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formmensaje").classList.remove("ok");
                    } else {
                        document.querySelector(".formmensaje").classList.add("ok");
                    }
                }

                if (e.target.closest(".enviar")) {      
                    valorNombre = 0;
                    valorEmail = 0;
                    valorTelefono = 0;
                    valorMensaje = 0;
                    if (!document.getElementById('name').value) {
                        document.querySelector(".formname span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorNombre = 1;
                    }
                    if (!document.getElementById('email').value) {
                        document.querySelector(".formcorreo span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmail = 1;
                    }
                    if (!document.getElementById('telephone').value) {
                        document.querySelector(".formtel span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorTelefono = 1;
                    }
                    if (!document.getElementById('mensaje').value) {
                        document.querySelector(".formmensaje span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmpresa = 1;
                    }
                    if ($('#terminos').is(':checked')) {   
                        valorCheckbox = 1;                     
                    }else{
                        document.querySelector(".checkbox-box").classList.add("falto");
                    }
                    if (valorCheckbox * valorEmail * valorEmpresa * valorNombre * valorTelefono == 1) {
                        document.querySelector("form").submit();    
                        document.querySelector("form").reset();    
                    }                    
                }
            })
        }
    },
    contactpagelabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }
                if (e.target.closest(".formaempresa")) {
                    document.querySelector(".formaempresa").classList.add("focusin");
                    document.querySelector(".formaempresa span").classList.add("animacion");
                } else {
                    document.querySelector(".formaempresa").classList.remove("focusin");
                    email = document.getElementById('name-empresa').value;
                    document.querySelector(".formaempresa span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formaempresa").classList.remove("ok");
                    } else {
                        document.querySelector(".formaempresa").classList.add("ok");
                    }
                }
                if (e.target.closest(".formcargo")) {
                    document.querySelector(".formcargo").classList.add("focusin");
                    document.querySelector(".formcargo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcargo").classList.remove("focusin");
                    email = document.getElementById('cargo').value;
                    document.querySelector(".formcargo span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formcargo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcargo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    asunto = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!asunto) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    textarea = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!textarea) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formmensaje")) {
                    document.querySelector(".formmensaje").classList.add("focusin");
                    document.querySelector(".formmensaje span").classList.add("animacion");
                } else {
                    document.querySelector(".formmensaje").classList.remove("focusin");
                    email = document.getElementById('mensaje').value;
                    document.querySelector(".formmensaje span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formmensaje").classList.remove("ok");
                    } else {
                        document.querySelector(".formmensaje").classList.add("ok");
                    }
                }
                if (e.target.closest(".formmotivo select")) {
                    document.querySelector(".formmotivo").classList.add("open");
                    document.querySelector(".formmotivo span").classList.add("animacion");
                } else {
                    document.querySelector(".formmotivo").classList.remove("open");
                    document.querySelector(".formmotivo span").classList.remove("animacion");
                }

                if (e.target.closest(".formasunto select")) {
                    document.querySelector(".formasunto").classList.add("open");
                    document.querySelector(".formasunto span").classList.add("animacion");
                } else {
                    document.querySelector(".formasunto").classList.remove("open");
                    document.querySelector(".formasunto span").classList.remove("animacion");
                }

                if (e.target.closest(".enviar")) {      
                    valorNombre = 0;
                    valorEmpresa = 0;
                    valorCargo = 0;
                    valorEmail = 0;
                    valorTelefono = 0;
                    valorCheckbox = 0;
                    valorMotivo = 0;
                    valorAsunto = 0;
                    valorMensaje = 0;   
                    let opcionMotivo = document.getElementById('motivo').value;
                    let opcionAsunto = document.getElementById('asunto').value;
                    console.log(opcionMotivo);
                    if (!document.getElementById('name').value) {
                        document.querySelector(".formname span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorNombre = 1;
                    }
                    if (!document.getElementById('cargo').value) {
                        document.querySelector(".formcargo span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorCargo = 1;
                    }
                    if (!document.getElementById('email').value) {
                        document.querySelector(".formcorreo span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmail = 1;
                    }
                    if (!document.getElementById('telephone').value) {
                        document.querySelector(".formtel span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorTelefono = 1;
                    }
                    if (!document.getElementById('name-empresa').value) {
                        document.querySelector(".formaempresa span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmpresa = 1;
                    }
                    if (!document.getElementById('mensaje').value) {
                        document.querySelector(".formmensaje span").classList.add("falto");
                        e.preventDefault();              
                    }else{
                        valorEmpresa = 1;
                    }
                    if (opcionMotivo == '0') {                        
                        document.querySelector(".formmotivo span").classList.add("falto");
                    }
                    if (opcionAsunto == '0') {                        
                        document.querySelector(".formasunto span").classList.add("falto");
                    }
                    if ($('#terminos').is(':checked')) {   
                        valorCheckbox = 1;                     
                    }else{
                        document.querySelector(".checkbox-box").classList.add("falto");
                    }
                    if (valorCheckbox * valorCargo * valorEmail * valorEmpresa * valorNombre * valorTelefono == 1) {
                        document.querySelector("form").submit();    
                        document.querySelector("form").reset();    
                    }
                    
                }
            })
        }
    },
    footerlabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formemail")) {
                    document.querySelector(".formemail").classList.add("focusin");
                    // document.querySelector(".form-group span").classList.add("animacion");
                } else {
                    document.querySelector(".formemail").classList.remove("focusin");
                    email2 = document.getElementById('email2').value;
                    // document.querySelector(".form-group span").classList.remove("animacion");
                    if (!email2) {
                        document.querySelector(".formemail").classList.remove("ok");
                    } else {
                        document.querySelector(".formemail").classList.add("ok");
                    }
                }
            })
        }
    },
    slider_novedades_home: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".slider-novedades .item .info a") || e.target.closest(".main-article .category a")) {
                    const titleService = e.target.textContent;
                    localStorage.setItem('CatNovedad', `${titleService}`);
                }
            })
        }
    },
    category: {
        init: function () {
            document.querySelector("#categorias li a").classList.add("select");
            $(`.destacado`).hide();
            var categoriaNovedad = localStorage.getItem("CatNovedad");
            if (categoriaNovedad == "none") {
                document.querySelector("#categorias li a").classList.add("select");
            }
            let listaTitle = [];
            const enlaces = document.querySelectorAll('#categorias a');
            for (let i = 0; i < enlaces.length; i++) {
                textoitem = enlaces[i].textContent;
                listaTitle.push(textoitem);
            }
            if (listaTitle.includes(categoriaNovedad)) {
                for (let y = 0; y < enlaces.length; y++) {
                    if (categoriaNovedad === enlaces[y].textContent) {
                        document.querySelector("#categorias a").classList.remove("select");
                        enlaces[y].classList.add('select')
                    }
                }
            }

            $('.items-category .item').hide();
            const categoryMain = document.querySelector('#categorias a.select').innerHTML;
            console.log(categoryMain);
            if (categoryMain === "Todo") {
                $(`.item`).show(0);
            } else {
                $(`.item[data-categoria="${categoryMain}"]`).show(0);
            }

            if (categoryMain === "Caso de éxito") {
                $(`.destacado`).show();
            }

            // enlaces = document.querySelectorAll('#categorias a');//original
            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    var categoria = evento.target.innerHTML; /* para saber la categoria del menu donde estas*/
                    console.log(categoria);
                    $(`.item`).not(`[data-categoria="${categoria}"]`).hide();
                    $(`.item[data-categoria="${categoria}"]`).show();
                    $(`.destacado`).hide();
                    if (categoria === "Todo") {
                        $(`.item`).show();
                    }
                    if (categoria === "Caso de éxito") {
                        $(`.destacado`).show();
                    }
                })
            })
        }
    },
    scrollRedes: {
        init: function () {
            $(document).ready(function (argument) {
                // AOS.init();
                if ($('.scroll').length > 0) {
                    $(".scroll").stick_in_parent({
                        offset_top: 180
                    });
                }
            })
        }
    },
    slider_aliados: {
        init: function () {
            $('.marquee-with-options').marquee({
                speed: 30000,
                gap: 50,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
            });
        }
    },
}

if ($('header').length > 0) {
    MyApp.scroll.init();
}

if ($('.home-servicios-interna').length > 0) {
    MyApp.labelcontactopage.init();
}

if ($('.trabajo').length > 0) {
    MyApp.trabajolabelcontactopage.init();
}

if ($('.contact-page').length > 0) {
    MyApp.contactpagelabelcontactopage.init();
}

if ($('footer .form-group').length > 0) {
    MyApp.footerlabelcontactopage.init();
}

if ($('.categorias').length > 0) {
    MyApp.category.init();
}

if ($('.main-article .redes').length > 0) {
    MyApp.scrollRedes.init();
}

if ($('.slider-novedades').length > 0 || $('.main-article').length > 0) {
    MyApp.slider_novedades_home.init();
}

if ($('.aliados').length > 0) {
    MyApp.slider_aliados.init();
}

$('.slider-empresas').slick({
    infinite: true,
    speed: 300,
    dots: false,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        // {
        //     breakpoint: 1700,
        //     settings: {
        //         slidesToShow: 3.3,/* 1.94 */
        //         slidesToScroll: 1,
        //     }
        // }
    ]
});

$('.slider-novedades').slick({
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 3.3,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1611,
            settings: {
                slidesToShow: 3,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1441,
            settings: {
                slidesToShow: 3.03,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1305,
            settings: {
                slidesToShow: 3,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 2.9,/* 1.94 */
                slidesToScroll: 1,
            }
        }
        ,
        {
            breakpoint: 1287,
            settings: {
                slidesToShow: 2,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2.5,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,/* 1.94 */
                slidesToScroll: 1,
            }
        }
    ]
});

$('.slider-competencias').slick({
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1601,
            settings: {
                slidesToShow: 3,/* 1.94 */
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});

