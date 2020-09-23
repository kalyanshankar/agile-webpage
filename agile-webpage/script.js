function Products(x) {
  if (x == "food") {
    var select = document.getElementById("products");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var select1 = document.getElementById("brand");
    var length = select1.options.length;
    for (i = length - 1; i >= 1; i--) {
      select1.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Cereals";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Burger";
    select.add(option);
  }
  if (x == "clothes") {
    var select = document.getElementById("products");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var select1 = document.getElementById("brand");
    var length = select1.options.length;
    for (i = length - 1; i >= 1; i--) {
      select1.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Shirts";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Pants";
    select.add(option);
  }
  if (x == "Cereals") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Cereals1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Cereals2";
    select.add(option);
  }
  if (x == "Burger") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Burger1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Burger2";
    select.add(option);
  }
  if (x == "Shirts") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Shirt1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Shirt2";
    select.add(option);
  }
  if (x == "Pants") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Pant1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Pant2";
    select.add(option);
  }
}
function Dropdown_select(x) {
  Products(x);
  AnyChart();
}
function AnyChart() {
  var x = document.getElementById("container");
  x.remove();
  document.getElementById("main-chart").innerHTML =
    "<div id='container'></div>";
  var chart = anychart.column();
  chart.animation(true);
  chart.title("Sales By Month for");
  var data = [1, 2, 3, 4];
  for (var i = 0; i < data.length; i++)
    data[i] += Math.ceil(Math.random() * 400) + 30;
  var series = chart.column([
    ["January", data[0]],
    ["February", data[1]],
    ["March", data[2]],
    ["April", data[3]],
  ]);
  chart.yScale().minimum(0);
  chart.tooltip().positionMode("point");
  chart.interactivity().hoverMode("by-x");
  chart.xAxis().title("Months");
  chart.yAxis().title("Sales");
  chart.container("container");
  chart.draw();
}
