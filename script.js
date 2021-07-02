var currentDayHTML = $('#currentDay'); //html variable
var saveBtn = $('.saveBtn'); //save button
var timeBlock = $('.time-block'); // time block HTML

currentDayHTML = currentDayHTML.text(moment().format('MMM Do YYYY, h:mm a'));

console.log(moment().format('H'));

function checkTime(){
    $('.time-block').each(function ()
    {
        var timeId = parseInt(($(this)).attr('id')); //grabs timeblock id
        var hour = moment().format('H'); 
        var textarea = $(this).children('.description'); //grabbing the textarea div

        if(timeId == hour){
            textarea.addClass('present');
        }
        else if (timeId < hour){
            textarea.addClass('past');
        }
        else{
            textarea.addClass('future');
        }
        })
}

saveBtn.click(function (event){
    var div = $(event.target);
    var timeID = parseInt(div.parent().attr('id'));
    var textDisplay = div.siblings('.description').val();
    localStorage.setItem(timeID, textDisplay);
})

function plannerToDo(){
    timeBlock.each(function ()
    {
        var timeID = parseInt(($(this)).attr('id'));
        var textD = $(this).children('.description');

        if(localStorage.getItem(timeID) === null){
            return;
        }
        else{
            textD.val(localStorage.getItem(timeID));
        }
    })

}


checkTime();
plannerToDo();












// var container = $('container');
// var timeBlockHtml = $('.time-block');