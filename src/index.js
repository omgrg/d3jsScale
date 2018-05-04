import * as d3 from 'd3';

let max = 11;
let data = [];

for (let i = 1; i < max; i++) {
    data.push(i);
}

let linear = d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range([1, 100]);

function render(data, scale, selector) {
    d3.select(selector)
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .classed('cell', true)
        .style("display", "inline-block")
        .text(function (d) {
            return d;
        })
}


render(data, linear, "#linear");





