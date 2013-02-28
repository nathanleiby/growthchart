/*
Ideas:
-Take a simply formatted JSON of expected growths, to plot x against y
-Work for weight vs age, height vs age, height vs weight, etc etc
-Work against various standards (CDC, WHO, national goverments)
*/

function display_growth_chart(patient, el) {

  // Growth chart baselines
  // Based on Haiti child growth chart from age 0 to 5 years (60 months)
  var normal = [
    [0, 3.4],
    [6, 8],
    [12, 10.3],
    [18, 11.5],
    [24, 12.5],
    [30, 13.7],
    [36, 14.8],
    [42, 15.7],
    [48, 16.7],
    [54, 17.8],
    [60, 18.7]
  ];
  var malnourished = [
    [0, 2.4],
    [6, 5.5],
    [12, 7.8],
    [18, 8.7],
    [24, 9.6],
    [30, 10.5],
    [36, 11.4],
    [42, 12],
    [48, 12.8],
    [54, 13.5],
    [60, 14.2]
  ];
  var severely_malnourished = [
    [0, 2],
    [6, 4.6],
    [12, 6.5],
    [18, 7.3],
    [24, 8.1],
    [30, 9],
    [36, 9.8],
    [42, 10.3],
    [48, 10.9],
    [54, 11.5],
    [60, 12]
  ];

  var data = [
  normal,
  malnourished,
  severely_malnourished, ];

  // Boundaries for graph, based on growth chart bounds
  var yMax = 20; // weight, in kg
  var xMax = 60; // time, in # of months

  // Graph formatting, in pixels
  var WIDTH = 625;
  var HEIGHT = 350;
  var PADDING = 1;

  // Graph scale; domain and range
  var xScale = d3.scale.linear()
    .domain([0, xMax])
    .range([0, WIDTH]);

  var yScale = d3.scale.linear()
    .domain([0, yMax])
    .range([HEIGHT, 0]);

  // Line generating function
  var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d, i) {
    return xScale(d[0]);
  })
    .y(function(d) {
    return yScale(d[1]);
  });

  // Area under the curve, for highlighting regions
  var area = d3.svg.area()
    .interpolate("basis")
    .x(line.x())
    .y1(line.y())
    .y0(yScale(0));

  var svg = d3.select(el).append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT);

  // Baseline growth curves
  var lines = svg.selectAll("g")
    .data(data)
    .enter();

  lines.append("path")
    .attr("class", "area")
    .attr("d", area);

  lines.append("path")
    .attr("class", "line")
    .attr("d", line);


  // Patient's data

  // Dots at each data point
  svg.selectAll("dot")
    .data(patient)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", function(d, i) {
    return xScale(d[0]);
  })
    .attr("cy", function(d, i) {
    return yScale(d[1]);
  })
    .attr("r", function(d) {
    return 4;
  });

  // Add line for the patient's growth
  var linesP = svg.selectAll("pG")
    .data([patient])
    .enter();
  linesP.append("path")
    .attr("class", "line")
    .attr("d", line);

  // Add axes

  // x-axis
  var xAxis = d3.svg.axis();
  xAxis.scale(d3.scale.linear()
    .domain([0, xMax])
    .range([0, WIDTH]));
  xAxis.orient("top")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (HEIGHT - PADDING) + ")")
    .call(xAxis);

  // y-axis
  var yAxis = d3.svg.axis()
    .scale(d3.scale.linear()
    .domain([0, yMax])
    .range([HEIGHT, 0]));

  yAxis.orient("right")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .call(yAxis);
}