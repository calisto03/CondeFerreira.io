const url2 = "destino_da_heranca_conde_de_ferreira.csv"
    //"destino_da_herança_conde_de_ferreira.csv";

d3.csv(url2, function (r) {
    return {
      destinastario: String(r.destinastario),
        localizacao: String(r.local),
        valor: parseFloat(r.valor),
        tipo: String(r.tipo),
    };



}).then(desenhaGraficoR);

function desenhaGraficoR(r) {
console.log(r);

//Obter valores do mouseX e mouseY para as interações
    var x_r = null;
    var y_r = null;
    document.addEventListener('mousemove', onMouseUpdate_r, false);



    //Atualização dos valores x e y para a posição do rato
    function onMouseUpdate_r(e_r) {
        x_r = e_r.pageX;
        y_r = e_r.pageY;
    }

    function mouseOver_restante(i,value){
        d3.select("#tooltip_restante")
            .style("left", x_r + 7 + "px")
            .style("top", y_r + 7 + "px");

        d3.select("#tooltip_restante").selectAll("h3")
            .text(value.destinastario);
        d3.select("#tooltip_restante").selectAll("p")
            .text("Valor Atribuido:"+ value.valor + "$00"+" réis");

        d3.select("#tooltip_restante.hidden")
            .style("display", "block");

    }
    function mouseOut_restante() {
        d3.select("#tooltip_restante.hidden")
            .style("display", "none");
    }



        chaves = [0, 250, 500, 1000, 10000, 20000];
        console.log(chaves);

        const chartRadius = innerHeight / 2 - 225;

        console.log(d3.schemeGreys[9]);

        const color = ["#cc5c5c"];

        let svg4 = d3.select('#grafico_restante').append('svg')
            .attr('width', innerWidth/2)
            .attr('height', innerHeight)
            .append('g')
            .attr('transform', 'translate(' + innerWidth / 2 + ',' + innerHeight / 2.4 + ')');



        const PI = Math.PI,
            arcMinRadius = 11,
            arcPadding = 5, //colocar isto a depender do valor
            numTicks = 9; //divisão dos números

        let scale = d3.scaleLinear()
         .domain([0,chaves.length])
         .range([0, 3.6*PI/2]);


        //let ticks = scale.ticks(numTicks).slice(0, -1);

        let ticks = scale.ticks(numTicks).slice(0, -1);
        console.log(ticks)

        let keys = r.map((r, i) => r.valor);

        //número de arcos
        const numArcs = keys.length;
        console.log(r);
        const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;

        let arc = d3.arc()
            .innerRadius((r, i) => getInnerRadius(i))
            .outerRadius((r, i) => getOuterRadius(i))
            .startAngle(0)
            .endAngle((r, i) => {
               // console.log(r);
                if(r===0){ return -0.8;}
               else{return r;}//scale(i)
                }
            )



        let axialAxis = svg4.append('g')
            .attr('class', 'a axis')
            .selectAll('g')
            .data(chaves)
            .enter()
            .append('g')
           // .attr('transform', r => 'rotate(' + (rad2deg(scale(r)) - 90) + ')');
            .attr('transform', r =>
            { if(r==="Sem Dados"){
                return 'rotate(' +( rad2deg(-0.8)-90) + ')'

            } else
            {return 'rotate(' +( rad2deg(scale(chaves.indexOf(r)))-90) + ')'}
               // console.log(r, scale(chaves.indexOf(r)));

            })

        axialAxis.append('line')
            .attr('x2', chartRadius)
            .style("stroke-dasharray", ("3, 3"));



        axialAxis.append('text')
            .attr('x', chartRadius + 10)
            .attr('y',  5)
            .style('font-family', 'IBM_Regular')
            .style('font-size','25px')
            .style('text-anchor', r => (scale(chaves.indexOf(r)) >= PI && scale(chaves.indexOf(r)) < 2 * PI ? 'end' : null))
            .attr('transform', r => 'rotate(' + (90 - rad2deg(scale(chaves.indexOf(r)))) + ',' + (chartRadius + 10) + ',0)')
            .text(r => r);
        console.log((90 - rad2deg(scale(chaves.indexOf(r)))) + ',' + (chartRadius + 10) );


    let eixo_sem_dados=svg4.append('g')
        .attr('class', 'a axis')
        .attr('transform','rotate(' +( rad2deg(-0.8)-90) + ')')

    eixo_sem_dados.append('line')
        .attr('x2', chartRadius)
        .style("stroke-dasharray", ("3, 3"));

    eixo_sem_dados.append('text')
        .attr('x', chartRadius-10)
        .attr('y',  5)
        .style('font-family', 'IBM_Regular')
        .style('font-size','25px')
        .attr('transform', r => 'rotate(' + (82 - rad2deg(scale(chaves.indexOf(r)))) + ',' + (chartRadius + 20) + ',0)')
        .text("sem dados");

    //arcos com os dados
        let arcs = svg4.append('g')
            .attr('class', 'data')
            .selectAll('path')
            .data(r)
            .enter()
            .append('path')
            .attr('class', 'arc')
            .style('fill', "#212121")
            .style("cursor","pointer")


        arcs.transition()
            .delay((r, i) => i * 200)
            .duration(500)
            .attrTween('d', arcTween);

        arcs.on('mousemove', mouseOver_restante)
        arcs.on('mouseout', mouseOut_restante)



        function arcTween(r, i) {
            //console.log(r.valor, scale(chaves.indexOf(r.valor)))
            let interpolate = d3.interpolate(0, scale(chaves.indexOf(r.valor)));//r.valor);
            // console.log(r.valor);
            return t => arc(interpolate(t), i);

        }


        function rad2deg(angle) {
            return angle * 180 / PI;
        }

        function getInnerRadius(index) {
            return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
        }

        function getOuterRadius(index) {
            return getInnerRadius(index) + arcWidth;
        }


}
