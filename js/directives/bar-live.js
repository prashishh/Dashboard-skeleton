
dashboardApp.directive('barLive', function(){
  return {
    restrict: 'E',
    scope: {
      data: '=data',
      datatype: '&'
    },
    replace: true,
    template:'<svg><label><input type="checkbox"> Sort values</label></svg>',
    link: function($scope, elem, attr) {

        $scope.$watch('data', function (newValue, oldValue) {
        if (newValue && newValue !== oldValue) {

          var margin = {top: 20, right: 20, bottom: 30, left: 40},
              width = 550 - margin.left - margin.right,
              height = 400 - margin.top - margin.bottom;

          var formatPercent = d3.format(".0%");

          var x = d3.scale.ordinal()
              .rangeRoundBands([0, width], .1, 1);

          var y = d3.scale.linear()
              .range([height, 0]);

          var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom");

          var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left")
              .tickFormat(formatPercent);

          d3.select("svg")
                 .remove();

          var svg = d3.select("body").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            $scope.data.forEach(function(d) {
              d.second = +d.second;
            });

            x.domain($scope.data.map(function(d) { return d.first; }));
            y.domain([0, d3.max($scope.data, function(d) { return d.second; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Frequency");

            svg.selectAll(".bar")
                .data($scope.data)
              .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.first); })
                .attr("width", x.rangeBand())
                .attr("y", function(d) { return y(d.second); })
                .attr("height", function(d) { return height - y(d.second); });


            //            d3.select("input").on("change", change);

          }


      });


    }
  }
  
});
 