const URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=Paris&country=FR&days=5&units=S&lang=fr&key=744c79ce1af0431295598f3427ca4de1";
const selector = document.getElementById('id');

fetch(URL)
    .then((response) => response.json())
    .then((response) => {
				    	console.log(response);
				    	return response;
				    	})
	.then((response) => {
						let allDays = response.data;

					  	console.log(allDays)

					  	allDays.forEach(function(x){
					  		console.log("x")
					  		showMeteo(selector, x.valid_date, x.weather.description, x.weather.icon );
					  	});
					  })

	.catch((error) => console.error(error));



const showMeteo = (selector, day, descriptionText, icon) => {

    selector.innerHTML += `
        <div class="card col-lg-2 mt-5 mr-3">
		    <div class="card-body">
		    	<h3>${day}</h3>
		    	<img src="https://www.weatherbit.io/static/img/icons/${icon}.png">
		        <p class="card-text">${descriptionText}</p>
    		</div>
		</div>
    `;
}