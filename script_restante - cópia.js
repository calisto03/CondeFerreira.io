const url2 = "teste.csv"


d3.csv(url2, function (r) {
    return {
  /*      destinastario: String(r.destinastario),
        localizacao: String(r.local),
        valor: parseInt(r.valor),
        tipo: String(r.tipo),
*/

        name:String(r.name),
        value:parseInt(r.value),


    };



}).then(desenhaGraficoR);

function desenhaGraficoR(r) {

console.log(r);


    const width = 960,
        height = 500,
        chartRadius = height / 2 - 40;

    console.log(d3.schemeBrBG[6]);

    const color = d3.scaleOrdinal(d3.schemeBrBG[6]);

    let svg4 = d3.select('#grafico_restante').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');



    const PI = Math.PI,
        arcMinRadius = 10,
        arcPadding = 10,
        labelPadding = -5,
        numTicks = 10; //divisão dos números

    let scale = d3.scaleLinear()
        .domain([0, d3.max(r, r => r.value) * 1.1])
        .range([0, 2 * PI]);

    let ticks = scale.ticks(numTicks).slice(0, -1);

    let keys = r.map((r, i) => r.name);

    //número de arcos
    const numArcs = keys.length;

    const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;

    let arc = d3.arc()
        .innerRadius((r, i) => getInnerRadius(i))
        .outerRadius((r, i) => getOuterRadius(i))
        .startAngle(0)
        .endAngle((r, i) => scale(r))


    let radialAxis = svg4.append('g')
        .attr('class', 'r axis')
        .selectAll('g')
        .data(r)
        .enter()
        .append('g');

    radialAxis.append('circle')
        .attr('r', (r, i) => getOuterRadius(i) + arcPadding);

    radialAxis.append('text')
        .attr('x', labelPadding)
        .attr('y', (r, i) => -getOuterRadius(i) + arcPadding)
        .text(r.name);

    let axialAxis = svg4.append('g')
        .attr('class', 'a axis')
        .selectAll('g')
        .data(ticks)
        .enter()
        .append('g')
        .attr('transform', r => 'rotate(' + (rad2deg(scale(r)) - 90) + ')');

    axialAxis.append('line')
        .attr('x2', chartRadius);

    axialAxis.append('text')
        .attr('x', chartRadius + 10)
        .style('text-anchor', r => (scale(r) >= PI && scale(r) < 2 * PI ? 'end' : null))
        .attr('transform', r => 'rotate(' + (90 - rad2deg(scale(r))) + ',' + (chartRadius + 10) + ',0)')
        .text(r => r);

    //data arcs
    let arcs = svg4.append('g')
        .attr('class', 'data')
        .selectAll('path')
        .data(r)
        .enter()
        .append('path')
        .attr('class', 'arc')
        .style('fill', (r, i) => color(i))

    arcs.transition()
        .delay((r, i) => i * 200)
        .duration(1000)
        .attrTween('d', arcTween);

    arcs.on('mousemove', showTooltip)
    arcs.on('mouseout', hideTooltip)


    function arcTween(r, i) {
        let interpolate = d3.interpolate(0, r.value);
        return t => arc(interpolate(t), i);
    }

    function showTooltip(r) {
        tooltip.style('left', (d3.event.pageX + 10) + 'px')
            .style('top', (d3.event.pageY - 25) + 'px')
            .style('display', 'inline-block')
            .html(r.value);
    }

    function hideTooltip() {
        tooltip.style('display', 'none');
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
