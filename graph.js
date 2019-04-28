const n = 200;
const width = 4;

const bars = Array(n).fill(0)
  .map(() => Math.round(Math.random() * 20 + 100));

// setup rectangles
d3.select('#content').selectAll('rect')
  .data(bars).enter()
  .append('rect')
  .attr('x', (d, i) => (n * width) - i * width)
  .attr('y', d => 140 - d)
  .attr('width', width)
  .attr('height', d => d)
  .attr('class', 'future')
  .attr('id', (d, i) => `rect-${i}`);

let active = 0;
setInterval(() => {
  d3.select(`#rect-${n - active}`).attr('class', 'past');
  active += 1;
}, 100);