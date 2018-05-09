//Making the grid
function makeGrid() {
  // Selecting size input
  const inputHeight = $('#inputHeight').val();
  const inputWeight = $('#inputWeight').val();
  //Making existing grid empty
  $('#pixelCanvas').empty();

  //creating new grid
  //creating rows
  for(let i=0;i<inputHeight;i++){
    $('#pixelCanvas').append('<tr></tr>');
  }
  let newRows=$('tr');
  //creating columns
  for(let j=0;j<inputWeight;j++){
    newRows.append('<td></td>');
  }
}
// size is submitted by the user, calling makeGrid()
$('#sizePicker').submit(function(event) {
	event.preventDefault();
  makeGrid();
});
//Grid created
//Changing the background color which peforms event listening
$('#pixelCanvas').on( "click", "td", function( event ) {
    $(this).css("background-color", $("#colorPicker").val());
});
//to remove the colors from grid on double-click
$('#pixelCanvas').on('dblclick','td',function(){
  $(this).css("background-color","");
});
