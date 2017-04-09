"use strict";

var closeAlert = document.getElementById('close-alert');
var loggedInMark = document.getElementById('logged-in-mark');
var send = document.getElementById('submitMessageBtn');

function removeElement(childElement) {
    childElement.parentNode.removeChild(childElement);
}

function changeDivColor(element) {
	element.style.background = '#B898C0';
}

/*******************
  CLOSE ALERT DIV
*******************/

closeAlert.addEventListener('click', (e) => {
	var alertContainer = closeAlert.parentElement;
	var alert = alertContainer.parentElement;
	
	changeDivColor(loggedInMark);
	removeElement(alert);
});

/*******************************
MESSAGE ERROR AND CONFIRM CONTROL
********************************/

send.addEventListener('click', (e) => {
	var search = document.getElementById('searchUser');
	var message = document.getElementById('message');
	var error = document.getElementById('error');
	var success = document.getElementById('success');

	if(search.value == '' || message.value == '') {
		error.style.display = 'block';
		success.style.display = '';
	}
	else {
		error.style.display = 'none';
		success.style.display = 'block';
		message.value = '';
		search.value = '';
	}
});

/*******************
		CHARTS
*******************/

var ctx = document.getElementById('myChart');
var ctx2 = document.getElementById('myBarChart');
var ctx3 = document.getElementById('myPieChart');

var lineChart = new Chart(ctx, {
	type:'line',
	data: {
		labels: ['0', "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			label: 'Weekly Web Traffic',
			data: [ 0, 750, 1250, 1000, 1500, 2000, 1450,1750,1250,1750,2250,1750,2500],
			borderWidth: 1,
			borderColor: 'rgba(184,152,192, 1)',
			lineTension: 0,
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointRadius: 5,
			responsive: true,
			maintainAspectRatio: false
		}]
	},
	options: {
		title: {
			display: false
		},
		legend: {
			display: false
		}
	}
});

var barChart = new Chart (ctx2, {
	type: 'bar',
	data: {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [{
			data: [75, 100, 175, 125, 225, 200, 100],
			borderWidth: 1,
			backgroundColor: [
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)',
			'rgba(140, 223, 214, 0.9)'
			],
		}]

	},
	options: {
		title: {
			display: false
		},
		legend: {
			display: false
		}
	}

});

var pieChart = new Chart (ctx3, { 
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktops'],
		datasets: [{
			data: [25, 15, 60],
			backgroundColor: [
			'#E55812',
			'#1F01B9',
			'#B4E33D'
			]
		}]
	},
	options: {
		legend: {
			position: 'right',
			fullWidth: false,
			labels: {
				boxWidth: 30,
				fontSize: 10
			}
		},
		responsive: true,
		maintainAspectRatio: true	
	}

});