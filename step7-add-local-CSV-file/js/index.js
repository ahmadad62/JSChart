

const inp = document.querySelector('input');
const fr = new FileReader();
fr.onload = (e) => {
	console.log(e.target.result);
	let text = e.target.result
	let series = csvToSeries(text);
	renderChart(series);
}
inp.onchange = (e) => {
	const [file] = e.target.files;
	fr.readAsBinaryString(file);
}


function csvToSeries(text) {
	const lifeExp = 'average_life_expectancy';
	let dataAsJson = JSC.csv2Json(text);
	let white = [], black = [], male = [], female = [];
	dataAsJson.forEach(function (row) {
		//add either to Black, White arrays, or discard.
		if (row.sex === 'Both Sexes') {
			if (row.race === 'Black') {
				black.push({ x: row.year, y: row[lifeExp] });
			} else if (row.race === 'White') {
				white.push({ x: row.year, y: row[lifeExp] });
			}
		}
		if (row.race === 'All Races') {
			if (row.sex === 'Male') {
				male.push({ x: row.year, y: row[lifeExp] });
			} else if (row.sex === 'Female') {
				female.push({ x: row.year, y: row[lifeExp] });
			}
		}

	});
	return [
		{ name: 'Black', points: black },
		{ name: 'White', points: white },
		{ name: 'Male', points: male },
		{ name: 'Female', points: female }
	];

}

function renderChart(series) {
	JSC.Chart('chartDiv', {
		title_label_text: 'Life Expectancy in the United States',
		series: {
			type: "line"
		}
		,
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_firstPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
		series: series
	});
}



