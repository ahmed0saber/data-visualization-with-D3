/*     Without D3.js     */ 
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs.item(i);
    paragraph.style.setProperty("color", "#099", null);
    paragraph.style.setProperty("font-size", "24px", null);
}

/*     With D3.js     */
d3.selectAll("p").style("color", "red");
d3.select("body").style("background-color", "Black");