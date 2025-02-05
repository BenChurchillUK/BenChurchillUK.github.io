// Economic World Map

let EconWorldMapWidth = 1000;
let EconWorldMapHeight = 800;

let EconWorldMapProjection = d3
    .geoEquirectangular()
;

let EconWorlMapPath = ds
    .geoPath()
    .projection(EconomicWorldMapProjection)
;

let EconWorldMapSVG = d3.select("#svganchor")
    .append("svg")
    .attr("width", EconWorldMapWidth)
    .attr("height", EconWorldMapHeight)
;

d3.json("https://raw.githubusercontent.com/BenChurchillUK/BenChurchillUK.github.io/refs/heads/main/Assets/worldmap.json", (json) => {

svg.selectAll("EconWorldMapPath")
    .data(json.features)
    .enter()
    .append("EconWorldMapPath")
    .attr("d", path)
    .attr("stroke", "dimgray")
    .attr("fill", (d, i) => {return color(i)});
});

