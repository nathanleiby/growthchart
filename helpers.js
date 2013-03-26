// Pre-process the WHO data, removes info not need to draw the growth chart
function lightenJson(json) {
  var newJson = [];
  for (var i=0; i < json.length; i+=6) {
    newObj = {
      "Month" : json[i].Month,
        "SD0": json[i].SD0,
        "SD1": json[i].SD1,
        "SD2": json[i].SD2,
        "SD3": json[i].SD3,
        "SD1neg": json[i].SD1neg,
        "SD2neg": json[i].SD2neg,
        "SD3neg": json[i].SD3neg
    };
    newJson.push(newObj);
    console.log(newObj.Month);
  }
  console.log ( JSON.stringify(newJson) );
  return newJson;
}