const url = "ExpediçõesCondedeFerreira.csv";
let abrir,fechar;
let tras;
let testVal;
const percursos = ['partida', 'intermedio_1','intermedio_2', 'intermedio_3', 'destino'];
let Escalanavios;
let escalaPessoasEscravizadas;
let info_existentes;


d3.csv(url, function (d) {
    return {
        navio: String(d.Navio),
        tipologia: String(d.Tipologia),
        armador: String(d.Armador),
        capitao: String(d.Capitao),
        partida: String(d.Partida),
        data_saida: parseInt(d.data_partida),
        intermedio_1: String(d.Intermedio_1),
        intermedio_2: String(d.Intermedio_2),
        intermedio_3: String(d.Intermedio_3),
        destino: String(d.Destino),
        data_destino: parseInt(d.Data_destino),
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

//função de fechar o menu
function fecharMenu(){
    fechar = document.querySelector(".cruz");
    if(fechar){
        fechar.addEventListener("click", function(){
            if (document.querySelector(".menu_aberto").style.marginRight === 0 + "%") {
                document.querySelector(".menu_aberto").style.marginRight = -100 + "%";
            } else {
                document.querySelector(".menu_aberto").style.marginRight = 0 + "%";
            }
        });

    }}


//abrir e fechar o Filtro na página do tráfico

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

//função de fechar o menu
function fecharMenu(){
    fechar = document.querySelector(".cruz");
    if(fechar){
        fechar.addEventListener("click", function(){
            if (document.querySelector(".menu_aberto").style.marginRight === 0 + "%") {
                document.querySelector(".menu_aberto").style.marginRight = -100 + "%";
            } else {
                document.querySelector(".menu_aberto").style.marginRight = 0 + "%";
            }
        });

    }}

/*
var pathname = window.location.pathname;

if(pathname != 'index.html'){
    abrirMenu();
    fecharMenu();
}

console.log(pathname);
*/


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
    abrirMenu();
    fecharMenu();
    paraTras();


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
        .domain([0, 200000])
        .range([2, 35]);
    escalaPessoasEscravizadas.clamp(true);

    console.log(escalaPessoasEscravizadas);

    //redimensionamento dos valores utilizados nos Navios
    escalaNavios = d3.scaleLinear()
        .domain([1, 12])
        .range([1.1, 2]);
    escalaNavios.clamp(true);

    console.log(escalaNavios);


//tooltip-----------------------------------------------------------------------------------------------
    function mouseOver_geral(i, value) {
        var escala_ranking = d3.scaleLinear()
            .domain(d3.extent(d, function (d) {
                return d.escravos_d;
            }))
            .range([1,10]);
        escala_ranking.clamp(true);

        //  const indice = i['path'][0].className.baseVal.split('_')[1];
        //console.log(indice + " | libe: " + paises_l[indice]  + " corrup: " + paises_c[indice] +  " saude: " + paises_s[indice]+  " econo: " + paises_e[indice]);

        d3.select("#tooltip")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        d3.select("#tooltip_destino")
            .style("left", x+ 7 + "px")
            .style("top", y+ 7 + "px");

        //  d3.select("#tooltip").append('p').text("Liberdade:" + " " + d3.format(".2f")(value)).style("color", "#ABD9E9");
        //d3.select("#tooltip").append('p').text("Corrupção:" + " " + d3.format(".2f")(paises_c[indice])).style("color", "#313695");
        //d3.select("#tooltip").append('p').text("Saúde:" + " " + d3.format(".2f")(paises_s[indice])).style("color", "#a50026");
        //d3.select("#tooltip").append('p').text("Economia:" + " " + d3.format(".2f")(paises_e[indice])).style("color", "#FDAE61");

        // cmacas: adicionei isto
        // aqui procura-se os valores certos.
        let this_data = info_existentes.filter(d => d.id === value.id)[0];
        d3.select("#tooltip_destino").selectAll('p')
            .text(this_data.local);


        d3.select("#tooltip.hidden")
            .style("display", "block");

        d3.select("#tooltip_destino.hidden")
            .style("display", "block");
    }



    function mouseOut() {

        d3.select("#tooltip.hidden")
            .style("display", "none");

        d3.select("#tooltip_destino.hidden")
            .style("display", "none");
    }
//------------------------------------------------------------------------
    let svg_grafico_navios = d3.select("#grafico_compara")
        .append("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight)
        .attr("id", "grafico");

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
        .attr("height", window.innerHeight)
        .attr("id", "graficoV");


//VISUALIZALÇÃO DESTINO DA FORTUNA (dados da localização presentes em dados.js)------------------------------------------------------------------------

    // mapa da fortuna do Conde
    var svg3 = d3.selectAll('#graficoF').append('g')
        .attr('width', innerWidth)
        .attr('height', innerHeight);


    const projection = d3. geoNaturalEarth1()
        .center([-7.8, 39.5]) // centrar em portugal
        .scale(7500)
        .translate([innerWidth/2, innerHeight/2]);


    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data) {
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
            .attr("r", 4)
            .style("fill", "#494949")
            .attr("stroke", "none")
            .attr("stroke-width", 1)
            .attr("fill-opacity", .6)
            .on('mouseover' ,mouseOver_geral)
            .on("mouseout", mouseOut);



        // Adição dos circulos das escolas demolidas
        svg3.selectAll("circuloss")
            .data(pontos_escolas_dem)
            .enter()
            .append("circle")
            .attr("cx", function(d){
                return projection([d.long, d.lat])[0] })
            .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
            .attr("r", 4)
            .style("fill", "#d2d2d2")
            .attr("stroke", "none")
            .attr("stroke-width", 5)
            .on('mouseover' ,
            function(i){ console.log("Demolidas"); });


        // Adição do quadrado do hospital
        svg3.selectAll("quadrados")
            .data(hospital)
            .enter()
            .append("rect")
            .attr("x", function(d){ return projection([d.long, d.lat])[0] })
            .attr("y", function(d){ return projection([d.long, d.lat])[1] })
            .attr("width", 6)
            .attr("height",6)
            .style("fill", "#494949")
            .attr("stroke", "#494949")
            .attr("stroke-width", 1)
            .attr("fill-opacity",10)
            .on('mouseover' ,
                function(i){ console.log("Hospital"); });


        d3.select("#legenda")
            .append("text")
            .attr("x", window.innerWidth )
            .attr("y", window.innerHeight)
            .attr("text-anchor", "end")
            .style("color", "black")
            .style("position","fixed")
            .style("right","20px")
            .style("bottom","170px")
            .style("font-family", "IBM_Medium")
            .style("font-size", "14pt")
            .text("Legenda")

        d3.select("#legenda")
            .append("text")
            .attr("x", window.innerWidth )
            .attr("y", window.innerHeight)
            .attr("text-anchor", "end")
            .style("color", "black")
            .style("position","fixed")
            .style("right","20px")
            .style("bottom","130px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "12pt")
            .text("Escolas Existentes")

        d3.select("#legenda")
            .append("text")
            .attr("x", window.innerWidth )
            .attr("y", window.innerHeight)
            .attr("text-anchor", "end")
            .style("color", "black")
            .style("position","fixed")
            .style("right","20px")
            .style("bottom","90px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "12pt")
            .text("Escolas Demolidas")

        d3.select("#legenda")
            .append("text")
            .attr("x", window.innerWidth )
            .attr("y", window.innerHeight)
            .attr("text-anchor", "end")
            .style("color", "black")
            .style("position","fixed")
            .style("right","20px")
            .style("bottom","50px")
            .style("font-family", "IBM_Regular")
            .style("font-size", "12pt")
            .text("Hospital Conde de Ferreira")



    })

    /*

   // Abrir ficheiro json com as informações de cada destino
       fetch('./info_existentes.json').then(response => {
           return response.json();
       }).then(info_existentes => {

           //comparar jsons e ver se os ids são iguais
           for(var i = 0;i < pontos_escolas_ex.length; i++){
               for(var j = 0;j < info_existentes.length; j++){

                   //if(pontos_escolas_ex[i].id==info_existentes[j].id){
                   if(info_existentes[j].id.indexOf(pontos_escolas_ex[i].id) > -1 ){
                       console.log("Match");

                       d3.select("#tooltip_destino").selectAll('p')
                           .data(info_existentes)
                           .text( function (i,j){
                               console.log(info_existentes[j].local);
                               return info_existentes[j].local;


                           });

                   }
               }
           }

       }).catch(err => {
           console.log("help")
       });


    */


//VISUALIZAÇÃO SOBRE O NOME DOS NAVIOS-----------------------------------------------------------------
    //Palavras existentes na Base
    let Navios = d3.group(d, d => d.navio);
    let Partidas=d3.group(d, d => d.partida);
    console.log(Partidas);
    console.log(Navios);
    console.log(Navios["Tejo"]);
    console.log(Navios.reduce);
    console.log(Navios.length);


    var svg2 = svg_grafico_navios
        .attr("margin-left", "150px");



    svg2.append('g')
        .selectAll("text")
        .data(Navios)
        .enter()
        .append('text')
        .attr("id", "nome_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","10px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr('x', function(Navios,i) {
            return window.innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * 140;
        } )
        .attr('y', function(Navios,i){
            return window.innerHeight / 3+ Math.sin(i * (Math.PI*2) /13) * 140;
        } )
        .text(function(d,Navios) {
            console.log(d[0].length);
            //console.log(d[1].length);
            // return d[0];
            //Quero cortar a frase se tiver mais de 1 palavra e não consigo
            for(var j=0;j<d[0].length;j++){
                //console.log(d[0].length);
                console.log( d[0].replace(" ","\n"));
                return d[0].replace(" ","\n");
            }

        })

    //linhas que saem com os valores especificos de cada navio
    svg2.append("g")
        .selectAll("line")
        .data(Navios)
        .enter()
        .append('line')
        .style("stroke", "#9a9a9a")
        .style("stroke-width", "10px")
        //  console.log(Navios[0][0]); Ter as Iniciais dos Navios


        .attr("x1", function (Navio,i) {

            return window.innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * 170;
        })
        .attr("y1", function (Navio,i) {

            return window.innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) *170;
        })
        .attr("x2", function (d,i) {
            console.log(escalaNavios(d[1].length));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return window.innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (180*escalaNavios(d[1].length)) ;
        })
        .attr("y2", function (d,i) {
            console.log(d[1].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return window.innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) * (180* escalaNavios(d[1].length));
        })

    //Valores existentes no topo
    svg2.append('g')
        .selectAll("text")
        .data(Navios)
        .enter()
        .append('text')
        .attr("id", "numero_navios")
        .attr("text-anchor", "middle")
        .style("color", "black")
        .style("font-family", "IBM_Regular")
        .style("font-size","15px")
        .style("max-width","3ch")
        .style("word-break","break-word")
        .attr("x", function (d,i) {
            //  console.log(escalaNavios(d[1].length));
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return window.innerWidth / 2 + Math.cos(i * (Math.PI*2) /13) * (195*escalaNavios(d[1].length)) ;
        })
        .attr("y", function (d,i) {
            //console.log(d[i].length);
            //Quero adicionar o nr de values que existem em cada uma das arrays do Navios mas não estou a conseguir perceber como lhes acedo
            return window.innerHeight / 3 + Math.sin(i * (Math.PI*2) /13) * (195* escalaNavios(d[1].length));
        })

        .text(function(d,Navios,i) {

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

    epochs = [  {from: 0, duration: 900}, { from: 900, duration: 850}, { from: 1750, duration: 600},{ from: 2350, duration: 500},{ from: 2850, duration: 500},{ from: 3350, duration: 180},{ from: 3530, duration: 1070},{ from: 4600, duration: 50}  ];

    eventLabelsData = [ { time: 2, text: "Nascimento Conde de Ferreira"}, { time: 900, text: "Joaquim Ferreira dos Santos viaja para o Brasil"}, { time: 1750, text:"Introdução no mercado esclavagista"}, { time: 2350, text:" Independência do Brasil"}, { time: 2850, text:" Retorno a Portugal"}, { time: 3350, text:" Afiliações económicas"}, { time: 3530, text:"Aquisição de titúlos nobiliárquico"}, { time: 4600, text:"Falecimento do Conde de Ferreira"} ];

    timeLabelsData = [ { time: 2, text: "1782"}, { time: 900, text: "1800"}, { time: 1750, text: "1817"},{ time: 2350, text: "1822"},{ time: 2850, text: "1832"},{ time: 3350, text: "1842"},{ time: 3530, text: "1842"},{ time: 3590, text: "1843"},{ time: 3710, text: "1850"},{ time: 4600, text: "1866"}   ];

    extent = [ [0,0],[1152,0] ];

    scaleExtent = [ 0.2304, 2];

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
        .attr('cursor', 'grab')


    v.selectAll('rect')
        .data(epochs)
        .join('rect')
        .attr('x', ({from}) => from)
        .attr('y', altura/2)
        .attr('width', ({duration}) => duration)
        .attr('height', altura/2)
        .attr('fill', (d, i) => d3.interpolateGreys(i / 8))
        .on("mouseover", mouseOver_geral)
        .on("mouseout", mouseOut);

    const groupEventLabels = svg5.append('g')
        .attr('class', 'event-labels')
        .attr('cursor', 'grab')

    const eventLabels = groupEventLabels.selectAll('event-labels')
        .data(eventLabelsData)
        .join('g')
        .attr('transform',  ({time}) => 'translate('+ time * globalScale +' '+altura/2+')')
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
        .attr("font-size", '14px')
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
        .attr('transform',  ({time}) => 'translate('+ time * globalScale +' '+altura/2+')')
    timeLabels.append('circle')
        .attr('cx', 0)
        .attr('cy', altura - 20)
        .attr('r', 1.5)
        .attr('transform-origin', '50% 50%')
        .attr('fill', 'black')
    timeLabels.append('text')
        .attr('x', 10)
        .attr('y', altura - 20)
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'middle')
        .text(d => d.text)
        .attr('font-family', 'Verdana, sans-serif')
        .attr("font-size", '14px')
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
        let last_depart = "";
        let last_depart_path = "";

        percursos.forEach(path =>{
            if(travel[path] !== "-") {
                // se estamos no inicio
                if(last_depart === ""){
                    last_depart = travel[path];

                    last_depart_path = path;
                    console.log(last_depart);


                }else {
                    value_esc = somaPessoasEscravizadas(last_depart_path, path, last_depart, travel[path]);

                    // dados_agregados.push({path:(last_depart+'_'+travel[path]), value: value_esc});
                    dados_agregados.push({path:object[last_depart+'_'+travel[path]], value: value_esc});
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
        //  console.log(path +' : ' + value);
        svg_geral.select('#'+path)
            .attr('stroke', '#424242')
            .attr('stroke-width', function(d){


                console.log(escalaPessoasEscravizadas(value));
                return escalaPessoasEscravizadas(value);
            })
            .on("mouseover", mouseOver_geral)
            .on("mouseout", mouseOut);
    })


        let grupocompare = d3.select(".filtro")
            .append("g")
            .attr("id", "compara")
            .data(Partidas)
    console.log(Partidas);
        grupocompare.append("text")
            .attr("x", function (Partidas,i){
                50*i;
            })
            .attr("y", window.innerHeight - 150)
            .style("color", "white")
            .style("font-family", "IBM_Regular")
            .style("font-weight", 500)
            .style("font-size", "9pt")
            .text(function(d,Partidas) {
                for(var i=0;i<d[0].length;i++){
                    console.log(d[0]);

                    return d[0];
                }

            })













}

