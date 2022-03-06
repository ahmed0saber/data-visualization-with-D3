d3.selectAll("p").style("font-size", function() {
    return Math.random() * 100 + "px";
});

d3.selectAll("p").style("color", function(d, i) {
    return i % 2 ? "#121212" : "#e2e2e2";
});
d3.selectAll("p").style("background-color", function(d, i) {
    return i % 2 ? "#e2e2e2" : "#121212";
});

d3.selectAll("h1")
    .data([18, 22, 26, 30, 34, 38])
        .style("font-size", function(d) { return d + "px"; });