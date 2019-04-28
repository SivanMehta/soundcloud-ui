const n = 100;
const width = 4;

const bars = Array(n).fill(0)
  .map((_, i) => ({
    i,
    height: Math.round(Math.random() * 20 + 100)
  }));


// setup rectangles
d3.select('#content').selectAll('rect')
  .data(bars).enter()
  .append('rect')
  .attr('x', d => (n * width) - d.i * width)
  .attr('y', d => 140 - d.height)
  .attr('width', width)
  .attr('height', d => d.height)
  .attr('class', 'future')
  .attr('id', d => `rect-${d.i}`)


let active = 0;
setInterval(() => {
  d3.select(`#rect-${n - active}`).attr('class', 'past');
  active += 1;
}, 500);