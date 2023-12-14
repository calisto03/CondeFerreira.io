 const url = "expedicoes_conde_de_ferreira.csv";
let abrir,fechar;
let tras;
const percursos = ['partida', 'intermedio_1','intermedio_2', 'intermedio_3', 'destino'];
let escalaPessoasEscravizadas;
let info_existentes;
let info_demolidas;
let info_hospital;
let info_vida;
let mortalidade_navios = [];
let last_depart = "";
let last_depart_path = "";


d3.csv(url, function (d) {
    return {
        navio: String(d.Navio),
        tipologia: String(d.Tipologia),
        armador: String(d.Armador),
        capitao: String(d.Capitao),
        partida: String(d.Partida),
        intermedio_1: String(d.Intermedio_1),
        intermedio_2: String(d.Intermedio_2),
        intermedio_3: String(d.Intermedio_3),
        destino: String(d.Destino),
        data_partida:String(d.Data_partida),
        data_destino: String(d.Data_destino),
        escravos_p: String(d.Escravos_saida),
        escravos_d: String(d.Escravos_destino),
        mortes: parseInt(d.Numero_mortes),
        taxa: parseFloat(d.Taxa_mortalidade),

    };



}).then(desenhaGrafico);


//função de abrir o menu
function abrirMenu(){
    abrir = document.querySelector(".hamburger");
    if(abrir){
        abrir.addEventListener("click", function(){
            if (document.querySelector(".menu_aberto").style.marginRight === -100 + "%") {
                document.querySelector(".menu_aberto").style.marginRight = 0 + "%";
            } else {
                document.querySelector(".menu_aberto").style.marginRight = -100 + "%";
            }
        });
    }}



//abrir e fechar a legenda do destino
function abrirLegenda_destino(){
    abrir_leg_des = document.querySelector(".legendaDestino");
    if(abrir_leg_des){
        abrir_leg_des.addEventListener("click", function(){
            if (document.querySelector("#legenda_destino").style.marginRight === -400 + "px") {
                document.querySelector("#legenda_destino").style.marginRight = 0 + "px" ;
            } else {
                document.querySelector("#legenda_destino").style.marginRight = -400 + "px";
            }
        });
    }}





//abrir e fechar o Filtro na página do tráfico

function abrirFiltro(){
    abrir_filtro = document.querySelector(".palavra_filtro");
    if(  abrir_filtro){
        abrir_filtro.addEventListener("click", function(){
            if (document.querySelector(".filtro").style.marginRight === -495 + "px") {
                document.querySelector(".filtro").style.marginRight = 0 + "px";
            } else {
                document.querySelector(".filtro").style.marginRight = -495 + "px";
            }
        });
    }}


//abrir pop-up de ajuda no index

function abrirPopIndex(){
    PopIndex = document.querySelector(".ajuda_abrir_vida");
    if(  PopIndex){
        PopIndex.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none"|| document.querySelector(".ajuda").style.display === "") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });
    }}


//abrir pop-up de ajuda no destino

function abrirPopDestino(){
    PopDestino = document.querySelector(".ajuda_abrir_destino");
    if(PopDestino){
        PopDestino.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none"|| document.querySelector(".ajuda").style.display === "") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });
    }}

//abrir pop-up de ajuda no tráfico

function abrirPopTrafico(){
    PopTrafico = document.querySelector(".ajuda_abrir_trafico");
    if(PopTrafico){
        PopTrafico.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none"|| document.querySelector(".ajuda").style.display === "") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });
    }}

//abrir pop-up de ajuda das mini visualizações

function abrirPopMini(){
    PopMini = document.querySelector(".ajuda_abrir_mini");
    if(PopMini){
        PopMini.addEventListener("click", function(){
            if (document.querySelector(".ajuda#mini").style.display === "none") {
                document.querySelector(".ajuda#mini").style.display = "block";
            } else {
                document.querySelector(".ajuda#mini").style.display = "none";
            }
        });
    }}

//abrir pop-up de ajuda no Restante

function abrirPopRestante(){
    PopRestante = document.querySelector(".ajuda_abrir_restante");
    if( PopRestante){
        PopRestante.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none"|| document.querySelector(".ajuda").style.display === "") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });
    }}


//abrir pop-up 1 de detalhes na analise detalhada
function abrirDetAnalise_um(){
    Det_um = document.querySelector(".mini#mini_um");
    if(  Det_um){
        Det_um.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_um").style.display === "none"|| document.querySelector(".detalhes#det_um").style.display === "") {
                document.querySelector(".detalhes#det_um").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_um").style.display = "none";
            }
        });
    }}
//abrir pop-up 2 de detalhes na analise detalhada
function abrirDetAnalise_dois(){
    Det_dois = document.querySelector(".mini#mini_dois");
    if(  Det_dois){
        Det_dois.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_dois").style.display === "none" || document.querySelector(".detalhes#det_dois").style.display === "") {
                document.querySelector(".detalhes#det_dois").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_dois").style.display = "none";
            }
        });
    }}
//abrir pop-up 3 de detalhes na analise detalhada
function abrirDetAnalise_tres(){
    Det_tres = document.querySelector(".mini#mini_tres");
    if(  Det_tres){
        Det_tres.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_tres").style.display === "none"|| document.querySelector(".detalhes#det_tres").style.display === "")  {
                document.querySelector(".detalhes#det_tres").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_tres").style.display = "none";
            }
        });
    }}

//abrir pop-up 4 de detalhes na analise detalhada
function abrirDetAnalise_quatro(){
    Det_quatro = document.querySelector(".mini#mini_quatro");
    if(  Det_quatro){
        Det_quatro.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_quatro").style.display === "none"|| document.querySelector(".detalhes#det_quatro").style.display === "")  {
                document.querySelector(".detalhes#det_quatro").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_quatro").style.display = "none";
            }
        });
    }}
//abrir pop-up 5 de detalhes na analise detalhada
function abrirDetAnalise_cinco(){
    Det_cinco = document.querySelector(".mini#mini_cinco");
    if(  Det_cinco){
        Det_cinco.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_cinco").style.display === "none"|| document.querySelector(".detalhes#det_cinco").style.display === "")  {
                document.querySelector(".detalhes#det_cinco").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_cinco").style.display = "none";
            }
        });
    }}

//abrir pop-up 6 de detalhes na analise detalhada
function abrirDetAnalise_seis(){
    Det_seis = document.querySelector(".mini#mini_seis");
    if(  Det_seis){
        Det_seis.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_seis").style.display === "none"|| document.querySelector(".detalhes#det_seis").style.display === "")  {
                document.querySelector(".detalhes#det_seis").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_seis").style.display = "none";
            }
        });
    }}


//função de fechar o menu
function fecharMenu(){
    fechar = document.querySelector(".cruz");
    if(fechar){
        fechar.addEventListener("click", function(){
            if (document.querySelector(".menu_aberto").style.marginRight === 0 + "%" || document.querySelector(".menu_aberto").style.display === "")  {
                document.querySelector(".menu_aberto").style.marginRight = -100 + "%";
            } else {
                document.querySelector(".menu_aberto").style.marginRight = 0 + "%";
            }
        });

    }}

//fechar pop-up de ajuda no index
function fecharPopIndex(){
    fPopIndex = document.querySelector("#info_ajuda_img");
    if( fPopIndex){
        fPopIndex.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });

    }}



//fechar pop-up tooltip do destino
function fecharPopDestino(){
    fPopDest = document.querySelector("#info_tooltip_img");
    if( fPopDest){
        fPopDest.addEventListener("click", function(){
            if (document.querySelector("#div_tooltip.hidden").style.display === "none") {
                document.querySelector("#div_tooltip.hidden").style.display = "block";
            } else {
                document.querySelector("#div_tooltip.hidden").style.display = "none";
            }
        });

    }}

//fechar pop-up ajuda do destino
function fecharPopDestino_ajuda(){
    fPopDestino = document.querySelector("#info_ajuda_img_destino");
    if( fPopDestino){
        fPopDestino.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });

    }}

//fechar pop-up ajuda do destino
function fecharPopDestino_hospital(){
    fPopDestino_hosp = document.querySelector("#info_tooltip_img_hospital");
    if( fPopDestino_hosp){
        fPopDestino_hosp.addEventListener("click", function(){
            if (document.querySelector("#div_tooltip_hospital").style.display === "none") {
                document.querySelector("#div_tooltip_hospital").style.display = "block";
            } else {
                document.querySelector("#div_tooltip_hospital").style.display = "none";
            }
        });

    }}

//fechar pop-up ajuda do trafico
function fecharPopTrafico(){
    fPopTrafico = document.querySelector("#info_ajuda_img_trafico");
    if( fPopTrafico){
        fPopTrafico.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });

    }}

//fechar pop-up ajuda dos mini
function fecharPopMini(){
    fPopMini = document.querySelector("#info_ajuda_img_mini");
    if( fPopMini){
        fPopMini.addEventListener("click", function(){
            if (document.querySelector(".ajuda#mini").style.display === "none") {
                document.querySelector(".ajuda#mini").style.display = "block";
            } else {
                document.querySelector(".ajuda#mini").style.display = "none";
            }
        });

    }}

//função de fechar o menu pop up restante
function fecharPopRestante(){
    fPopRestante = document.querySelector("#info_ajuda_img_restante");
    if(fPopRestante){
        fPopRestante.addEventListener("click", function(){
            if (document.querySelector(".ajuda").style.display === "none") {
                document.querySelector(".ajuda").style.display = "block";
            } else {
                document.querySelector(".ajuda").style.display = "none";
            }
        });

    }}

//fechar pop-up de detalhe 1 da analise detalhada
function fecharDetAnalise_um(){
    fDet_um = document.querySelector("#detalhe_ajuda_img_um");
    if( fDet_um){
        fDet_um.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_um").style.display === "none") {
                document.querySelector(".detalhes#det_um").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_um").style.display = "none";
            }
        });

    }}

//fechar pop-up de detalhe 2 da analise detalhada
function fecharDetAnalise_dois(){
    fDet_dois = document.querySelector("#detalhe_ajuda_img_dois");
    if( fDet_dois){
        fDet_dois.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_dois").style.display === "none") {
                document.querySelector(".detalhes#det_dois").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_dois").style.display = "none";
            }
        });

    }}


//fechar pop-up de detalhe 3 da analise detalhada
function fecharDetAnalise_tres(){
    fDet_tres = document.querySelector("#detalhe_ajuda_img_tres");
    if( fDet_tres){
        fDet_tres.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_tres").style.display === "none") {
                document.querySelector(".detalhes#det_tres").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_tres").style.display = "none";
            }
        });

    }}

//fechar pop-up de detalhe 4 da analise detalhada
function fecharDetAnalise_quatro(){
    fDet_quatro = document.querySelector("#detalhe_ajuda_img_quatro");
    if( fDet_quatro){
        fDet_quatro.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_quatro").style.display === "none") {
                document.querySelector(".detalhes#det_quatro").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_quatro").style.display = "none";
            }
        });

    }}

//fechar pop-up de detalhe 5 da analise detalhada
function fecharDetAnalise_cinco(){
    fDet_cinco = document.querySelector("#detalhe_ajuda_img_cinco");
    if( fDet_cinco){
        fDet_cinco.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_cinco").style.display === "none") {
                document.querySelector(".detalhes#det_cinco").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_cinco").style.display = "none";
            }
        });

    }}

//fechar pop-up de detalhe 6 da analise detalhada
function fecharDetAnalise_seis(){
    fDet_seis = document.querySelector("#detalhe_ajuda_img_seis");
    if( fDet_seis){
        fDet_seis.addEventListener("click", function(){
            if (document.querySelector(".detalhes#det_seis").style.display === "none") {
                document.querySelector(".detalhes#det_seis").style.display = "block";
            } else {
                document.querySelector(".detalhes#det_seis").style.display = "none";
            }
        });

    }}



//função para voltar para trás nas páginas;
function paraTras(){
    tras=document.querySelector(".seta");
    if(tras){
        tras.addEventListener("click",function (){
            history.go(-1);

        });
    }}

//Função que desenha o gráfico----------------------------------------------------------------------
function desenhaGrafico(d) {

    d3.json('info_existentes.json', d3.autoType()).then(d => info_existentes = d);
    d3.json('info_demolidas.json', d3.autoType()).then(d => info_demolidas = d);
    d3.json('info_hospital.json', d3.autoType()).then(d => info_hospital = d);
    d3.json('info_vida.json', d3.autoType()).then(d => info_vida = d);



    abrirMenu();
    fecharMenu();
    paraTras();
    abrirFiltro();
    abrirLegenda_destino();
    abrirPopIndex();
    fecharPopIndex();
    abrirPopDestino();
    fecharPopDestino();
    fecharPopDestino_ajuda();
    abrirPopTrafico();
    fecharPopTrafico();
    abrirPopMini();
    fecharPopMini();
    abrirPopRestante();
    fecharPopRestante();
    abrirDetAnalise_um();
    abrirDetAnalise_dois();
    abrirDetAnalise_tres();
    abrirDetAnalise_quatro();
    abrirDetAnalise_cinco();
    abrirDetAnalise_seis();
    fecharDetAnalise_um();
    fecharDetAnalise_dois();
    fecharDetAnalise_tres();
    fecharDetAnalise_quatro();
    fecharDetAnalise_cinco();
    fecharDetAnalise_seis();
    fecharPopDestino_hospital();

    console.log(d);
//Obter valores do mouseX e mouseY para as interações
    var x = null;
    var y = null;
    document.addEventListener('mousemove', onMouseUpdate, false);

//Atualização dos valores x e y para a posição do rato
    function onMouseUpdate(e) {
        x = e.pageX;
        y = e.pageY;
        //console.log(x, y);
    }
//redimensionamento dos valores utilizados na visualização de pessoas escravizadas
    escalaPessoasEscravizadas = d3.scaleLinear()
        .domain([163, 193662])
        .range([5,30]);
    escalaPessoasEscravizadas.clamp(true);

    console.log(escalaPessoasEscravizadas);

    //redimensionamento dos valores utilizados nos Navios
    escalaNavios = d3.scaleLinear()
        .domain([1, 12])
        .range([1.1, 2]);
    escalaNavios.clamp(true);

    console.log(escalaNavios);


    //redimensionamento dos valores utilizados nos Capitaes
    escalaCapitaes = d3.scaleLinear()
        .domain([1, 3])
        .range([1.1, 1.5]);
    escalaCapitaes.clamp(true);

    console.log(escalaCapitaes);

    //redimensionamento dos valores utilizados nos Capitaes
    escalaBarcos = d3.scaleLinear()
        .domain([1, 19])
        .range([1, 2]);
    escalaBarcos.clamp(true);

    console.log(escalaBarcos);

    //redimensionamento dos valores utilizados nas Mortes
    escalaMort = d3.scaleLinear()
        .domain([17, 371])
        .range([1, 2]);
    escalaMort.clamp(true);

    console.log(escalaMort);

    //redimensionamento dos valores utilizados nas Datas
    escalaDat = d3.scaleLinear()
        .domain([1, 13])
        .range([0.9, 2]);
    escalaDat.clamp(true);

    console.log(escalaDat);

    //Médias da mortes de cada tipo de navio
    function mediamortes(navio) {
        let mediamortes = d3.sum(d.filter(function (d) {

            return d.navio === navio
        }), function (d) {
            return d.mortes
        })
        return mediamortes;
    }



    tejo = mediamortes('Tejo');
    mercantil = mediamortes('Mercantil');
    regeneradora = mediamortes('Regeneradora');
    velha = mediamortes('Velha de Dio');
    ativo = mediamortes('Activo');
    torquato = mediamortes('Torquato');
    orestes = mediamortes('Orestes');
    primoroso = mediamortes('Primoroso Divino');
    economia = mediamortes('Economia');
    eugenia = mediamortes('Feliz Eugénia');
    venus = mediamortes('Venus');
    amalia = mediamortes('Amália');

    mortalidade_navios = [];

    mortalidade_navios.push(tejo, mercantil, regeneradora, velha, ativo, torquato, orestes, primoroso, economia, eugenia,venus,amalia);
    console.log(mortalidade_navios);





    function mouseOver_vida(i,value){
    d3.select("#tooltip_vida")
        .style("left", x + 7 + "px")
        .style("top", y + 7 + "px");

    let vida_conde = info_vida.filter(d => d.id === value.id)[0];

    d3.select("#tooltip_vida").selectAll("p")
        .text(vida_conde.texto);

    d3.select("#tooltip_vida.hidden")
        .style("display", "block");

}
    //tooltip-----------------------------------------------------------------------------------------------
    function mouseOver_trafico(i, value) {


        var elemento= i.toElement;
        console.log(elemento);
       //console.log(d3.select("#"+elemento.id).attr('value'));
        //const indice = i['path'][1].className.baseVal.split('_')[1];
        //dados_agregados.forEach((value,path) => {
        d3.select("#tooltip").select("h3")
            .text("Pessoas Escravizadas por Rota")

            d3.select("#tooltip").selectAll("p")
                .text(d3.select("#"+elemento.id).attr('value')+ " pessoas escravizadas");


        d3.select("#tooltip")
            .style("left", x + 7 + "px")
            .style("top", y + 7 + "px");



        d3.select("#tooltip.hidden")
            .style("display", "block");


    }



//tooltip escolas existentes
function mouseExistentes(i, value){
    d3.select("#tooltip_existentes")
        .style("left", x+ 7 + "px")
        .style("top", y+ 7 + "px");

    let existentes = info_existentes.filter(d => d.id === value.id)[0];

    d3.select("#tooltip_existentes").selectAll('p')
        .text("Localização:"+ " "+existentes.titulo);

    console.log(existentes.titulo);

    d3.select("#tooltip_existentes.hidden")
        .style("display", "block");


}

//tooltip escolas demolidas
function mouseDemolidas(i, value){
    d3.select("#tooltip_demolidas")
        .style("left", x+ 7 + "px")
        .style("top", y+ 7 + "px");


    let demolidas = info_demolidas.filter(d => d.id === value.id)[0];

    d3.select("#tooltip_demolidas").selectAll('p')
        .text("Localização:"+ " "+demolidas.titulo);

    d3.select("#tooltip_demolidas.hidden")
        .style("display", "block");
}

//tooltip hospital
    function mouseHospital(i, value){
        d3.select("#tooltip_hospital")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        console.log(info_hospital.titulo);

        d3.select("#tooltip_hospital").selectAll('p')
            .text("Localização:"+ " "+ "Porto");

        d3.select("#tooltip_hospital.hidden")
            .style("display", "block");
    }

    function mouseViagensNavio (i, value){
        d3.select("#tooltipViagensNavio")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        console.log(value.nome);

        d3.select("#tooltipViagensNavio").selectAll("p")
            .text(value[0]);

        d3.select("#tooltipViagensNavio.hidden")
            .style("display", "block");
    }

    function mouseSemPes (i){
        d3.select("#tooltipSemPess")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        console.log(i);
        d3.select("#tooltipSemPess").selectAll("p")
            .text("Sem pessoas escravizadas na embarcação");

        d3.select("#tooltipSemPess.hidden")
            .style("display", "block");
    }



    function mouseCapitaes (i, value){
        d3.select("#tooltipViagensNavio")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        console.log(value.nome);

        d3.select("#tooltipViagensNavio").selectAll("p")
            .text(value.nome);

        d3.select("#tooltipViagensNavio.hidden")
            .style("display", "block");
    }

    function mouseClickExistentes (i, value){

        d3.select("#div_tooltip.hidden")
            .style("display", "block");

        let ClickExistentes = info_existentes.filter(d => d.id === value.id)[0];

        d3.select(".conteudo_destino_texto").selectAll('h2')
            .text(ClickExistentes.titulo);



        d3.select(".conteudo_destino_texto").select("h3")
            .text("Localização:");

        d3.select(".conteudo_destino_texto")
            .select("#lat_ex")
            .text(" lat: "+ value.lat )

        d3.select(".conteudo_destino_texto")
            .select("#long_ex")
            .text(" long: "+ value.long )


        console.log(value.lat);
        console.log(value.long);
    }

    function mouseClickDemolidas (i, value){

        d3.select("#div_tooltip.hidden")
            .style("display", "block");

        let ClickDemolidas = info_demolidas.filter(d => d.id === value.id)[0];

        d3.select(".conteudo_destino_texto").selectAll('h2')
            .text(ClickDemolidas.titulo);



        d3.select(".conteudo_destino_texto").select("h3")
            .text("Localização:");

        d3.select(".conteudo_destino_texto")
            .select("#lat_ex")
            .text(" lat: "+ value.lat )

        d3.select(".conteudo_destino_texto")
            .select("#long_ex")
            .text(" long: "+ value.long )


        console.log(value.lat);
        console.log(value.long);
    }

    function mouseClickHospital (i, value){

        d3.select("#div_tooltip_hospital.hidden")
            .style("display", "block");



        d3.select(".conteudo_destino_texto_hosp").selectAll('h2')
            .text("Hospital Conde de Ferreira");



        d3.select(".conteudo_destino_texto_hosp").select("h3")
            .text("Localização:");

        d3.select(".conteudo_destino_texto_hosp")
            .select("#lat_hosp")
            .text(" lat: "+ value.lat )

        d3.select(".conteudo_destino_texto_hosp")
            .select("#long_hosp")
            .text(" long: "+ value.long )


        console.log(value.lat);
        console.log(value.long);
    }

    function mouseOut() {

        d3.select("#tooltip.hidden")
            .style("display", "none");

        d3.select("#tooltip_vida.hidden")
            .style("display", "none");

        d3.select("#tooltip_demolidas.hidden")
            .style("display", "none");

        d3.select("#tooltip_existentes.hidden")
            .style("display", "none");

        d3.select("#tooltip_hospital.hidden")
            .style("display", "none");

        d3.select("#tooltipViagensNavio.hidden")
            .style("display", "none");

        d3.select("#tooltipSemPess.hidden")
            .style("display", "none");


    }
//------------------------------------------------------------------------
    let svg_grafico_navios = d3.select("#grafico_compara")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico");


    let svg_grafico_capitaes = d3.select("#graficoCompara_capitaes")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico_capitaes")

    let svg_grafico_tipo = d3.select("#graficoCompara_tipologia")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico_tipologia");

    let svg_grafico_mortalidade = d3.select("#graficoCompara_mortalidade")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico_mort");

    let svg_grafico_datas = d3.select("#graficoCompara_datas")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico_dat");

    let svg_grafico_navegar = d3.select("#graficoCompara_navegar")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "grafico_nav");

//Começo da modificação dos svgs
    let svg_geral = d3.select("#grafico").select('svg')
        .attr("margin-left", "150px");


    let svg_fortuna = d3.select("#grafico_fortuna")
        .append("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight)
        .attr("id", "graficoF");

    let svg_vida = d3.select("#quem_foi_visualizacao")
        .append("svg")
        .attr("width", window.innerWidth)
        .attr("height", "300px")
        .attr("overflow-x", "scroll")
        //.attr("height", window.innerHeight)
        .attr("id", "graficoV");

    //padrao
    var padrao = d3.select("body").append("svg");


//VISUALIZALÇÃO DESTINO DA FORTUNA (dados da localização presentes em dados.js)------------------------------------------------------------------------

    // mapa da fortuna do Conde
    var svg3 = d3.selectAll('#graficoF').append('g')
        .attr('width', innerWidth)
        .attr('height', innerHeight);


    const projection = d3. geoNaturalEarth1()
        .center([-7.8, 39.5]) // centrar em portugal
        .scale(10000)
        .translate([innerWidth/2, innerHeight/2-100]) ;


    //d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data) {
        d3.json("teste.json").then( function(data) {
        data.features = data.features.filter(d => d.properties.name == "Portugal");

        // Draw the map
        svg3.selectAll("path")
            .data(data.features)
            .join("path")
            .attr("fill", "none")
            .attr("d", d3.geoPath()
                .projection(projection))
            .style("stroke", "none")



        // Adição dos circulos das escolas ainda existentes
        svg3.selectAll("circulos")
            .data(pontos_escolas_ex)
            .enter()
            .append("circle")
            .attr("cx", function(d){
                //console.log([d])
                return projection([d.long, d.lat])[0]})
            .attr("cy", function(d){
                return projection([d.long, d.lat])[1]})
            .attr("r", 5.7)
            .style("fill", "#494949")
            .attr("stroke", "none")
            .attr("stroke-width", 1)
            .attr("fill-opacity", .6)
            .style("cursor","pointer")
            .on('mouseover' ,mouseExistentes)
            .on("mouseout", mouseOut)
            .on("click",mouseClickExistentes);



        // Adição dos circulos das escolas demolidas
        svg3.selectAll("circuloss")
            .data(pontos_escolas_dem)
            .enter()
            .append("circle")
            .attr("cx", function(d){
                return projection([d.long, d.lat])[0] })
            .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
            .attr("r", 5.2)
            .style("fill", "#d2d2d2")
            .attr("stroke", "none")
            .attr("stroke-width", 5)
            .style("cursor","pointer")
            .on('mouseover' ,mouseDemolidas)
            .on("mouseout", mouseOut)
            .on("click",mouseClickDemolidas);


        // Adição do quadrado do hospital
        svg3.selectAll("quadrados")
            .data(hospital)
            .enter()
            .append("rect")
            .attr("x", function(d){ return projection([d.long, d.lat])[0] })
            .attr("y", function(d){ return projection([d.long, d.lat])[1] })
            .attr("width", 9)
            .attr("height",9)
            .style("fill", "#494949")
            .attr("stroke", "#494949")
            .attr("stroke-width", 1)
            .attr("fill-opacity",10)
            .style("cursor","pointer")
            .on('mouseover' ,mouseHospital)
            .on("mouseout", mouseOut)
            .on("click", mouseClickHospital);



       /* d3.select("#legenda_destino")
            .append("text")
            //.attr("x", window.innerWidth )
            //.attr("y", window.innerHeight)
            .attr("text-anchor", "start")
            .style("position","absolute")
            .style("color", "white")
            .style("left","200px")
            .style("top","80px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "10pt")
            .text("Escolas Existentes")


        d3.select("#legenda_destino")
            .append("text")
           // .attr("x", window.innerWidth )
            //.attr("y", window.innerHeight)
            .attr("text-anchor", "start")
            .style("position","absolute")
            .style("color", "white")
            .style("left","200px")
            .style("top","130px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "10pt")
            .text("Escolas Demolidas");

        d3.select("#legenda_destino")
            .append("text")
           // .attr("x", window.innerWidth )
            //.attr("y", window.innerHeight)
            .attr("text-anchor", "start")
            .style("position","absolute")
            .style("color", "white")
            .style("left","200px")
            .style("top","180px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "10pt")
            .text("Hospital Conde de Ferreira")

        d3.select("#legenda_destino")
            .append("svg:image")
            .attr('width', 20)
            .attr('height', 24)
            .attr("xlink:href", "imagens/retangulo_hospital.svg")


        d3.select("#legenda_destino")
            .append("rect")
            .attr("width", "50px")
            .attr("height", "20px")
            .attr("x","40px")
            .attr("y","40px")
            .style("position","absolute")
            .style("fill", "blue");
*/

    })


//VISUALIZAÇÃO DETALHADAS-----------------------------------------------------------------
    //Palavras existentes na Base


    let Navios = d3.group(d, d => d.navio);
    //let Capitao = d3.group(d, d => d.capitao);
    let Mortalidade = d3.group(d, d => d.mortes);
    let Barco = d3.group(d, d => d.tipologia);
    let Partidas=d3.group(d, d => d.partida);
    let Data = d3.group(d, d => d.data_partida.slice(-4));

//ordenar o número de viagens feitas por cada navio
    Navios=new Map([...Navios].sort((a,b)=>{
      //  console.log(a[1]);
        return b[1].length-a[1].length;

    }));




    //divisão do nome dos capitaes que navegaram juntos o mesmo barco
    let Capitao = [];
    d.forEach(linha =>{

        let cap_list = linha.capitao.split(" e ");

        console.log(linha.navio);


        cap_list.forEach(cap =>{
            const isFound = Capitao.some(e => e.nome === cap);

            if(isFound) Capitao.filter(e => e.nome === cap)[0].count = Capitao.filter(e => e.nome === cap)[0].count + 1;
            else Capitao.push({'nome' : cap, 'count' : 1});

        })
    })

    console.log(Capitao);




    //ordenar o número de viagens feitas por cada capitao
    Capitao=Capitao.sort((a,b)=>{
        //  console.log(a[1]);
        return b.count-a.count;

    });


//ordenar o numero de viagens feitas por cada tipo de barco
    Barco=new Map([...Barco].sort((a,b)=>{
        //  console.log(a[1]);
        return b[1].length-a[1].length;

    }));
    console.log(Barco);

//agrupar e ordenar o numero de mortes realizadas por cada navio
    let agruparMortes=[];

    agruparMortes= d3.rollup(d, v => d3.sum(v, d => d.mortes), d => d.navio)

    agruparMortes=new Map([...agruparMortes].sort((a,b)=>{
          console.log(a[1]);
        return b[1]-a[1];

    }));


//ordenar valores do número de viagens feitas por ano
    Data=new Map([...Data].sort((a,b)=>{
        console.log(a[1]);
        return b[1].length-a[1].length;

    }));

    console.log(Data);


    //padrao para as mini visualizações da pagina do trafico
    padrao
        .append('defs')
        .append('pattern')
        .attr('id', 'diagonalHatch')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 4)
        .attr('height', 4)
        .append('path')
        .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
        .attr('stroke', '#333333')
        .attr('stroke-width', 1);



    var svg2 = svg_grafico_navios
    var svg2_1=svg_grafico_capitaes
    var svg2_2=svg_grafico_tipo
    var svg2_3=svg_grafico_mortalidade
    var svg2_4=svg_grafico_datas
    var svg2_5=svg_grafico_navegar


    svg2.append('g')
        .selectAll("text")
        .data(Navios)
        .enter()
        .append('text')
        .attr("id", "nome_navios")
        .attr("class", "primeiro")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(Navios,i) {
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * 145;
        } )
        .attr('y', function(Navios,i){
            return innerHeight / 3-50 + Math.sin(i * (Math.PI*2) /13) * 145;
        } )
        .text(function(d,Navios) {
            //console.log(d[0].length);
            //console.log(d[1].length);
            // return d[0];
            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
            for(var j=0;j<d[0].length;j++){
                console.log(d[0][0]);
                return d[0][0]


            }

        })



    //linhas que saem com os valores especificos de cada navio
    svg2.append("g")
        .selectAll("line")
        .attr("class", "primeiro")
        .data(Navios)
        .enter()
        .append('line')
        .style("stroke",  d=> (d[0] === 'Tejo' || d[0]==='Activo') ? 'url(#diagonalHatch)' : "#484848")
       // .style("stroke", d=> (d[0] === 'Tejo' || d[0]==='Activo') ? 'red' : "#484848")
        .style("stroke-width", "25px")
        //  console.log(Navios[0][0]); Ter as Iniciais dos Navios


        .attr("x1", function (Navio,i) {

            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * 170;
        })
        .attr("y1", function (Navio,i) {

            return innerHeight / 3-50 + Math.sin(i * (Math.PI*2) /13) *165;
        })
        .attr("x2", function (d,i) {
            console.log(escalaNavios(d[1].length));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (195*escalaNavios(d[1].length)) ;
        })
        .attr("y2", function (d,i) {
            console.log(d[1].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3-50 + Math.sin(i * (Math.PI*2) /13) * (195 * escalaNavios(d[1].length));
        })
        .on("mouseover" ,mouseViagensNavio)
        .on("mouseout", mouseOut)
        .style("cursor","pointer")





    //Valores existentes no topo
    svg2.append('g')
        .selectAll("text")
        .data(Navios)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("class", "primeiro")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {
              console.log(escalaNavios(d[1].length));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (220*escalaNavios(d[1].length)) ;
        })
        .attr("y", function (d,i) {
            //console.log(d[i].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3-50 + Math.sin(i * (Math.PI*2) /13) * (220* escalaNavios(d[1].length));
        })

        .text(function(d,Navios,i) {

            return d[1].length;

        })



    //div 2 visualização dos capitaes
    svg2_1.append('g')
        .selectAll("text")
        .data(Capitao)
        .enter()
        .append('text')
        .attr("id", "nome_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(Capitao,i) {
            console.log(Capitao)
            return innerWidth/2 + Math.cos(i * (Math.PI*2) /35) * 145;
        } )
        .attr('y', function(Capitao,i){
            return innerHeight/ 3+ Math.sin(i * (Math.PI*2) /35) * 145;
        } )
        .text(function(d,Capitao) {
console.log(d);
          return d.nome[0];
            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
    /*        for(var j=0;j<d[0].length;j++){
                //se quiser que apareça o nome todo basta colocar d[0];
                return d[0][0];

            }*/

        })

    //div 2 linhas que saem com os valores especificos de cada navio
    svg2_1.append("g")
        .selectAll("line")
        .data(Capitao)
        .enter()
        .append('line')
        .style("stroke",  d=> (d.nome === '-' ) ? 'url(#diagonalHatch)' : "#484848")
        .style("stroke-width", "15px")
        //  console.log(Navios[0][0]); Ter as Iniciais dos Navios


        .attr("x1", function (Capitao,i) {

            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /35) * 170;
        })
        .attr("y1", function (Capitao,i) {

            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /35) *165;
        })
        .attr("x2", function (d,i) {
            console.log((d));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /35) * (195*escalaCapitaes(d.count)) ;
        })
        .attr("y2", function (d,i) {
            console.log(d.nome);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /35) * (195 * escalaCapitaes(d.count));
        })
        .on("mouseover" ,mouseCapitaes)
        .on("mouseout", mouseOut)
        .style("cursor","pointer")


    // div 2 Valores existentes no topo dos Capitães
    svg2_1.append('g')
        .selectAll("text")
        .data(Capitao)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {

            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /35) * (220*escalaCapitaes(d.count)) ;
        })
        .attr("y", function (d,i) {
            //console.log(d[i].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /35) * (220* escalaCapitaes(d.count));
        })

        .text(function(d,Capitao,i) {

            return d.count;

        })

    //div 3 visualização das viagens feitas por cada tipo de navio
    svg2_2.append('g')
        .selectAll("text")
        .data(Barco)
        .enter()
        .append('text')
        .attr("id", "nome_navios")
        .attr("class", "tipo_nav")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(Barco,i) {
            console.log(Barco)
            return innerWidth/2 + Math.cos(i * (Math.PI*2) /6) * 115;
        } )
        .attr('y', function(Barco,i){
            return innerHeight / 3+ Math.sin(i * (Math.PI*2) /6) * 120;
        } )
        .text(function(d,Barco) {

            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
            for(var j=0;j<d[0].length;j++){
                console.log(Barco);
                console.log(d[0]);
                //se quiser que apareça o nome todo basta colocar d[0];
                return d[0];

            }

        })

    //div 3 linhas que saem com os valores especificos de cada tipo de navio
    svg2_2.append("g")
        .selectAll("line")
        .attr("class", "tipo_nav")
        .data(Barco)
        .enter()
        .append('line')
        .style("stroke",  d=> (d[0] === '-' ) ? 'url(#diagonalHatch)' : "#484848")
        .style("stroke-width", "25px")
        //  console.log(Navios[0][0]); Ter as Iniciais dos Navios


        .attr("x1", function (Barco,i) {

            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /6) * 170;
        })
        .attr("y1", function (Barco,i) {

            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /6) *165;
        })
        .attr("x2", function (d,i) {
            console.log((d[0]));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth  / 2 + Math.cos(i * (Math.PI*2) /6) * (195*escalaBarcos(d[1].length)) ;
        })
        .attr("y2", function (d,i) {
            console.log(d[1].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /6) * (195 * escalaBarcos(d[1].length));
        })
        .on("mouseover" ,mouseViagensNavio)
        .on("mouseout", mouseOut)
        .style("cursor","pointer")

    // div 3 Valores existentes no topo de cada tipo de Barcos
    svg2_2.append('g')
        .selectAll("text")
        .data(Barco)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("class", "tipo_nav")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {
            console.log(escalaNavios(d[1].length));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /6) * (220*escalaBarcos(d[1].length)) ;
        })
        .attr("y", function (d,i) {
            //console.log(d[i].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /6) * (220* escalaBarcos(d[1].length));
        })

        .text(function(d,Barco,i) {

            return d[1].length;

        })

    //div 4 visualização dos capitaes
    svg2_3.append('g')
        .selectAll("text")
        .data(agruparMortes)
        .enter()
        .append('text')
        .attr("id", "nome_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(agruparMortes,i) {
            return innerWidth/2 + Math.cos(i * (Math.PI*2) /13) * 145;
        } )
        .attr('y', function(agruparMortes,i){
            return innerHeight / 3+ Math.sin(i * (Math.PI*2) /13) * 145;
        } )
        .text(function(d,agruparMortes) {
            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
            for(var j=0;j<d[0].length;j++){
                console.log(d[0][0]);
                //se quiser que apareça o nome todo basta colocar d[0];
                return d[0][0];

            }

        })
    //div 4 linhas que saem com os valores especificos de cada Barco
    svg2_3.append("g")
        .selectAll("line")
        .data(agruparMortes)
        .enter()
        .append('line')
        .style("stroke",  d=> (d[0] === 'Tejo' || d[0]==='Activo') ? 'url(#diagonalHatch)' : "#484848")
        .style("stroke-width", "25px")
        .attr("x1", function (agruparMortes,i) {

            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13)  * 170;
        })
        .attr("y1", function (agruparMortes,i) {

            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) * 170;
        })
        .attr("x2", function (d,i) {
            console.log();
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (195*escalaMort(d[1])) ;
        })
        .attr("y2", function (d,i) {
           // console.log(d[1][0].mortes);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) * (195 * escalaMort(d[1]));
        })
        .on("mouseover" ,mouseViagensNavio)
        .on("mouseout", mouseOut)
        .style("cursor","pointer")

    // div 4 Valores existentes no topo dos Barcos
    svg2_3.append('g')
        .selectAll("text")
        .data(agruparMortes)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {

            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (220*escalaMort(d[1])) ;
        })
        .attr("y", function (d,i) {
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) * (220* escalaMort(d[1]));
        })

        .text(function(d,agruparMortes,i) {

            return d[1];

        })

    //div 5 visualização das Datas
    svg2_4.append('g')
        .selectAll("text")
        .data(Data)
        .enter()
        .append('text')
        .attr("id", "mostrar anos")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(Data,i) {
            return innerWidth/2 + Math.cos(i * (Math.PI*2) /12) * 135;
        } )
        .attr('y', function(Data,i){
            return innerHeight /3+ Math.sin(i * (Math.PI*2) /12) * 135;
        } )
        .text(function(d,Data) {
            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
            for(var j=0;j<d[0].length;j++){
                console.log(d[0]);
                //se quiser que apareça o nome todo basta colocar d[0];
                return d[0];

            }

        })

    //div 5 linhas que saem com os valores especificos de cada Data
    svg2_4.append("g")
        .selectAll("line")
        .data(Data)
        .enter()
        .append('line')
        .style("stroke",  d=> (d[0] === '-') ? 'url(#diagonalHatch)' : "#484848")
        .style("stroke-width", "25px")
        .attr("x1", function (Data,i) {

            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /12) * 170;
        })
        .attr("y1", function (Data,i) {

            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /12) *165;
        })
        .attr("x2", function (d,i) {
            console.log(d[1].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /12) * (195*escalaDat(d[1].length)) ;
        })
        .attr("y2", function (d,i) {
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /12) * (195 * escalaDat(d[1].length));
        })
        //.on("mouseover" ,mouseViagensNavio)
        //.on("mouseout", mouseOut)
        //.style("cursor","pointer")

    // div 5 Valores existentes no topo das Datas
    svg2_4.append('g')
        .selectAll("text")
        .data(Data)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","16px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {

            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerWidth / 2 + Math.cos(i * (Math.PI*2) /12) * (220*escalaDat(d[1].length)) ;
        })
        .attr("y", function (d,i) {
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return innerHeight / 3 + Math.sin(i * (Math.PI*2) /12) * (220* escalaDat(d[1].length));
        })

        .text(function(d,Data,i) {

            return d[1].length;

        })


    //Médias das pessoas escravizadas por rota
    //problema: está a dar um valor decimal porque está a somar valores com "-" e a dividir por um total
    //como apagar dados que tenham "-" das formatações?
    function somaPessoasEscravizadas(ini, fim, partida,destino) {
        somapessoasescravizadas = d3.sum(d.filter(function (d) {
            return d[ini] === partida && d[fim] === destino && d.escravos_d!=="-"
        }), function (d) {
            return d.escravos_d;
        })
        return(somapessoasescravizadas);

    }
    //Aqui dou no ini o parametro que quero começar a ver e em fim o que quero acabar e depois dou a partida e o destino que quero
    somaPessoasEscravizadas('intermedio_1', 'destino', 'Cabinda','Baía');
    console.log("a soma das pessoas escravizadas na rota " + somapessoasescravizadas);

//VISUALIZAÇÃO DA VIDA DO CONDE (index.html)

    epochs = [  {from: 0, duration: 900, id:"um"}, { from: 900, duration: 850, id:"dois"}, { from: 1750, duration: 600, id:"tres"},{ from: 2350, duration: 500, id:"quatro"},{ from: 2850, duration: 500, id:"cinco"},{ from: 3350, duration: 180, id:"seis"},{ from: 3530, duration: 1070, id:"sete"},{ from: 4600, duration: 50, id:"oito"}  ];

    eventLabelsData = [ { time: 2, text: "Nascimento"}, { time: 900, text: "Joaquim Ferreira dos Santos emigra para o Brasil"}, { time: 1750, text:"Introdução no mercado esclavagista"}, { time: 2350, text:" Cidadania Brasileira"}, { time: 2850, text:" Retorno a Portugal"}, { time: 3350, text:" Afiliações económicas"}, { time: 3530, text:"Aquisição de títulos nobiliárquicos"}, { time: 4600, text:"Falecimento"} ];

    timeLabelsData = [ { time: 2, text: "1782"}, { time: 900, text: "1800"}, { time: 1750, text: "1817"},{ time: 2350, text: "1822"},{ time: 2850, text: "1832"},{ time: 3350, text: "1842"},{ time: 3530, text: "1842"},{ time: 3590, text: "1843"},{ time: 3710, text: "1850"},{ time: 4600, text: "1866"}   ];

    extent = [ [0,0],[1152,0] ];

    scaleExtent = [ 1, 1];

    translateExtent = [ [0,0],[4900,0] ];

    let altura=200;

    const globalScale = innerWidth / 6000;
    const color = d3.scaleOrdinal(d3.schemeBrBG[6]);

    // mapa da vida do Conde
    var svg5 = d3.selectAll('#graficoV').append('g')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .attr('viewBox', [0, 0, innerWidth, altura]);

// mudar o cursor da viz
    const v = svg5.append('g')
        .attr("id","mudaCursor")
       // .attr('cursor', "pointer" );



    v.selectAll('rect')
        .data(epochs)
        .join('rect')
        .attr('x', ({from}) => from)
        .attr('y', altura/3)
        .attr('width', ({duration}) => duration)
        .attr('height', altura/2)
        .attr('fill', (d, i) => d3.interpolateGreys(i / 8))
        .on("mouseover", mouseOver_vida)
        .on("mouseout", mouseOut);

    const groupEventLabels = svg5.append('g')
        .attr('class', 'event-labels')
        .attr('cursor', 'grab')

    const eventLabels = groupEventLabels.selectAll('event-labels')
        .data(eventLabelsData)
        .join('g')
        .attr('transform',  ({time}) => 'translate('+ time +' '+0+')')
    eventLabels.append('circle')
        .attr('cx', 0)
        .attr('cy', 20)
        .attr('r', 1.5)
        .attr('transform-origin', '50% 50%')
        .attr('fill', 'black')
    eventLabels.append('text')
        .attr('x', 10)
        .attr('y', 20)
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'middle')
        .text(d => d.text)
        .attr('font-family', 'Verdana, sans-serif')
        .attr("font-size", '22px')
        .attr("fill", 'black')
    eventLabels.append('rect')
        .attr('x', -0.5)
        .attr('y', 0)
        .attr('width', 1)
        .attr('height', altura*0.8)
        .attr('stroke', 'black')
        .attr('stroke-width', 0)
        .attr('fill', 'black')

    const groupTimeLabels = svg5.append('g')
        .attr('class', 'time-labels')
        .attr('cursor', 'grab')

    const timeLabels = groupTimeLabels.selectAll('time-labels')
        .data(timeLabelsData)
        .join('g')
        .attr('transform',  ({time}) => 'translate('+ time  +' '+0+')')
    timeLabels.append('circle')
        .attr('cx', 0)
        .attr('cy', altura - 20)
        .attr('r', 1.5)
        .attr('transform-origin', '50% 50%')
        .attr('fill', 'black')
    timeLabels.append('text')
        .attr('x', 10)
        .attr('y', altura - 10)
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'middle')
        .text(d => d.text)
        .attr('font-family', 'Verdana, sans-serif')
        .attr("font-size", '22px')
        .attr("fill", 'black')

    timeLabels.append('rect')
        .attr('x', -0.5)
        .attr('y', altura*0.2)
        .attr('width', 1)
        .attr('height', altura*0.8)
        .attr('stroke', 'black')
        .attr('stroke-width', 0)
        .attr('fill', 'black')


    function zoomed(e) {
        v.attr("transform", e.transform)
        eventLabels.attr('transform', ({time}) => 'translate(' + (e.transform.x + time * e.transform.k) + ' '+ 10 +')')
        timeLabels.attr('transform', ({time}) => 'translate(' + (e.transform.x + time * e.transform.k) + ' '+ 10 +')')

    }


    svg5.call(d3.zoom()
        .extent(extent)
        .scaleExtent(scaleExtent)
        .translateExtent(translateExtent)
        .on("zoom", zoomed));





//VISUALIZAÇÃO INICIAL--------------------------------------------------------------------------------


// estrutura:
    // - nome do inicio e fim,
    // - soma dos escravos.
    let dados_agregados = [];


    let value_esc = 0;
    d.forEach(travel => {


        percursos.forEach(path =>{
            if(travel[path] !== "-") {
                // se estamos no inicio
                if(last_depart === ""){
                    last_depart = travel[path];

                    last_depart_path = path;
                    console.log(last_depart_path);


                }else {
                    value_esc = somaPessoasEscravizadas(last_depart_path, path, last_depart, travel[path]);
//console.log(value_esc);
                    // dados_agregados.push({path:(last_depart+'_'+travel[path]), value: value_esc});
                    dados_agregados.push({path:object[last_depart_path+'|'+last_depart+'_'+path+'|'+travel[path]], value: value_esc});
                    last_depart = travel[path];

                    last_depart_path = path;
                    // });
                }
            }
        })
    });



    dados_agregados = d3.rollup(dados_agregados, v => d3.sum(v, d => d.value), d => d.path);

    console.log(dados_agregados);
    console.log(partidas_map);

    // isto para funcionar temos que guardar nos "dados_agregados", os nomes correctos. Deixei em cima um TODO
    dados_agregados.forEach((value,path) =>{
        //permitir a colocação de linha tracejada no percurso em que as pessoas ainda não estão a bordo
        svg_geral.selectAll(".teste")
           // .attr('stroke-dasharray','2')
            .attr('stroke','#8a8a8a')
           // .attr('stroke','url(#diagonalHatch)')
            .on("mouseover",mouseSemPes)
            .on("mouseout", mouseOut);

        svg_geral.select('#'+path)
            .attr('value',value)
            .attr('stroke', '#424242')
            .attr('stroke-width', function(d){
               console.log((value));
                return escalaPessoasEscravizadas(value);
            })
            .style('cursor','pointer')
            .on("mouseover", mouseOver_trafico)
            .on("mouseout", mouseOut);

    })





}

