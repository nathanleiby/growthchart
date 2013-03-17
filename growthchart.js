/*
Ideas:
-Take a simply formatted JSON of expected growths, to plot x against y
-Work for weight vs age, height vs age, height vs weight, etc etc
-Work against various standards (CDC, WHO, national goverments)

Todos:
-Default is to select the last datum; highlight it and show tooltip
-Improved tickmarks
-Labels on the lines, or a legend (%tile, malnourished/severely/normal); color for different lines
-Support for ages 5 years to 20 years
-Improve tooltip style
// http://rveciana.github.com/geoexamples/d3js/d3js_electoral_map/tooltipCode.html#
// http://rveciana.github.com/geoexamples/?page=d3js/d3js_electoral_map/simpleTooltipCode.html
// http://bl.ocks.org/biovisualize/2973775

Other Growth charts:
https://wiki.openmrs.org/display/docs/Growth+Chart+Module
http://www.cdc.gov/growthcharts/
http://www.cdc.gov/growthcharts/2000growthchart-us.pdf
  -> page 138, table 9 (weight vs age, birth to 36 months)
  -> page 143, table 14 (weight vs age, 2 to 20 years)

Online Calc
http://www.medcalc.com/growth/

UK
http://www.rcpch.ac.uk/child-health/research-projects/uk-who-growth-charts/uk-who-growth-charts 
*/



function display_growth_chart(patient, el) {

  // Growth chart baselines
  // Based on Haiti child growth chart from age 0 to 5 years (60 months)

  // Needs meta data to lay out which lines should exist and what their names are
  var haitiMeta = {
    "lines": [{
      "tag":"normal",
      "name":"Normal"
    }, {
      "tag":"mal",
      "name":"Malnourished"
    }, {
      "tag":"smal",
      "name":"Severely Malnourished"
    }]
  };
  var haitiData = [{"Month":0,"normal":3.4,"mal":2.4,"smal":2},{"Month":6,"normal":8,"mal":5.5,"smal":4.6},{"Month":12,"normal":10.3,"mal":7.8,"smal":6.5},{"Month":18,"normal":11.5,"mal":8.7,"smal":7.3},{"Month":24,"normal":12.5,"mal":9.6,"smal":8.1},{"Month":30,"normal":13.7,"mal":10.5,"smal":9},{"Month":36,"normal":14.8,"mal":11.4,"smal":9.8},{"Month":42,"normal":15.7,"mal":12,"smal":10.3},{"Month":48,"normal":16.7,"mal":12.8,"smal":10.9},{"Month":54,"normal":17.8,"mal":13.5,"smal":11.5},{"Month":60,"normal":18.7,"mal":14.2,"smal":12}];

  var haiti = {
    "meta" : haitiMeta,
    "data" : haitiData
  };

  // Create the lines
  // 
  // json includes "meta" (to tag+name the lines, specify measurement type) 
  //  and "data" (containing age in months vs measurement)
  function createLines(json) {
    var meta = json.meta;
    var data = json.data;

    console.log("createLines()");
    console.log(meta);
    var newLines = [];

    for (var i=0; i < meta.lines.length; i++) {
      // Get the tag
      var lineTag = meta.lines[i].tag;
      console.log(lineTag);

      newLines.push([]);
      // Generate the list of data (month, measurement)
      for (var j=0; j < data.length; j++) {
        // Assumes data has a "Month" tag in each element 
        newLines[i].push([data[j]["Month"], data[j][lineTag]]);
      }
      console.log(newLines);
    }
    return newLines;
  }

  // var data = createLines(haiti);
  console.log(wfa_0_to_5);
  var data = createLines(wfa_0_to_5);

  // Boundaries for graph, based on growth chart bounds
  var yMax = 20; // weight, in kg
  var xMax = 60; // time, in # of months

  // Graph formatting, in pixels
  var width = 625;
  var height = 350;
  var padding = 50;

  // Graph scale; domain and range
  var xScale = d3.scale.linear()
    .domain([0, xMax])
    // .range([0, width]);
    .range([padding, width - padding]);

  var yScale = d3.scale.linear()
    .domain([0, yMax])
    // .range([height, 0]);
    .range([height - padding, padding]);

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
    .attr("width", width*2)
    .attr("height", height);

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

  // svg.append("text")
  //   .attr("text-anchor", "middle")
  //   .attr("transform", "translate("+ (width/2) +","+(height-(padding/3))+")")  
  //   .text("Age (months)");

  // Patient's data

  // Add line for the patient's growth
  var linesP = svg.selectAll("pG")
    .data([patient])
    .attr("class", "pG")
    .enter();
  linesP.append("path")
    .attr("class", "pLine")
    .attr("d", line);

  // Dots at each data point
  var dots = svg.selectAll("dot")
    .data(patient)
    .enter()
    .append("circle")
    .attr("class", "dot")
  // .on("mouseover", mouseoverDot)
  .call(dotHandler(function(d, i) {
    // console.log('helper', el);
    return tooltipText(d);
  }))
  // .on("mouseout", mouseoutDot)
  .attr("cx", function(d, i) {
    return xScale(d[0]);
  })
    .attr("cy", function(d, i) {
    return yScale(d[1]);
  })
  //   .attr("r", function(d) {
  //   return 1;
  // })
    .attr("r", 4);

  // Add axes

  // x-axis
  var xAxis = d3.svg.axis();
  xAxis.scale(d3.scale.linear()
    .domain([0, xMax])
    .range([0, width - padding*2]));
  xAxis.orient("bottom")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + "," + (height - padding) + ")")
    .call(xAxis);

  // y-axis
  var yAxis = d3.svg.axis()
    .scale(d3.scale.linear()
    .domain([0, yMax])
    .range([height-padding, 0]));

  yAxis.orient("left")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

  svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
          .attr("transform", function(d) {
             return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
         });

  // Axes text
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (padding/3) +","+(height-padding)/2+")rotate(-90)")
    .text("Weight (kg)");

  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (width/2) +","+(height-(padding/3))+")")
    .text("Age (months)");

  // Extremity labels (Normal, Malnourished, and Severely Malnourished)
  svg.append("text")
    .attr("class","line-label")
    .attr("transform", "translate("+ (width-padding+5) +","+(100)+")")
    .text("Normal");

  svg.append("text")
    .attr("class","line-label")
    .attr("transform", "translate("+ (width-padding+5) +","+(140)+")")
    .text("Malnourished");

  svg.append("text")
    .attr("class","line-label")
    .attr("transform", "translate("+ (width-padding+5) +","+(175)+")")
    .text("Severely Malnourished");

  var tooltipEl = svg.append("text")
    // .attr("class","tooltip")
    .attr("transform", "translate("+ (padding*2) +","+(padding)+")")
    .style("font-size","14px")
    .text("");

  function dotHandler(accessor) {
    return function(selection) {
      selection.on("mouseover", function(d, i) {
        // Select current dot, unselect others
        d3.selectAll("circle.dotSelected").attr("class", "dot");
        d3.select(this).attr("class", "dotSelected");

        // Add text using the accessor function
        var tooltipText = accessor(d, i) || '';
        tooltipEl.text(tooltipText);
      });
    };
  }

  function tooltipText(d) {
    var age_in_months = parseFloat(d[0]);
    var weight_in_kg = parseFloat(d[1]).toFixed(1);
    var textAge = 'Age: ' + getAgeText(age_in_months);
    var textweight = 'Weight: ' + weight_in_kg + 'kg';
    var text = textAge + '; ' + textweight;

    return text;
  }

  // @param months - age in months (float)
  // @return - age (<years>y, <months>m) (string)

  function getAgeText(months){
    var y = Math.floor(months / 12);
    var m = months - (y * 12);
    m = m.toFixed(1);

    if (y > 0) {
      return y + 'y, ' + m + 'm';
    } else {
      return m + 'm';
    }
  }
}

var wfa_0_to_5_meta = {
    "lines": [{
      "tag":"SD0",
      "name":"50th %-tile"
    }, {
      "tag":"SD1neg",
      "name":"?"
    }, {
      "tag":"SD2neg",
      "name":"?"
    }, {
      "tag":"SD3neg",
      "name":"?"
    }, {
      "tag":"SD3",
      "name":"?"
    }, {
      "tag":"SD2",
      "name":"?"
    }, {
      "tag":"SD1",
      "name":"?"
    }]
};
var wfa_0_to_5_data = [{
    "Month":"0",
    "L":"0.3487",
    "M":"3.3464",
    "S":"0.14602",
    "SD3neg":"2.1",
    "SD2neg":"2.5",
    "SD1neg":"2.9",
    "SD0":"3.3",
    "SD1":"3.9",
    "SD2":"4.4",
    "SD3":"5"
  },
  {
    "Month":"1",
    "L":"0.2297",
    "M":"4.4709",
    "S":"0.13395",
    "SD3neg":"2.9",
    "SD2neg":"3.4",
    "SD1neg":"3.9",
    "SD0":"4.5",
    "SD1":"5.1",
    "SD2":"5.8",
    "SD3":"6.6"
  },
  {
    "Month":"2",
    "L":"0.197",
    "M":"5.5675",
    "S":"0.12385",
    "SD3neg":"3.8",
    "SD2neg":"4.3",
    "SD1neg":"4.9",
    "SD0":"5.6",
    "SD1":"6.3",
    "SD2":"7.1",
    "SD3":"8"
  },
  {
    "Month":"3",
    "L":"0.1738",
    "M":"6.3762",
    "S":"0.11727",
    "SD3neg":"4.4",
    "SD2neg":"5",
    "SD1neg":"5.7",
    "SD0":"6.4",
    "SD1":"7.2",
    "SD2":"8",
    "SD3":"9"
  },
  {
    "Month":"4",
    "L":"0.1553",
    "M":"7.0023",
    "S":"0.11316",
    "SD3neg":"4.9",
    "SD2neg":"5.6",
    "SD1neg":"6.2",
    "SD0":"7",
    "SD1":"7.8",
    "SD2":"8.7",
    "SD3":"9.7"
  },
  {
    "Month":"5",
    "L":"0.1395",
    "M":"7.5105",
    "S":"0.1108",
    "SD3neg":"5.3",
    "SD2neg":"6",
    "SD1neg":"6.7",
    "SD0":"7.5",
    "SD1":"8.4",
    "SD2":"9.3",
    "SD3":"10.4"
  },
  {
    "Month":"6",
    "L":"0.1257",
    "M":"7.934",
    "S":"0.10958",
    "SD3neg":"5.7",
    "SD2neg":"6.4",
    "SD1neg":"7.1",
    "SD0":"7.9",
    "SD1":"8.8",
    "SD2":"9.8",
    "SD3":"10.9"
  },
  {
    "Month":"7",
    "L":"0.1134",
    "M":"8.297",
    "S":"0.10902",
    "SD3neg":"5.9",
    "SD2neg":"6.7",
    "SD1neg":"7.4",
    "SD0":"8.3",
    "SD1":"9.2",
    "SD2":"10.3",
    "SD3":"11.4"
  },
  {
    "Month":"8",
    "L":"0.1021",
    "M":"8.6151",
    "S":"0.10882",
    "SD3neg":"6.2",
    "SD2neg":"6.9",
    "SD1neg":"7.7",
    "SD0":"8.6",
    "SD1":"9.6",
    "SD2":"10.7",
    "SD3":"11.9"
  },
  {
    "Month":"9",
    "L":"0.0917",
    "M":"8.9014",
    "S":"0.10881",
    "SD3neg":"6.4",
    "SD2neg":"7.1",
    "SD1neg":"8",
    "SD0":"8.9",
    "SD1":"9.9",
    "SD2":"11",
    "SD3":"12.3"
  },
  {
    "Month":"10",
    "L":"0.082",
    "M":"9.1649",
    "S":"0.10891",
    "SD3neg":"6.6",
    "SD2neg":"7.4",
    "SD1neg":"8.2",
    "SD0":"9.2",
    "SD1":"10.2",
    "SD2":"11.4",
    "SD3":"12.7"
  },
  {
    "Month":"11",
    "L":"0.073",
    "M":"9.4122",
    "S":"0.10906",
    "SD3neg":"6.8",
    "SD2neg":"7.6",
    "SD1neg":"8.4",
    "SD0":"9.4",
    "SD1":"10.5",
    "SD2":"11.7",
    "SD3":"13"
  },
  {
    "Month":"12",
    "L":"0.0644",
    "M":"9.6479",
    "S":"0.10925",
    "SD3neg":"6.9",
    "SD2neg":"7.7",
    "SD1neg":"8.6",
    "SD0":"9.6",
    "SD1":"10.8",
    "SD2":"12",
    "SD3":"13.3"
  },
  {
    "Month":"13",
    "L":"0.0563",
    "M":"9.8749",
    "S":"0.10949",
    "SD3neg":"7.1",
    "SD2neg":"7.9",
    "SD1neg":"8.8",
    "SD0":"9.9",
    "SD1":"11",
    "SD2":"12.3",
    "SD3":"13.7"
  },
  {
    "Month":"14",
    "L":"0.0487",
    "M":"10.0953",
    "S":"0.10976",
    "SD3neg":"7.2",
    "SD2neg":"8.1",
    "SD1neg":"9",
    "SD0":"10.1",
    "SD1":"11.3",
    "SD2":"12.6",
    "SD3":"14"
  },
  {
    "Month":"15",
    "L":"0.0413",
    "M":"10.3108",
    "S":"0.11007",
    "SD3neg":"7.4",
    "SD2neg":"8.3",
    "SD1neg":"9.2",
    "SD0":"10.3",
    "SD1":"11.5",
    "SD2":"12.8",
    "SD3":"14.3"
  },
  {
    "Month":"16",
    "L":"0.0343",
    "M":"10.5228",
    "S":"0.11041",
    "SD3neg":"7.5",
    "SD2neg":"8.4",
    "SD1neg":"9.4",
    "SD0":"10.5",
    "SD1":"11.7",
    "SD2":"13.1",
    "SD3":"14.6"
  },
  {
    "Month":"17",
    "L":"0.0275",
    "M":"10.7319",
    "S":"0.11079",
    "SD3neg":"7.7",
    "SD2neg":"8.6",
    "SD1neg":"9.6",
    "SD0":"10.7",
    "SD1":"12",
    "SD2":"13.4",
    "SD3":"14.9"
  },
  {
    "Month":"18",
    "L":"0.0211",
    "M":"10.9385",
    "S":"0.11119",
    "SD3neg":"7.8",
    "SD2neg":"8.8",
    "SD1neg":"9.8",
    "SD0":"10.9",
    "SD1":"12.2",
    "SD2":"13.7",
    "SD3":"15.3"
  },
  {
    "Month":"19",
    "L":"0.0148",
    "M":"11.143",
    "S":"0.11164",
    "SD3neg":"8",
    "SD2neg":"8.9",
    "SD1neg":"10",
    "SD0":"11.1",
    "SD1":"12.5",
    "SD2":"13.9",
    "SD3":"15.6"
  },
  {
    "Month":"20",
    "L":"0.0087",
    "M":"11.3462",
    "S":"0.11211",
    "SD3neg":"8.1",
    "SD2neg":"9.1",
    "SD1neg":"10.1",
    "SD0":"11.3",
    "SD1":"12.7",
    "SD2":"14.2",
    "SD3":"15.9"
  },
  {
    "Month":"21",
    "L":"0.0029",
    "M":"11.5486",
    "S":"0.11261",
    "SD3neg":"8.2",
    "SD2neg":"9.2",
    "SD1neg":"10.3",
    "SD0":"11.5",
    "SD1":"12.9",
    "SD2":"14.5",
    "SD3":"16.2"
  },
  {
    "Month":"22",
    "L":"-0.0028",
    "M":"11.7504",
    "S":"0.11314",
    "SD3neg":"8.4",
    "SD2neg":"9.4",
    "SD1neg":"10.5",
    "SD0":"11.8",
    "SD1":"13.2",
    "SD2":"14.7",
    "SD3":"16.5"
  },
  {
    "Month":"23",
    "L":"-0.0083",
    "M":"11.9514",
    "S":"0.11369",
    "SD3neg":"8.5",
    "SD2neg":"9.5",
    "SD1neg":"10.7",
    "SD0":"12",
    "SD1":"13.4",
    "SD2":"15",
    "SD3":"16.8"
  },
  {
    "Month":"24",
    "L":"-0.0137",
    "M":"12.1515",
    "S":"0.11426",
    "SD3neg":"8.6",
    "SD2neg":"9.7",
    "SD1neg":"10.8",
    "SD0":"12.2",
    "SD1":"13.6",
    "SD2":"15.3",
    "SD3":"17.1"
  },
  {
    "Month":"25",
    "L":"-0.0189",
    "M":"12.3502",
    "S":"0.11485",
    "SD3neg":"8.8",
    "SD2neg":"9.8",
    "SD1neg":"11",
    "SD0":"12.4",
    "SD1":"13.9",
    "SD2":"15.5",
    "SD3":"17.5"
  },
  {
    "Month":"26",
    "L":"-0.024",
    "M":"12.5466",
    "S":"0.11544",
    "SD3neg":"8.9",
    "SD2neg":"10",
    "SD1neg":"11.2",
    "SD0":"12.5",
    "SD1":"14.1",
    "SD2":"15.8",
    "SD3":"17.8"
  },
  {
    "Month":"27",
    "L":"-0.0289",
    "M":"12.7401",
    "S":"0.11604",
    "SD3neg":"9",
    "SD2neg":"10.1",
    "SD1neg":"11.3",
    "SD0":"12.7",
    "SD1":"14.3",
    "SD2":"16.1",
    "SD3":"18.1"
  },
  {
    "Month":"28",
    "L":"-0.0337",
    "M":"12.9303",
    "S":"0.11664",
    "SD3neg":"9.1",
    "SD2neg":"10.2",
    "SD1neg":"11.5",
    "SD0":"12.9",
    "SD1":"14.5",
    "SD2":"16.3",
    "SD3":"18.4"
  },
  {
    "Month":"29",
    "L":"-0.0385",
    "M":"13.1169",
    "S":"0.11723",
    "SD3neg":"9.2",
    "SD2neg":"10.4",
    "SD1neg":"11.7",
    "SD0":"13.1",
    "SD1":"14.8",
    "SD2":"16.6",
    "SD3":"18.7"
  },
  {
    "Month":"30",
    "L":"-0.0431",
    "M":"13.3",
    "S":"0.11781",
    "SD3neg":"9.4",
    "SD2neg":"10.5",
    "SD1neg":"11.8",
    "SD0":"13.3",
    "SD1":"15",
    "SD2":"16.9",
    "SD3":"19"
  },
  {
    "Month":"31",
    "L":"-0.0476",
    "M":"13.4798",
    "S":"0.11839",
    "SD3neg":"9.5",
    "SD2neg":"10.7",
    "SD1neg":"12",
    "SD0":"13.5",
    "SD1":"15.2",
    "SD2":"17.1",
    "SD3":"19.3"
  },
  {
    "Month":"32",
    "L":"-0.052",
    "M":"13.6567",
    "S":"0.11896",
    "SD3neg":"9.6",
    "SD2neg":"10.8",
    "SD1neg":"12.1",
    "SD0":"13.7",
    "SD1":"15.4",
    "SD2":"17.4",
    "SD3":"19.6"
  },
  {
    "Month":"33",
    "L":"-0.0564",
    "M":"13.8309",
    "S":"0.11953",
    "SD3neg":"9.7",
    "SD2neg":"10.9",
    "SD1neg":"12.3",
    "SD0":"13.8",
    "SD1":"15.6",
    "SD2":"17.6",
    "SD3":"19.9"
  },
  {
    "Month":"34",
    "L":"-0.0606",
    "M":"14.0031",
    "S":"0.12008",
    "SD3neg":"9.8",
    "SD2neg":"11",
    "SD1neg":"12.4",
    "SD0":"14",
    "SD1":"15.8",
    "SD2":"17.8",
    "SD3":"20.2"
  },
  {
    "Month":"35",
    "L":"-0.0648",
    "M":"14.1736",
    "S":"0.12062",
    "SD3neg":"9.9",
    "SD2neg":"11.2",
    "SD1neg":"12.6",
    "SD0":"14.2",
    "SD1":"16",
    "SD2":"18.1",
    "SD3":"20.4"
  },
  {
    "Month":"36",
    "L":"-0.0689",
    "M":"14.3429",
    "S":"0.12116",
    "SD3neg":"10",
    "SD2neg":"11.3",
    "SD1neg":"12.7",
    "SD0":"14.3",
    "SD1":"16.2",
    "SD2":"18.3",
    "SD3":"20.7"
  },
  {
    "Month":"37",
    "L":"-0.0729",
    "M":"14.5113",
    "S":"0.12168",
    "SD3neg":"10.1",
    "SD2neg":"11.4",
    "SD1neg":"12.9",
    "SD0":"14.5",
    "SD1":"16.4",
    "SD2":"18.6",
    "SD3":"21"
  },
  {
    "Month":"38",
    "L":"-0.0769",
    "M":"14.6791",
    "S":"0.1222",
    "SD3neg":"10.2",
    "SD2neg":"11.5",
    "SD1neg":"13",
    "SD0":"14.7",
    "SD1":"16.6",
    "SD2":"18.8",
    "SD3":"21.3"
  },
  {
    "Month":"39",
    "L":"-0.0808",
    "M":"14.8466",
    "S":"0.12271",
    "SD3neg":"10.3",
    "SD2neg":"11.6",
    "SD1neg":"13.1",
    "SD0":"14.8",
    "SD1":"16.8",
    "SD2":"19",
    "SD3":"21.6"
  },
  {
    "Month":"40",
    "L":"-0.0846",
    "M":"15.014",
    "S":"0.12322",
    "SD3neg":"10.4",
    "SD2neg":"11.8",
    "SD1neg":"13.3",
    "SD0":"15",
    "SD1":"17",
    "SD2":"19.3",
    "SD3":"21.9"
  },
  {
    "Month":"41",
    "L":"-0.0883",
    "M":"15.1813",
    "S":"0.12373",
    "SD3neg":"10.5",
    "SD2neg":"11.9",
    "SD1neg":"13.4",
    "SD0":"15.2",
    "SD1":"17.2",
    "SD2":"19.5",
    "SD3":"22.1"
  },
  {
    "Month":"42",
    "L":"-0.092",
    "M":"15.3486",
    "S":"0.12425",
    "SD3neg":"10.6",
    "SD2neg":"12",
    "SD1neg":"13.6",
    "SD0":"15.3",
    "SD1":"17.4",
    "SD2":"19.7",
    "SD3":"22.4"
  },
  {
    "Month":"43",
    "L":"-0.0957",
    "M":"15.5158",
    "S":"0.12478",
    "SD3neg":"10.7",
    "SD2neg":"12.1",
    "SD1neg":"13.7",
    "SD0":"15.5",
    "SD1":"17.6",
    "SD2":"20",
    "SD3":"22.7"
  },
  {
    "Month":"44",
    "L":"-0.0993",
    "M":"15.6828",
    "S":"0.12531",
    "SD3neg":"10.8",
    "SD2neg":"12.2",
    "SD1neg":"13.8",
    "SD0":"15.7",
    "SD1":"17.8",
    "SD2":"20.2",
    "SD3":"23"
  },
  {
    "Month":"45",
    "L":"-0.1028",
    "M":"15.8497",
    "S":"0.12586",
    "SD3neg":"10.9",
    "SD2neg":"12.4",
    "SD1neg":"14",
    "SD0":"15.8",
    "SD1":"18",
    "SD2":"20.5",
    "SD3":"23.3"
  },
  {
    "Month":"46",
    "L":"-0.1063",
    "M":"16.0163",
    "S":"0.12643",
    "SD3neg":"11",
    "SD2neg":"12.5",
    "SD1neg":"14.1",
    "SD0":"16",
    "SD1":"18.2",
    "SD2":"20.7",
    "SD3":"23.6"
  },
  {
    "Month":"47",
    "L":"-0.1097",
    "M":"16.1827",
    "S":"0.127",
    "SD3neg":"11.1",
    "SD2neg":"12.6",
    "SD1neg":"14.3",
    "SD0":"16.2",
    "SD1":"18.4",
    "SD2":"20.9",
    "SD3":"23.9"
  },
  {
    "Month":"48",
    "L":"-0.1131",
    "M":"16.3489",
    "S":"0.12759",
    "SD3neg":"11.2",
    "SD2neg":"12.7",
    "SD1neg":"14.4",
    "SD0":"16.3",
    "SD1":"18.6",
    "SD2":"21.2",
    "SD3":"24.2"
  },
  {
    "Month":"49",
    "L":"-0.1165",
    "M":"16.515",
    "S":"0.12819",
    "SD3neg":"11.3",
    "SD2neg":"12.8",
    "SD1neg":"14.5",
    "SD0":"16.5",
    "SD1":"18.8",
    "SD2":"21.4",
    "SD3":"24.5"
  },
  {
    "Month":"50",
    "L":"-0.1198",
    "M":"16.6811",
    "S":"0.1288",
    "SD3neg":"11.4",
    "SD2neg":"12.9",
    "SD1neg":"14.7",
    "SD0":"16.7",
    "SD1":"19",
    "SD2":"21.7",
    "SD3":"24.8"
  },
  {
    "Month":"51",
    "L":"-0.123",
    "M":"16.8471",
    "S":"0.12943",
    "SD3neg":"11.5",
    "SD2neg":"13.1",
    "SD1neg":"14.8",
    "SD0":"16.8",
    "SD1":"19.2",
    "SD2":"21.9",
    "SD3":"25.1"
  },
  {
    "Month":"52",
    "L":"-0.1262",
    "M":"17.0132",
    "S":"0.13005",
    "SD3neg":"11.6",
    "SD2neg":"13.2",
    "SD1neg":"15",
    "SD0":"17",
    "SD1":"19.4",
    "SD2":"22.2",
    "SD3":"25.4"
  },
  {
    "Month":"53",
    "L":"-0.1294",
    "M":"17.1792",
    "S":"0.13069",
    "SD3neg":"11.7",
    "SD2neg":"13.3",
    "SD1neg":"15.1",
    "SD0":"17.2",
    "SD1":"19.6",
    "SD2":"22.4",
    "SD3":"25.7"
  },
  {
    "Month":"54",
    "L":"-0.1325",
    "M":"17.3452",
    "S":"0.13133",
    "SD3neg":"11.8",
    "SD2neg":"13.4",
    "SD1neg":"15.2",
    "SD0":"17.3",
    "SD1":"19.8",
    "SD2":"22.7",
    "SD3":"26"
  },
  {
    "Month":"55",
    "L":"-0.1356",
    "M":"17.5111",
    "S":"0.13197",
    "SD3neg":"11.9",
    "SD2neg":"13.5",
    "SD1neg":"15.4",
    "SD0":"17.5",
    "SD1":"20",
    "SD2":"22.9",
    "SD3":"26.3"
  },
  {
    "Month":"56",
    "L":"-0.1387",
    "M":"17.6768",
    "S":"0.13261",
    "SD3neg":"12",
    "SD2neg":"13.6",
    "SD1neg":"15.5",
    "SD0":"17.7",
    "SD1":"20.2",
    "SD2":"23.2",
    "SD3":"26.6"
  },
  {
    "Month":"57",
    "L":"-0.1417",
    "M":"17.8422",
    "S":"0.13325",
    "SD3neg":"12.1",
    "SD2neg":"13.7",
    "SD1neg":"15.6",
    "SD0":"17.8",
    "SD1":"20.4",
    "SD2":"23.4",
    "SD3":"26.9"
  },
  {
    "Month":"58",
    "L":"-0.1447",
    "M":"18.0073",
    "S":"0.13389",
    "SD3neg":"12.2",
    "SD2neg":"13.8",
    "SD1neg":"15.8",
    "SD0":"18",
    "SD1":"20.6",
    "SD2":"23.7",
    "SD3":"27.2"
  },
  {
    "Month":"59",
    "L":"-0.1477",
    "M":"18.1722",
    "S":"0.13453",
    "SD3neg":"12.3",
    "SD2neg":"14",
    "SD1neg":"15.9",
    "SD0":"18.2",
    "SD1":"20.8",
    "SD2":"23.9",
    "SD3":"27.6"
  },
  {
    "Month":"60",
    "L":"-0.1506",
    "M":"18.3366",
    "S":"0.13517",
    "SD3neg":"12.4",
    "SD2neg":"14.1",
    "SD1neg":"16",
    "SD0":"18.3",
    "SD1":"21",
    "SD2":"24.2",
    "SD3":"27.9"
  }
];

var wfa_0_to_5 = {
  "meta" : wfa_0_to_5_meta,
  "data" : wfa_0_to_5_data
};