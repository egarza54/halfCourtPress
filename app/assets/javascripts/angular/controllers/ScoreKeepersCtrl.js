  app.controller('ScoreKeepersCtrl', ['$http',function($http){
    var gameId = parseInt($("#game_id").attr("value"));

    // This gets data for the heat map


    //coordinate hash to store the x and y coordinates of a mouse click
    var coordinates = {
      x: 0,
      y: 0
    };

    // functions to collect the x and y variables.
    var getX = function(event){
      return event.offsetX
      // debugger;
    };

     var getY = function(event){
      return event.offsetY
      // debugger;
    };

    // Stats constructor function. Sets up the type of function based on its stat_type
    // 1) Shot missed
    // 2) Shot made
    // 3) Rebound
    // 4) Steal
    // 5) Turnover
    // 6) Block

    function Stats(event, type){
      this.game_id = gameId;
      this.x_coord = getX(event);
      this.y_coord = getY(event);

      if(type === 1){
        this.made = false;
        this.stat_type = 1
      } else if(type === 2) {
         this.made = true;
         this.stat_type = 2;
      } else if(type === 3) {
          this.stat_type = 3;
      } else if(type === 4){
          this.stat_type = 4;
      } else if(type === 5){
          this.stat_type = 5;
      } else if(type === 6){
          this.stat_type = 6;
      }
    };

    //Stats are default to missed shots
    this.type = 0;
    // debugger;
    var that = this;
    //Empty arrays to contain all stat objects
    this.missed_fieldgoals = [];
    this.made_fieldgoals = [];
    this.rebounds = [];
    this.steals = [];
    this.turnovers = [];
    this.blocks = [];


    //test variable and function
    this.test = 0;
    this.clicky = function(){
      this.test++;
    };

    //Method that sets the type of stat to be recorded
    this.selectType = function(setType){
      this.type = setType;
    };

    //Method to make dots
    var i = 0;
    var makedots_shotmissed = function(event){
      i++;
      $('.court').append("<div class ='dot_shotmissed dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makedots_shotmade = function(event){
      i++;
      $('.court').append("<div class ='dot_shotmade dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makedots_rebound = function(event){
      i++;
      $('.court').append("<div class ='dot_rebound dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makedots_steal = function(event){
      i++;
      $('.court').append("<div class ='dot_steal dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makedots_turnover = function(event){
      i++;
      $('.court').append("<div class ='dot_turnover dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makedots_block = function(event){
      i++;
      $('.court').append("<div class ='dot_block dot"+i+"'></div>");
      $('.dot'+i).css({'top':event.y, 'left':event.x});
    };

    var makeOldDots = function (stat) {
      i++
      $('.court').append("<div class ='dot dot"+i+"'></div>");
      $('.dot'+i).css({'top':stat.y_coord, 'left':stat.x_coord});
    }
    //function that records a stat object and pushes it in its corresponding array.
    this.recordStats = function(event, type){
      if(type === 1){
        var newMissedFG = new Stats(event, this.type);
        this.missed_fieldgoals.push(newMissedFG);
        makedots_shotmissed(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: newMissedFG
        })
        .success(function (data, status, headers, config) {
          // debugger;
        })
        .error(function (data, status, headers, config) {
          // debugger;
        })

      } else if(type === 2){
        var newMadeFG = new Stats(event, this.type);
        this.made_fieldgoals.push(new Stats(event, this.type));
        makedots_shotmade(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: newMadeFG
        })
        .success(function (data, status, headers, config) {
        })
        .error(function (data, status, headers, config) {
        })
      } else if(type === 3) {
        var rebound = new Stats(event, this.type);
        this.rebounds.push(new Stats(event, this.type));
        makedots_rebound(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: rebound
        })
        .success(function (data, status, headers, config) {
        // debugger;
        })
        .error(function (data, status, headers, config) {
        })
      } else if(type === 4) {
        var steal = new Stats(event, this.type);
        this.steals.push(new Stats(event, this.type));
        makedots_steal(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: steal
        })
        .success(function (data, status, headers, config) {
          // debugger;
        })
        .error(function (data, status, headers, config) {
          // debugger;
        })
      } else if(type === 5) {
        var turnover = new Stats(event, this.type);
        this.turnovers.push(new Stats(event, this.type));
        makedots_turnover(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: turnover
        })
        .success(function (data, status, headers, config) {
          // debugger;
        })
        .error(function (data, status, headers, config) {
        })
      } else if(type === 6){
        var block = new Stats(event, this.type);
        this.blocks.push(new Stats(event, this.type));
        makedots_block(event);
        $http({
          method: 'POST',
          url: '/stat.json',
          data: block
        })
        .success(function (data, status, headers, config) {
          // debugger;
        })
        .error(function (data, status, headers, config) {
        })
      };
    };

    // Load up stats from DB and draw to page

    var ajaxResponse = $http({
      method: 'GET',
      url: '/game/' + gameId + '/stat.json'
    })
    ajaxResponse.success(function (data, status, headers, config){
      var that = this;
      parseStats(data, that);
    }.bind(this));

    // ajaxResponse.error(function(data, status, headers, config) {
    // });
    // this.missed_fieldgoals = [];
    // this.made_fieldgoals = [];
    // this.rebounds = [];
    // this.steals = [];
    // this.turnovers = [];
    // this.blocks = [];

    var parseStats = function (stats, that) {
      stats.forEach(function(stat) {
        // sleep(100);
        if (stat.stat_type === 1){
          // makeOldDots(stat);
          that.missed_fieldgoals.push(stat);

        } else if(stat.stat_type === 2){
          // makeOldDots(stat);
          that.made_fieldgoals.push(stat);

        } else if(stat.stat_type === 3) {
          that.rebounds.push(stat);

          // makedots(event);
        } else if(stat.stat_type === 4) {
          that.steals.push(stat);

          // makedots(event);
        } else if(stat.stat_type === 5) {
          that.turnovers.push(stat);

          // makedots(event);
        } else if(stat.stat_type === 6){
          that.blocks.push(stat);
          // makedots(event);
        };
      })
    }

}]);













