$(document).ready(function() {
  var pathname = window.location.pathname;
  var court = $('.court');
  var heatMap = $('.heat_court_map');
  var gameId = parseInt($("#game_id").attr("value"));

  var ajaxRequest = $.ajax({
    type: 'GET',
    url: "/game/" + gameId + ".json"
  });

    ajaxRequest.done(function(response) {
      statsData['missed'] = response.missed_shots;
      statsData['made'] = response.made_shots;
      statsData['rebounds'] = response.rebounds;
      statsData['steals'] = response.steals;
      statsData['turnovers'] = response.turnovers;
      statsData['blocks'] = response.blocks;
      // debugger;
    });
    // error: function() {
    //   alert('oh god the world exploded');
    // };
  // });
  // uses offsets to record accurate positioning of stats
  var getPoint = function(event) {
    return {
      x_coord: event.x - 680,
      y_coord: event.y - 66,
      value: 50,
      radius: 40
    };
  };

  var statsData = {
    missed: [],
    made: [],
    rebounds: [],
    steals: [],
    turnovers: [],
    blocks: [],

    // adds a point to a specific stat
    addPoint: function(stat,event) {
      statsData[stat] = statsData[stat].concat(getPoint(event));
    },
    // pulls back stats data from the server
    refresh: function() {

    }
  };

  court.click(function() {
    // if the user has selected a stat type
    if (typeof currentStat !== 'undefined') {
      // record the stat
      statsData.addPoint(currentStat, event);
    }
  });

  // changes the current stat being recorded
  var currentStat;
  $(".identifiers .button").click(function(e) {

    currentStat = $(this).attr('stat');
    setUpHeatmap(statsData[currentStat]);
  });

  // clears the heatmap
  $(".identifiers .clear_heatmap").click(function() {
    heatMap.empty();
  });

  // shows or hides the heatmap, while clearing it
  $(".heatmap_button").click(function() {
    heatMap.toggle();
    heatMap.empty();
  });


  heatMap.hide();
  // statsData.refresh();
  // debugger;
});

var setUpHeatmap = function(stat) {

  var heatmapInstance = h337.create({
    container: document.querySelector('.heat_court_map'),
  });
  // 1) Shot missed
  // 2) Shot made
  // 3) Rebound
  // 4) Steal
  // 5) Turnover
  // 6) Block

  var statNum = stat.length;

  var points = [];
  var max = 100;
  var width = 1050;
  var height = 750;

  while (statNum--) {
    var val = 50;
    var radius = 40;
    max = Math.max(max, val);

    var point = {
      x: stat[statNum].x_coord,
      y: stat[statNum].y_coord,
      value: val,
      radius: radius
    };
    points.push(point);
  }


  //heatmap data
  var data = {
    max: max,
    data: points
  };

  heatmapInstance.setData(data);
};
