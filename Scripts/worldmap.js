

// Function to initialize the map and render the GeoJSON
function initializeWorldMap(svg, projection) {
    // Set up a path generator using the projection
    const path = d3.geoPath().projection(projection);

    // This function will load the GeoJSON data
    d3.json('https://raw.githubusercontent.com/BenChurchillUK/BenChurchillUK.github.io/refs/heads/main/Assets/worldmap.json')
        .then(function(data) {
            // Render the GeoJSON data (e.g., country borders or areas)
            svg.selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', '#ccc')
                .attr('stroke', '#333')
                .attr('stroke-width', 0.5);
        })
        .catch(function(error) {
            console.error("Error loading GeoJSON:", error);
        });
}
