var url="http://api.github.com/users/asmaasaadi/repos?sort=pushed&per_page=5"


$(document).ready(function(){
	
	$("#a").click(function(){
		$(`#proj`).html('')
		$.get(url, function(data){
			$.each(data,function(key,v){
				var date=new Date(v.created_at);

                // $(`#proj`).append("<p><a href="'+v.html_url+'">'+v.name+'"</a></p>"+"<p>Created at: "+formatDate(date)+"</p><br>")

                $(`#proj`).append('<li><a href="'+v.html_url+'">'+v.name+'</li><p>created at:'+ formatDate(date)+'<br><br>')
               
			})
		});
	});

})

//$('#result').append('<a href='+`${itm['html_url']}`+'>'+`${itm['name']}`+'</a><br>'+`${itm['created_at']}`);


function formatDate(date) {
	var hours = date.getHours();
	var monthIndex = date.getMonth();
	var minutes = date.getMinutes();
	  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return  date.getDate() + "/" + monthNames[monthIndex] + "/" + date.getFullYear() + "   Time: " + strTime;

}

