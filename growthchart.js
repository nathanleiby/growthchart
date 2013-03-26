////////////////////////////////
// Data
////////////////////////////////

// Haiti child growth chart from age 0 to 5 years (60 months)
var wfa_haiti_0_to_5_meta = {
  "title": "Weight vs Age (Haitian Ministry of Health)",
  "lines": [{
    "tag":"normal",
    "name":"Normal"
    // "class":"line-normal"  // TODO: Add color based on line class, e.g.
    // http://www.who.int/childgrowth/standards/cht_wfa_boys_p_0_5.pdf
  }, {
    "tag":"mal",
    "name":"Malnourished"
  }, {
    "tag":"smal",
    "name":"Severely Malnourished"
  }]
};

var wfa_haiti_0_to_5_values = [{"Month":0,"normal":3.4,"mal":2.4,"smal":2},{"Month":6,"normal":8,"mal":5.5,"smal":4.6},{"Month":12,"normal":10.3,"mal":7.8,"smal":6.5},{"Month":18,"normal":11.5,"mal":8.7,"smal":7.3},{"Month":24,"normal":12.5,"mal":9.6,"smal":8.1},{"Month":30,"normal":13.7,"mal":10.5,"smal":9},{"Month":36,"normal":14.8,"mal":11.4,"smal":9.8},{"Month":42,"normal":15.7,"mal":12,"smal":10.3},{"Month":48,"normal":16.7,"mal":12.8,"smal":10.9},{"Month":54,"normal":17.8,"mal":13.5,"smal":11.5},{"Month":60,"normal":18.7,"mal":14.2,"smal":12}];

var wfa_all_0_to_5_meta = {
    "lines": [{
      "tag":"SD0",
      "name":"50th"
    }, {
      "tag":"SD1neg",
      "name":"15th"
    }, {
      "tag":"SD2neg",
      "name":"2nd"
    }, {
      "tag":"SD2",
      "name":"98th"
    }, {
      "tag":"SD1",
      "name":"85th"
    }, {
      "tag":"SD3",
      "name":"99.9th"
    }, {
      "tag":"SD3neg",
      "name":"0.1th"
    }]
};

var wfa_boys_0_to_5_meta = {};
wfa_boys_0_to_5_meta.lines =  wfa_all_0_to_5_meta.lines.slice();
wfa_boys_0_to_5_meta.title = "Weight vs Age, Boys (WHO)";

var wfa_girls_0_to_5_meta = {};
wfa_girls_0_to_5_meta.lines = wfa_all_0_to_5_meta.lines.slice();
wfa_girls_0_to_5_meta.title = "Weight vs Age, Girls (WHO)";

var wfa_boys_0_to_5_zscores = [{"Month":"0","SD0":"3.3","SD1":"3.9","SD2":"4.4","SD3":"5","SD1neg":"2.9","SD2neg":"2.5","SD3neg":"2.1"},{"Month":"6","SD0":"7.9","SD1":"8.8","SD2":"9.8","SD3":"10.9","SD1neg":"7.1","SD2neg":"6.4","SD3neg":"5.7"},{"Month":"12","SD0":"9.6","SD1":"10.8","SD2":"12","SD3":"13.3","SD1neg":"8.6","SD2neg":"7.7","SD3neg":"6.9"},{"Month":"18","SD0":"10.9","SD1":"12.2","SD2":"13.7","SD3":"15.3","SD1neg":"9.8","SD2neg":"8.8","SD3neg":"7.8"},{"Month":"24","SD0":"12.2","SD1":"13.6","SD2":"15.3","SD3":"17.1","SD1neg":"10.8","SD2neg":"9.7","SD3neg":"8.6"},{"Month":"30","SD0":"13.3","SD1":"15","SD2":"16.9","SD3":"19","SD1neg":"11.8","SD2neg":"10.5","SD3neg":"9.4"},{"Month":"36","SD0":"14.3","SD1":"16.2","SD2":"18.3","SD3":"20.7","SD1neg":"12.7","SD2neg":"11.3","SD3neg":"10"},{"Month":"42","SD0":"15.3","SD1":"17.4","SD2":"19.7","SD3":"22.4","SD1neg":"13.6","SD2neg":"12","SD3neg":"10.6"},{"Month":"48","SD0":"16.3","SD1":"18.6","SD2":"21.2","SD3":"24.2","SD1neg":"14.4","SD2neg":"12.7","SD3neg":"11.2"},{"Month":"54","SD0":"17.3","SD1":"19.8","SD2":"22.7","SD3":"26","SD1neg":"15.2","SD2neg":"13.4","SD3neg":"11.8"},{"Month":"60","SD0":"18.3","SD1":"21","SD2":"24.2","SD3":"27.9","SD1neg":"16","SD2neg":"14.1","SD3neg":"12.4"}];

var wfa_girls_0_to_5_zscores = [{"Month":"0","SD0":"3.2","SD1":"3.7","SD2":"4.2","SD3":"4.8","SD1neg":"2.8","SD2neg":"2.4","SD3neg":"2"},{"Month":"6","SD0":"7.3","SD1":"8.2","SD2":"9.3","SD3":"10.6","SD1neg":"6.5","SD2neg":"5.7","SD3neg":"5.1"},{"Month":"12","SD0":"8.9","SD1":"10.1","SD2":"11.5","SD3":"13.1","SD1neg":"7.9","SD2neg":"7","SD3neg":"6.3"},{"Month":"18","SD0":"10.2","SD1":"11.6","SD2":"13.2","SD3":"15.1","SD1neg":"9.1","SD2neg":"8.1","SD3neg":"7.2"},{"Month":"24","SD0":"11.5","SD1":"13","SD2":"14.8","SD3":"17","SD1neg":"10.2","SD2neg":"9","SD3neg":"8.1"},{"Month":"30","SD0":"12.7","SD1":"14.4","SD2":"16.5","SD3":"19","SD1neg":"11.2","SD2neg":"10","SD3neg":"8.9"},{"Month":"36","SD0":"13.9","SD1":"15.8","SD2":"18.1","SD3":"20.9","SD1neg":"12.2","SD2neg":"10.8","SD3neg":"9.6"},{"Month":"42","SD0":"15","SD1":"17.2","SD2":"19.8","SD3":"23","SD1neg":"13.1","SD2neg":"11.6","SD3neg":"10.3"},{"Month":"48","SD0":"16.1","SD1":"18.5","SD2":"21.5","SD3":"25.2","SD1neg":"14","SD2neg":"12.3","SD3neg":"10.9"},{"Month":"54","SD0":"17.2","SD1":"19.9","SD2":"23.2","SD3":"27.4","SD1neg":"14.9","SD2neg":"13","SD3neg":"11.5"},{"Month":"60","SD0":"18.2","SD1":"21.2","SD2":"24.9","SD3":"29.5","SD1neg":"15.8","SD2neg":"13.7","SD3neg":"12.1"}];

var wfa_all_2_to_20_meta = {
    "lines": [{
      "tag":"SD0",
      "name":"50th"
    }, {
      "tag":"SD1neg",
      "name":"15th"
    }, {
      "tag":"SD2neg",
      "name":"2nd"
    }, {
      "tag":"SD2",
      "name":"98th"
    }, {
      "tag":"SD1",
      "name":"85th"
    }]
};

var wfa_boys_2_to_20_meta = {};
wfa_boys_2_to_20_meta.lines =  wfa_all_2_to_20_meta.lines.slice();
wfa_boys_2_to_20_meta.title = "Weight vs Age, Boys (WHO)";

var wfa_girls_2_to_20_meta = {};
wfa_girls_2_to_20_meta.lines = wfa_all_2_to_20_meta.lines.slice();
wfa_girls_2_to_20_meta.title = "Weight vs Age, Girls (WHO)";


var wfa_boys_2_to_20_zscores = [{"Month":"24","SD0":"12.74154396","SD1":"14.21532326","SD2":"15.90176135","SD3":"16.00176135","SD1neg":"11.44953268","SD2neg":"10.3134521","SD3neg":"10.2134521"},{"Month":"30","SD0":"13.56088113","SD1":"15.16539607","SD2":"17.0482441","SD3":"17.1482441","SD1neg":"12.18399316","SD2neg":"10.99486974","SD3neg":"10.89486974"},{"Month":"36","SD0":"14.40262749","SD1":"16.17332831","SD2":"18.32604136","SD3":"18.42604136","SD1neg":"12.92615853","SD2neg":"11.68035377","SD3neg":"11.58035377"},{"Month":"42","SD0":"15.31940246","SD1":"17.29359916","SD2":"19.77985308","SD3":"19.87985308","SD1neg":"13.71762716","SD2neg":"12.39458741","SD3neg":"12.29458741"},{"Month":"48","SD0":"16.31676727","SD1":"18.52755122","SD2":"21.39314498","SD3":"21.49314498","SD1neg":"14.56144515","SD2neg":"13.13534759","SD3neg":"13.03534759"},{"Month":"54","SD0":"17.37906341","SD1":"19.85344512","SD2":"23.13280382","SD3":"23.23280382","SD1neg":"15.44658683","SD2neg":"13.89614955","SD3neg":"13.79614955"},{"Month":"60","SD0":"18.48592413","SD1":"21.24533795","SD2":"24.97339742","SD3":"25.07339742","SD1neg":"16.36102628","SD2neg":"14.6743454","SD3neg":"14.5743454"},{"Month":"66","SD0":"19.62136007","SD1":"22.68391352","SD2":"26.90679506","SD3":"27.00679506","SD1neg":"17.29711036","SD2neg":"15.47197177","SD3neg":"15.37197177"},{"Month":"72","SD0":"20.77769565","SD1":"24.16122597","SD2":"28.94287047","SD3":"29.04287047","SD1neg":"18.25264581","SD2neg":"16.29343858","SD3neg":"16.19343858"},{"Month":"78","SD0":"21.95644627","SD1":"25.68143461","SD2":"31.10489914","SD3":"31.20489914","SD1neg":"19.23001552","SD2neg":"17.1424779","SD3neg":"17.0424779"},{"Month":"84","SD0":"23.16741888","SD1":"27.25934859","SD2":"33.42183931","SD3":"33.52183931","SD1neg":"20.23462314","SD2neg":"18.01999012","SD3neg":"17.91999012"},{"Month":"90","SD0":"24.42648043","SD1":"28.91761256","SD2":"35.91989363","SD3":"36.01989363","SD1neg":"21.27340999","SD2neg":"18.92389907","SD3neg":"18.82389907"},{"Month":"96","SD0":"25.75256528","SD1":"30.682832","SD2":"38.61573728","SD3":"38.71573728","SD1neg":"22.35400207","SD2neg":"19.85099711","SD3neg":"19.75099711"},{"Month":"102","SD0":"27.16489199","SD1":"32.58111676","SD2":"41.51305975","SD3":"41.61305975","SD1neg":"23.48476421","SD2neg":"20.79977578","SD3neg":"20.69977578"},{"Month":"108","SD0":"28.68130005","SD1":"34.63411601","SD2":"44.60228289","SD3":"44.70228289","SD1neg":"24.67554679","SD2neg":"21.77291719","SD3neg":"21.67291719"},{"Month":"114","SD0":"30.31770417","SD1":"36.85635775","SD2":"47.86231032","SD3":"47.96231032","SD1neg":"25.9385471","SD2neg":"22.77876487","SD3neg":"22.67876487"},{"Month":"120","SD0":"32.08799062","SD1":"39.25396867","SD2":"51.26312894","SD3":"51.36312894","SD1neg":"27.28871732","SD2neg":"23.83169468","SD3neg":"23.73169468"},{"Month":"126","SD0":"34.00363017","SD1":"41.8243357","SD2":"54.768687","SD3":"54.868687","SD1neg":"28.74335551","SD2neg":"24.95151303","SD3neg":"24.85151303"},{"Month":"132","SD0":"36.07262569","SD1":"44.55627644","SD2":"58.33990117","SD3":"58.43990117","SD1neg":"30.32071425","SD2neg":"26.16193765","SD3neg":"26.06193765"},{"Month":"138","SD0":"38.2977703","SD1":"47.43048769","SD2":"61.93772664","SD3":"62.03772664","SD1neg":"32.03762582","SD2neg":"27.4881699","SD3neg":"27.3881699"},{"Month":"144","SD0":"40.67443658","SD1":"50.42017841","SD2":"65.52611747","SD3":"65.62611747","SD1neg":"33.90631241","SD2neg":"28.95364294","SD3neg":"28.85364294"},{"Month":"150","SD0":"43.18828419","SD1":"53.49184797","SD2":"69.07453919","SD3":"69.17453919","SD1neg":"35.93073636","SD2neg":"30.57616354","SD3neg":"30.47616354"},{"Month":"156","SD0":"45.81336172","SD1":"56.60616644","SD2":"72.55964094","SD3":"72.65964094","SD1neg":"38.10302583","SD2neg":"32.36382453","SD3neg":"32.26382453"},{"Month":"162","SD0":"48.51113138","SD1":"59.71894255","SD2":"75.9656937","SD3":"76.0656937","SD1neg":"40.40065252","SD2neg":"34.31117487","SD3neg":"34.21117487"},{"Month":"168","SD0":"51.23096332","SD1":"62.78224781","SD2":"79.283442","SD3":"79.383442","SD1neg":"42.78510332","SD2neg":"36.3961813","SD3neg":"36.2961813"},{"Month":"174","SD0":"53.91260737","SD1":"65.74590032","SD2":"82.50707085","SD3":"82.60707085","SD1neg":"45.20273363","SD2neg":"38.57852028","SD3neg":"38.47852028"},{"Month":"180","SD0":"56.49095862","SD1":"68.55964372","SD2":"85.62911332","SD3":"85.72911332","SD1neg":"47.58825704","SD2neg":"40.79979433","SD3neg":"40.69979433"},{"Month":"186","SD0":"58.90293208","SD1":"71.17635212","SD2":"88.63351461","SD3":"88.73351461","SD1neg":"49.87087488","SD2neg":"42.98648297","SD3neg":"42.88648297"},{"Month":"192","SD0":"61.09536847","SD1":"73.55619419","SD2":"91.48812818","SD3":"91.58812818","SD1neg":"51.98246986","SD2neg":"45.05675274","SD3neg":"44.95675274"},{"Month":"198","SD0":"63.03227756","SD1":"75.67109372","SD2":"94.13928494","SD3":"94.23928494","SD1neg":"53.8668701","SD2neg":"46.93178424","SD3neg":"46.83178424"},{"Month":"204","SD0":"64.69961427","SD1":"77.50797664","SD2":"96.51303247","SD3":"96.61303247","SD1neg":"55.48902733","SD2neg":"48.55085239","SD3neg":"48.45085239"},{"Month":"210","SD0":"66.10749114","SD1":"79.07043501","SD2":"98.5263538","SD3":"98.6263538","SD1neg":"56.84263826","SD2neg":"49.88585603","SD3neg":"49.78585603"},{"Month":"216","SD0":"67.28992603","SD1":"80.37970818","SD2":"100.109888","SD3":"100.209888","SD1neg":"57.95342903","SD2neg":"50.94885064","SD3neg":"50.84885064"},{"Month":"222","SD0":"68.30004741","SD1":"81.47603937","SD2":"101.2426422","SD3":"101.3426422","SD1neg":"58.87325135","SD2neg":"51.78594918","SD3neg":"51.68594918"},{"Month":"228","SD0":"69.19467288","SD1":"82.41925734","SD2":"102.0017012","SD3":"102.1017012","SD1neg":"59.65804088","SD2neg":"52.45212848","SD3neg":"52.35212848"},{"Month":"234","SD0":"69.99868896","SD1":"83.28486509","SD2":"102.6338067","SD3":"102.7338067","SD1neg":"60.32069255","SD2neg":"52.96184905","SD3neg":"52.86184905"},{"Month":"240","SD0":"70.6401583","SD1":"84.15253397","SD2":"103.6562615","SD3":"103.7562615","SD1neg":"60.7480483","SD2neg":"53.20582012","SD3neg":"53.10582012"}];

// Add scores for first few months
wfa_boys_2_to_20_zscores.unshift({"Month":"12","SD0":"9.6","SD1":"10.8","SD2":"12","SD3":"13.3","SD1neg":"8.6","SD2neg":"7.7","SD3neg":"6.9"});
wfa_boys_2_to_20_zscores.unshift({"Month":"0","SD0":"3.3","SD1":"3.9","SD2":"4.4","SD3":"5","SD1neg":"2.9","SD2neg":"2.5","SD3neg":"2.1"});

var wfa_girls_2_to_20_zscores = [{"Month":"24","SD0":"12.13455523","SD1":"13.57750725","SD2":"15.35055937","SD3":"15.45055937","SD1neg":"10.9403767","SD2neg":"9.937901169","SD3neg":"9.837901169"},{"Month":"30","SD0":"13.04357164","SD1":"14.69633381","SD2":"16.8025912","SD3":"16.9025912","SD1neg":"11.71348292","SD2neg":"10.62092247","SD3neg":"10.52092247"},{"Month":"36","SD0":"13.94108332","SD1":"15.8362764","SD2":"18.33747604","SD3":"18.43747604","SD1neg":"12.45491499","SD2neg":"11.25791103","SD3neg":"11.15791103"},{"Month":"42","SD0":"14.88121352","SD1":"17.04350911","SD2":"19.99493767","SD3":"20.09493767","SD1neg":"13.22581239","SD2neg":"11.91590689","SD3neg":"11.81590689"},{"Month":"48","SD0":"15.87823668","SD1":"18.32329308","SD2":"21.770078","SD3":"21.870078","SD1neg":"14.04719792","SD2neg":"12.62097577","SD3neg":"12.52097577"},{"Month":"54","SD0":"16.92826587","SD1":"19.66589723","SD2":"23.64387372","SD3":"23.74387372","SD1neg":"14.91847961","SD2neg":"13.37444473","SD3neg":"13.27444473"},{"Month":"60","SD0":"18.02313904","SD1":"21.06233679","SD2":"25.60125234","SD3":"25.70125234","SD1neg":"15.83036925","SD2neg":"14.16542684","SD3neg":"14.06542684"},{"Month":"66","SD0":"19.15831267","SD1":"22.51231308","SD2":"27.63994343","SD3":"27.73994343","SD1neg":"16.77330667","SD2neg":"14.97995142","SD3neg":"14.87995142"},{"Month":"72","SD0":"20.33635961","SD1":"24.02649066","SD2":"29.77274669","SD3":"29.87274669","SD1neg":"17.74233352","SD2neg":"15.80704096","SD3neg":"15.70704096"},{"Month":"78","SD0":"21.56748045","SD1":"25.62507246","SD2":"32.02515191","SD3":"32.12515191","SD1neg":"18.73922133","SD2neg":"16.64205394","SD3neg":"16.54205394"},{"Month":"84","SD0":"22.86804258","SD1":"27.33419293","SD2":"34.4300359","SD3":"34.5300359","SD1neg":"19.77253684","SD2neg":"17.48779851","SD3neg":"17.38779851"},{"Month":"90","SD0":"24.25789074","SD1":"29.18125559","SD2":"37.02095432","SD3":"37.12095432","SD1neg":"20.85624929","SD2neg":"18.35399393","SD3neg":"18.25399393"},{"Month":"96","SD0":"25.7570168","SD1":"31.19004861","SD2":"39.82530931","SD3":"39.92530931","SD1neg":"22.00741704","SD2neg":"19.25562704","SD3neg":"19.15562704"},{"Month":"102","SD0":"27.38203422","SD1":"33.37620657","SD2":"42.85851739","SD3":"42.95851739","SD1neg":"23.24342078","SD2neg":"20.21072492","SD3neg":"20.11072492"},{"Month":"108","SD0":"29.14291171","SD1":"35.74353404","SD2":"46.11981836","SD3":"46.21981836","SD1neg":"24.57913442","SD2neg":"21.23788449","SD3neg":"21.13788449"},{"Month":"114","SD0":"31.0403221","SD1":"38.28154072","SD2":"49.59012202","SD3":"49.69012202","SD1neg":"26.02435045","SD2neg":"22.3538413","SD3neg":"22.2538413"},{"Month":"120","SD0":"33.06392318","SD1":"40.96445094","SD2":"53.23192742","SD3":"53.33192742","SD1neg":"27.58170877","SD2neg":"23.5712415","SD3neg":"23.4712415"},{"Month":"126","SD0":"35.19176177","SD1":"43.75176806","SD2":"56.99120667","SD3":"57.09120667","SD1neg":"29.2453153","SD2neg":"24.89675936","SD3neg":"24.79675936"},{"Month":"132","SD0":"37.39088668","SD1":"46.59033849","SD2":"60.80098266","SD3":"60.90098266","SD1neg":"31.0001742","SD2neg":"26.32966449","SD3neg":"26.22966449"},{"Month":"138","SD0":"39.61914076","SD1":"49.41773412","SD2":"64.58622505","SD3":"64.68622505","SD1neg":"32.82249159","SD2neg":"27.86092721","SD3neg":"27.76092721"},{"Month":"144","SD0":"41.82797963","SD1":"52.16665724","SD2":"68.26963753","SD3":"68.36963753","SD1neg":"34.6808403","SD2neg":"29.47295578","SD3neg":"29.37295578"},{"Month":"150","SD0":"43.9661169","SD1":"54.77005588","SD2":"71.77775569","SD3":"71.87775569","SD1neg":"36.53810653","SD2neg":"31.14000049","SD3neg":"31.04000049"},{"Month":"156","SD0":"45.98368656","SD1":"57.16655602","SD2":"75.04679196","SD3":"75.14679196","SD1neg":"38.35407458","SD2neg":"32.82927624","SD3neg":"32.72927624"},{"Month":"162","SD0":"47.83661466","SD1":"59.30587195","SD2":"78.02749237","SD3":"78.12749237","SD1neg":"40.08844655","SD2neg":"34.50275596","SD3neg":"34.40275596"},{"Month":"168","SD0":"49.49075409","SD1":"61.15373456","SD2":"80.68842617","SD3":"80.78842617","SD1neg":"41.70404928","SD2neg":"36.11964182","SD3neg":"36.01964182"},{"Month":"174","SD0":"50.92540942","SD1":"62.69598376","SD2":"83.01692792","SD3":"83.11692792","SD1neg":"43.16994976","SD2neg":"37.63934319","SD3neg":"37.53934319"},{"Month":"180","SD0":"52.13568193","SD1":"63.94115411","SD2":"85.01754259","SD3":"85.11754259","SD1neg":"44.46420645","SD2neg":"39.02492942","SD3neg":"38.92492942"},{"Month":"186","SD0":"53.13326946","SD1":"64.92094368","SD2":"86.70802775","SD3":"86.80802775","SD1neg":"45.57601262","SD2neg":"40.24677361","SD3neg":"40.14677361"},{"Month":"192","SD0":"53.94543725","SD1":"65.68782092","SD2":"88.11404582","SD3":"88.21404582","SD1neg":"46.50702323","SD2neg":"41.28604697","SD3neg":"41.18604697"},{"Month":"198","SD0":"54.61223603","SD1":"66.30945493","SD2":"89.26422437","SD3":"89.36422437","SD1neg":"47.27162226","SD2neg":"42.13737262","SD3neg":"42.03737262"},{"Month":"204","SD0":"55.18216811","SD1":"66.86022818","SD2":"90.18732629","SD3":"90.28732629","SD1neg":"47.89575485","SD2neg":"42.80976027","SD3neg":"42.70976027"},{"Month":"210","SD0":"55.70623826","SD1":"67.41044379","SD2":"90.91218603","SD3":"91.01218603","SD1neg":"48.41378561","SD2neg":"43.32505513","SD3neg":"43.22505513"},{"Month":"216","SD0":"56.22969564","SD1":"68.01354196","SD2":"91.46923324","SD3":"91.56923324","SD1neg":"48.86276841","SD2neg":"43.71364084","SD3neg":"43.61364084"},{"Month":"222","SD0":"56.78026364","SD1":"68.69123689","SD2":"91.89073291","SD3":"91.99073291","SD1neg":"49.27350492","SD2neg":"44.00761877","SD3neg":"43.90761877"},{"Month":"228","SD0":"57.35175792","SD1":"69.41691302","SD2":"92.20698375","SD3":"92.30698375","SD1neg":"49.65769208","SD2neg":"44.23162211","SD3neg":"44.13162211"},{"Month":"234","SD0":"57.88333502","SD1":"70.09941558","SD2":"92.43808042","SD3":"92.53808042","SD1neg":"49.99033765","SD2neg":"44.39015972","SD3neg":"44.29015972"},{"Month":"240","SD0":"58.23651745","SD1":"70.56979731","SD2":"92.58734543","SD3":"92.68734543","SD1neg":"50.18707687","SD2neg":"44.44886549","SD3neg":"44.34886549"}];

// Add scores for first few months, from wfa_girls_0_to_5_zscores
wfa_girls_2_to_20_zscores.unshift({"Month":"12","SD0":"8.9","SD1":"10.1","SD2":"11.5","SD3":"13.1","SD1neg":"7.9","SD2neg":"7","SD3neg":"6.3"});
wfa_girls_2_to_20_zscores.unshift({"Month":"0","SD0":"3.2","SD1":"3.7","SD2":"4.2","SD3":"4.8","SD1neg":"2.8","SD2neg":"2.4","SD3neg":"2"});

var wfa_haiti_0_to_5 = {
  "meta" : wfa_haiti_0_to_5_meta,
  "data" : wfa_haiti_0_to_5_values
};

var wfa_boys_0_to_5 = {
  "meta" : wfa_boys_0_to_5_meta,
  "data" : wfa_boys_0_to_5_zscores
};

var wfa_girls_0_to_5 = {
  "meta" : wfa_girls_0_to_5_meta,
  "data" : wfa_girls_0_to_5_zscores
};

var wfa_boys_2_to_20 = {
  "meta" : wfa_boys_2_to_20_meta,
  "data" : wfa_boys_2_to_20_zscores
};

var wfa_girls_2_to_20 = {
  "meta" : wfa_girls_2_to_20_meta,
  "data" : wfa_girls_2_to_20_zscores
};

////////////////////////////////
// Chart
////////////////////////////////

function display_growth_chart(patient, el, chartType, dims) {

  // Create the background lines
  //
  // json includes "meta" (to tag+name the lines, specify measurement type)
  //  and "data" (containing age in months vs measurement)
  function createLines(json) {
    var meta = json.meta;
    var data = json.data;

    var newLines = [];

    for (var i=0; i < meta.lines.length; i++) {
      // Get the tag
      var lineTag = meta.lines[i].tag;

      newLines.push([]);
      // Generate the list of data (month, measurement)
      for (var j=0; j < data.length; j++) {
        // Assumes data has a "Month" tag in each element
        newLines[i].push([data[j]["Month"], data[j][lineTag]]);
      }
    }
    return newLines;
  }

  // Get data to build chart's 'background lines' depending on chartType
  var data;
  var metaData;
  var chartTypes = {
    'wfa_haiti_0_to_5' : wfa_haiti_0_to_5,
    'wfa_boys_0_to_5' : wfa_boys_0_to_5,
    'wfa_girls_0_to_5': wfa_girls_0_to_5,
    'wfa_boys_2_to_20' : wfa_boys_2_to_20,
    'wfa_girls_2_to_20' : wfa_girls_2_to_20
  };

  var chartTypeKeys = [];
  for (k in chartTypes) {
    if (chartTypes.hasOwnProperty(k)) {
      chartTypeKeys.push(k);
    }
  }

  if (chartTypes.hasOwnProperty(chartType)) {
    data = createLines(chartTypes[chartType]);
    metaData = chartTypes[chartType].meta;
  } else {
    console.log('Error choosing chart type. Your input was "' + chartType + '". Valid options are:', chartTypeKeys);
    return;
  }

  // Save the last tuple so that I can label it
  lastTuples = [];

  // Boundaries for graph, based on growth chart bounds
  var yMax = 0; // weight, in kg
  var xMax = 0; // age, in months
  for (var i = 0; i < data.length; i++) {
    var lineData = data[i];
    var lastTuple = lineData[lineData.length-1];
    lastTuples.push(lastTuple);
    xMax = Math.max(lastTuple[0], xMax);
    yMax = Math.max(lastTuple[1], yMax);
  }

  // Graph formatting, in pixels
  var width = 800;
  var height = 450;
  var padding = 50;
  var extraRightPadding = 80; // For line labels ... "severely malnourished" goes offscreen

  // Graph scale; domain and range
  var xScale = d3.scale.linear()
    .domain([0, xMax])
    .range([padding, width - padding]);

  var yScale = d3.scale.linear()
    .domain([0, yMax])
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

  // clear exiting growth chart svg .. allows to reset graph with new background
  d3.select(el).select(".growth_chart_main_svg").remove();

  var svg = d3.select(el).append("svg")
    .attr("width", width + extraRightPadding)
    .attr("height", height)
    .attr("class", "growth_chart_main_svg");

  // add a monocolor background
  var backgroundRect = svg.append("g");
  backgroundRect.append("rect")
    .attr("width", width + extraRightPadding)
    .attr("height", height)
    .attr("class", "backgroundRect");

  // Baseline growth curves
  var lines = svg.selectAll(".lines")
    .data(data)
    .enter();

  lines.append("path")
    .attr("class", "area")
    .attr("d", area);

  lines.append("path")
    .attr("class", "line")
    .attr("d", line);

  var linesToAxis = svg.append("g");

  // Patient's data

  // Add line for the patient's growth
  var linesP = svg.selectAll("pG")
    .data([patient])
    .attr("class", "pG")
    .enter();
  linesP.append("path")
    .attr("class", "pLine")
    .attr("d", line.interpolate("")); // interpolate("") removes the smoothing

  // Dots at each data point
  var dots = svg.selectAll(".dot")
    .data(patient)
    .enter()
    .append("circle")
    .attr("class", "dot")
  .call(dotHandler(function(d, i) {
    return getTooltipText(d);
  }))
  // .on("mouseout", mouseoutDot)
  .attr("cx", function(d, i) {
    return xScale(d[0]);
  })
    .attr("cy", function(d, i) {
    return yScale(d[1]);
  })
    .attr("r", 3);

  // Add axes
  // TODO: Improve axes to have years and months, like http://www.who.int/childgrowth/standards/cht_wfa_boys_p_0_5.pdf

  // x-axis
  var xAxis = d3.svg.axis();
  xAxis.scale(xScale);
  xAxis.orient("bottom")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(xAxis);

  // y-axis
  var yAxis = d3.svg.axis();
  yAxis.scale(yScale);
  yAxis.orient("left")
    .ticks(10);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

  // svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
  //         .attr("transform", function(d) {
  //            return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
  //        });

  // Axes text
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (padding/3) +","+(height-padding)/2+")rotate(-90)")
    .text("Weight (kg)");

  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (width/2) +","+(height-(padding/3))+")")
    .text("Age (months)");

  // Line labels (Normal, Malnourished, and Severely Malnourished)
  for (var i=0; i<metaData.lines.length; i++) {
    xOffset = xScale(lastTuples[i][0]);
    xOffset += 2; // a little space better graph and text
    yOffset = yScale(lastTuples[i][1]);
    yOffset += 4; // center text on line

    svg.append("text")
      .attr("class","line-label")
      .attr("transform", "translate("+ xOffset +","+ yOffset +")")
      // .attr("text-anchor", "middle")
      .text(metaData.lines[i].name);
  }

  var tooltipOffset = padding + 10;
  var tooltipGroup = svg.append("g");

  var tooltipBackground = tooltipGroup.append("rect")
    // .attr("class","tooltip")
    .attr("x", tooltipOffset)
    .attr("y", tooltipOffset)
    .attr("width", 0)
    .attr("height", 0)
    .attr("class","tooltipTextBackground")
    // .style("font-size","14px")
    // .style("background-color","gray")
    // .text("(Move mouse over a data point to see details)");
    // .text("");

  var tooltipText = tooltipGroup.append("text")
    // .attr("class","tooltip")
    .attr("x", tooltipOffset)
    .attr("y", tooltipOffset)
    .attr("class","tooltipText")
    .style("font-size","14px")
    // .style("background-color","gray")
    // .text("(Move mouse over a data point to see details)");
    .text("");

  // Draw a rectangle background behind the text
  // var bbox = textElement.getBBox();
  // var width = bbox.width;
  // var height = bbox.height;


  // Button to toggle chart type
  //
  var rectButton = svg.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", (width / 2) - 3 - 46)
    .attr("y", 0 + (padding / 2) - 14 - 3 + 24)
    // .attr("x", padding*10-3)
    // .attr("y", padding-14-3)
    .attr("width", 101)  // 106
    .attr("height", 25)
    .style("stroke","gray")
    .style("fill", d3.scale.category20c())
    .on("click", function() {
      changeGraphType();
    });

  var rectButtonText = svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 + (padding / 2) + 24)
    .attr("text-anchor", "middle")
    // .attr("transform", "translate("+ (padding*10) +","+(padding)+")")
    .style("font-size","14px")
    .style("fill","white")
    .text("Change Graph")
    .on("click", function() {
      changeGraphType();
    });

  //     var width = 800;
  // var height = 450;
  // var padding = 44;


  svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 + (padding / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text(metaData.title);

  function changeGraphType() {
    var whichChart = chartTypeKeys.indexOf(chartType);
    whichChart += 1;
    whichChart %= chartTypeKeys.length;

    var growthChart = display_growth_chart(patient, el , chartTypeKeys[whichChart]);
  }

  function dotHandler(accessor) {
    return function(selection) {
      selection.on("mouseover", function(d, i) {
        // Select current dot, unselect others
        d3.selectAll("circle.dotSelected").attr("class", "dot");
        d3.select(this).attr("class", "dotSelected");

        // Update text using the accessor function
        var ttAccessor = accessor(d, i) || '';
        tooltipText.text(ttAccessor);

        // Update text background
        var dottedSegmentLength = 3;  // used below, too, for linesToAxis
        var tooltipHeightPadding = 5;
        var tooltipWidthPadding = 4;
        var bbox = svg.select(".tooltipText")[0][0].getBBox();
        svg.selectAll(".tooltipTextBackground")
          .attr("width", bbox.width + tooltipWidthPadding * 2)
          .attr("height", bbox.height + tooltipHeightPadding )
          .attr("y", tooltipOffset - bbox.height )
          .attr("x", tooltipOffset - tooltipWidthPadding );
          // .style("stroke-dasharray",
          //   dottedSegmentLength.toString()
          // );

        // create a rectangle that stretches to the axes, so it's easy to see if the axis is right..
        // Remove old
        linesToAxis.selectAll(".rect-to-axis")
          .data([])
        .exit().remove();

        // Add new
        var linesToAxisWidth = xScale(d[0]) - padding;
        var linesToAxisHeight = height - yScale(d[1]) - padding;
        var halfRectLength = linesToAxisWidth + linesToAxisHeight;
        halfRect = halfRectLength.toString();

        // Draw top and right sides of rectangle as dotted. Hide bottom and left sides
        var dottedSegments = Math.floor(halfRectLength / dottedSegmentLength);
        var nonDottedLength = halfRectLength*2; // + (dottedSegments % dottedSegmentLength);

        var dashArrayStroke = [];

        for (var i=0; i < dottedSegments; i++) {
          dashArrayStroke.push(dottedSegmentLength);
        }
        // if even number, add extra filler segment to make sure 2nd half of rectangle is hidden
        if ( (dottedSegments % 2) === 0) {
          extraSegmentLength = halfRectLength - (dottedSegments*dottedSegmentLength);
          dashArrayStroke.push(extraSegmentLength);
          dashArrayStroke.push(nonDottedLength);
        } else {
          // extraSegmentLength = halfRectLength - (dottedSegments*dottedSegmentLength);
          dashArrayStroke.push(nonDottedLength);
        }

        linesToAxis.selectAll(".rect-to-axis")
          .data([d])
         .enter().append("rect")
          .attr("class", "rect-to-axis")
          .style("stroke-dasharray",
            dashArrayStroke.toString()
          )
          .attr("x", padding)
          .attr("y", yScale(d[1]))
          .attr("width", linesToAxisWidth)
          .attr("height", linesToAxisHeight);

      });
    };
  }

  function getTooltipText(d) {
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

  // callable methods
  return this;
}