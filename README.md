growthchart
===========

A visual tool used by doctors to monitor a child's nutrition and health.

Demo:

[Demo](http://nathanleiby.github.com/growthchart/)

Screenshot:

![Example](https://raw.github.com/nathanleiby/growthchart/gh-pages/screenshot/growthChart_0_to_5.png)

Ideas:

- Work for weight vs age, height vs age, height vs weight, etc etc
- Work against various standards (CDC, WHO, national goverments)

Todos:

- Clarify which chart is which. (and if dataset is for boys and/or girls)
- Smoothly change between charts ([How to dynamically add data to a chart](http://jsfiddle.net/mbeasley183/DbXhL/))
- Default is to select the last datum; highlight it and show tooltip
- Improved tickmarks
- Labels on the lines, or a legend (%tile, malnourished/severely/normal); color for different lines
- Improve tooltip style... [1](http://rveciana.github.com/geoexamples/d3js/d3js_electoral_map/tooltipCode.html#), [2](http://rveciana.github.com/geoexamples/?page=d3js/d3js_electoral_map/simpleTooltipCode.html), [3](http://bl.ocks.org/biovisualize/2973775)

Other Growth charts:

- [OpenMRS Growth Chart module](https://wiki.openmrs.org/display/docs/Growth+Chart+Module)
- [CDC](http://www.cdc.gov/growthcharts/), [CDC Pdf](http://www.cdc.gov/growthcharts/2000growthchart-us.pdf)
    - page 138, table 9 (weight vs age, birth to 36 months)
    - page 143, table 14 (weight vs age, 2 to 20 years)
- [Online MedCalc](http://www.medcalc.com/growth/)
- [UK Growth Charts](http://www.rcpch.ac.uk/child-health/research-projects/uk-who-growth-charts/uk-who-growth-charts)

Thank yous:

- to @ewheeler and the [PyGrowup](https://github.com/ewheeler/pygrowup) project for sharing the method to pre-process the WHO/CDC measurement data into json format.