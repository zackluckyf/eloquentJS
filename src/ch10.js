    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var month = function() {
        return {
            name: function(number) {
                return months[number];
            },
            number: function(month) {
                return months.indexOf(month);
            }
        };
    }();

    console.log(month.name(2));
    // → March
    console.log(month.number("November"));
    // → 10

    
