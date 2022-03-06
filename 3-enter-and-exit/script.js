/*     If p is not found, create it     */
d3.select(".p-container")
.selectAll("p")
.data([1, 2, 3, 4, 5, 6])
.enter().append("p")
    .text(function(d) { return "Loading " + d + " !"; });


/*     if h1 is found, update it     */
var h1 = d3.select(".h1-container")
.selectAll("h1")
.data([2, 4, 8, 16, 32, 64])
    .text(function(d) { return d; });

p.enter().append("h1")
    .text(function(d) { return d; });

p.exit().remove();