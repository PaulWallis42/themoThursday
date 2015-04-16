describe('Thermostat', function() {

  beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
    });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
   $("#up").click();
   expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("#down").click();
    expect('#temperature').toContainText('19');
  });

  it('can reset the temperature to 20 by hitting the reset button', function(){
    $("#up").click();
    $("#up").click();
    $("#reset").click()
    expect('#temperature').toContainText('20');
  });

  it("should show temperature in yellow if temp between 18 and 24", function() {
    expect($('#temperature').css("color")).toEqual('rgb(255, 255, 0)');
  });

  it("should show temperature in green if temp below 18", function() {
    $("#down").click();
    $("#down").click();
    $("#down").click();
    $("#down").click();
    expect($('#temperature').css("color")).toEqual('rgb(0, 255, 0)');
  });

  it("should be able to turn off the power saver mode", function() {
    $('#saverOff').click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect('#temperature').toContainText('27');
  });

});
