// Economic World Map

const color = d3.scaleOrdinal(d3.schemeCategory10);

let EconWorldMapWidth = 1000;
let EconWorldMapHeight = 800;

let EconWorldMapProjection = d3
    .geoEquirectangular()
    .scale(150)
    .translate([EconWorldMapWidth / 2, EconWorldMapHeight / 2])
;

let EconWorlMapPath = d3
    .geoPath()
    .projection(EconWorldMapProjection)
;

let EconWorldMapSVG = d3.select("#svganchor")
    .append("svg")
    .attr("width", EconWorldMapWidth)
    .attr("height", EconWorldMapHeight)
;

d3.json("https://raw.githubusercontent.com/BenChurchillUK/BenChurchillUK.github.io/refs/heads/main/Assets/worldmap.json")
    .then(function(json) {
        const featureCollection = {
            type: "FeatureCollection",
            features: json.geometries.map(geometry => ({
                type: "Feature",
                geometry: geometry,
                properties: {}
            }))
        };
        EconWorldMapSVG.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", EconWorldMapPath)
            .attr("stroke", "dimgray")
            .attr("fill", (d, i) => {return color(i); });
    })
    .catch(function(error) {
        console.error("Error loading GeoJSON: ", error);
});

