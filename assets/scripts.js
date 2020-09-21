$(document).ready(function () {
    var currentHour = moment().hour();

    // Displays the current date and time in the Jumbotron
    var update = function () {
        $('#currentDay').text(moment().format('dddd, MMMM Do'));
        $('#currentTime').text(moment().format('h:mm:ss a'));
    };
    update();
    setInterval(update, 1000);

    // Array with hours for scheduler
    const hours = [
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

    // Set local storage variables
    var storedItems_9 = localStorage.getItem(storedItems_9) || [];
    var storedItems_10 = localStorage.getItem(storedItems_10) || [];
    var storedItems_11 = localStorage.getItem(storedItems_11) || [];
    var storedItems_12 = localStorage.getItem(storedItems_12) || [];
    var storedItems_13 = localStorage.getItem(storedItems_13) || [];
    var storedItems_14 = localStorage.getItem(storedItems_14) || [];
    var storedItems_15 = localStorage.getItem(storedItems_15) || [];
    var storedItems_16 = localStorage.getItem(storedItems_16) || [];
    var storedItems_17 = localStorage.getItem(storedItems_17) || [];

    //---------------
    // Loop to make table based on length of hours array
    //---------------
    for (var i = 0; i < hours.length; i++) {
        //Assign current hour in 24-hr notation to a variable
        var dataHour = [i + 9];
        // Create a row
        var tRow = $('<tr class="hourColor">');
        // Populate first column with hours array along with dataHour
        var hourRow = $(
            `<td class="align-middle"><h3 class="time" data-hour="${dataHour}">${hours[i]}</h3></td>`
        );
        // Create a column with a textbox along with dataHour
        var task = $(
            `<td class="align-middle"><textarea class="form-control taskText" id="${dataHour}text" rows="3"></textarea></td>`
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

    //---------------
    // Color code the hour blocks based on time of day and whether is in past, present, or future
    //---------------
    // Loop across each row of the table, starting at 9 (for 9am)
    for (var j = 9; j < 18; j++) {
        // If the current hour is less than the loop iteration value (starting at 9), make the background one color
        if (currentHour > j) {
            $('.hourColor')
                .eq(j - 9)
                .css('background-color', '#d3d3d3');
        }
        // If the current hour is equal to the loop iteration value (starting at 9), make the background another color
        if (currentHour === j) {
            $('.hourColor')
                .eq(j - 9)
                .css('background-color', '#ff6961');
        }
        // If the current hour is more than the loop iteration value (starting at 9), make the background a third color
        if (currentHour < j) {
            $('.hourColor')
                .eq(j - 9)
                .css('background-color', '#77dd77');
        }
    }

    //---------------
    // Add content of text area to local storage on save, and display
    //---------------
    // save button click event 
    //TODO Figure out how to loop the local storage!!
    $('.saveBtn').on('click', function (e) {
        e.preventDefault();

        // Use data-hour to drive logic around what text areas to populate
        var id = $(this).data('hour');

        // Set the new data items
        var task = {
            hour: $(this).data('hour'),
            message: $('#' + id + 'text').val(),
        };

        if ($(this).data('hour') === 9) {
            storedItems_9.push(task);
            localStorage.setItem('9', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 10) {
            storedItems_10.push(task);
            localStorage.setItem('10', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 11) {
            storedItems_11.push(task);
            localStorage.setItem('11', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 12) {
            storedItems_12.push(task);
            localStorage.setItem('12', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 13) {
            storedItems_13.push(task);
            localStorage.setItem('13', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 14) {
            storedItems_14.push(task);
            localStorage.setItem('14', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 15) {
            storedItems_15.push(task);
            localStorage.setItem('15', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 16) {
            storedItems_16.push(task);
            localStorage.setItem('16', JSON.stringify(task.message));
        }
        if ($(this).data('hour') === 17) {
            storedItems_17.push(task);
            localStorage.setItem('17', JSON.stringify(task.message));
        }
    });

    // Pull local storage for display
    window.onload = function () {
        $('#9text').val(JSON.parse(localStorage.getItem('9')));
        $('#10text').val(JSON.parse(localStorage.getItem('10')));
        $('#11text').val(JSON.parse(localStorage.getItem('11')));
        $('#12text').val(JSON.parse(localStorage.getItem('12')));
        $('#13text').val(JSON.parse(localStorage.getItem('13')));
        $('#14text').val(JSON.parse(localStorage.getItem('14')));
        $('#15text').val(JSON.parse(localStorage.getItem('15')));
        $('#16text').val(JSON.parse(localStorage.getItem('16')));
        $('#17text').val(JSON.parse(localStorage.getItem('17')));
    };
});
