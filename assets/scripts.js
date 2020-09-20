$(document).ready(function () {
    var currentHour = moment().hour();

    // Displays the current date and time in the Jumbotron
    var update = function () {
        $('#currentDay').text(moment().format('dddd, MMMM Do'));
        $('#currentTime').text(moment().format('h:mm:ss a'));
    };
    update();
    setInterval(update, 1000);

    var hours = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM',
    ];
    //---------------
    // Loop to make table based on length of hours array
    //---------------
    for (var i = 0; i < hours.length; i++) {
        //Assign current hour in 24-hr notation to a variable
        var dataHour = [i + 9];
        // Create a row
        var tRow = $('<tr>');
        // Populate first column with hours array along with dataHour
        var hourRow = $(
            `<td class="align-middle"><h3 data-hour="${dataHour}">${hours[i]}</h3></td>`
        );
        // Create a column with a textbox along with dataHour
        var task = $(
            `<td class="align-middle"><textarea class="form-control" id="${dataHour}text" rows="3"></textarea></td>`
        );
        // Create a column with a save button along with dataHour
        var save = $(
            `<td class="align-middle"><i class="far fa-save fa-3x saveBtn" data-hour="${dataHour}"></i></td>`
        );
        // Append the newly created table data to the table row
        tRow.append(hourRow, task, save);
        // Append the table row to the table body
        $('tbody').append(tRow);
    }

    
});
