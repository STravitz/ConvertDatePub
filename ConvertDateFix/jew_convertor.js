

$(document).ready(function() {
        
    $('#datepicker').datepicker({
        format: 'mm/dd/yyyy',
        orientation: 'center'
    });

    $('#datepicker').datepicker('show')
    $("#datePickerBtn").click(function(){
        geoDate = $('#datepicker').val()
        if(geoDate == undefined || geoDate == ""){
            alert('בבקשה הכנס תאריך תקין')
        }
        else{
            console.log(geoDate)
            geoDateFormat = new Date(geoDate)
            year = geoDateFormat.getFullYear()
            month = geoDateFormat.getMonth()
            day = geoDateFormat.getDay()

            console.log(geoDateFormat)

            var url = "https://www.hebcal.com/converter?cfg=json&gy=" + year + "&gm=" + month + "&gd=" + day + "&g2h=1"
            console.log(url)
            $.getJSON(url, function(data) {
                // JSON result in `data` variable
                console.log(data)
                $('#result').text(data['hebrew'])
                $('#datepicker').datepicker('show')
 
            });
            
        }
    });
});