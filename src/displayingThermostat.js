// $(document).ready(function() {

 var thermostat = new Thermostat();

 var thermDisp = function() {
  //  $('<form action="/therm_disp" method="post"><input type="hidden" name="therm"></form>').submit();
  $.ajax({
    type: "POST",
    url: '/therm_disp',
    data: thermostat.temperature().toString()
  });


 };

 var updateColour = function() {
   if (thermostat.colour() === 'green' ) {
      $("#temperature").css({'color' : 'rgb(0, 255, 0)', 'font-size' : '200%'});
  } else if (thermostat.colour() === 'yellow') {
      $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
  } else {
      $("#temperature").css({'color' : 'rgb(255, 0, 0)', 'font-size' : '200%'});
  };
};

 $("#temperature").text(thermostat.temperature());

 $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});

 $("#up").click(function() {
    thermostat.up();
    updateColour();
    $("#temperature").text(thermostat.temperature());
    thermDisp();
  });

  $("#down").click(function() {
    thermostat.down();
    updateColour();
    $("#temperature").text(thermostat.temperature());
    thermDisp();
  });

  $("#reset").click(function() {
     thermostat.resetTemp();
     updateColour();
    $("#temperature").text(thermostat.temperature());
    thermDisp();
   });

   $('#saverOff').click(function() {
       thermostat.powersaveOff();
     });




// });
