/* TIME */
function day() {
	return Date.now()/86400000-20500
}
function daytotimestamp(d) {
	const D = Math.floor(d)
	const h = 24 * (d - D)
	const H = Math.floor(h).toString().padStart(2,0)
	const m = 60 * (h - H)
	const M = Math.floor(m).toString().padStart(2,0)
	const s = 60 * (m - M)
	const S = s.toFixed(3).padStart(6,0).padEnd(3,0)
	return D + ':' + H + ':' + M + ":" + S
}

/* CALCULATION */
function abm() {
	return 3*((23/3)**(1/365))**day()
}
function abmtoday(a) {return Math.log(a/3)/Math.log((23/3)**(1/365))}

/* FOCUSED NUMBERS */
function updateFocusedPart() {
	const focusedIndex = numarray.findIndex((element) => (element[2] >= abm()))
	return [numarray[focusedIndex-1], numarray[focusedIndex]]
}
function updateFocusedElement(html, data) {
	let text = `
		${data[0]} - ${data[1]}
		<div class='txt3'>[${data[2]}]</div>
	`
	//if (data.length == 4) text += `<br>Equivalents: ${data[3].map((a) => a.join(' - ')).join('<br>')}`
	
	document.getElementById(html).innerHTML = text
}
function updateFocusedNumbers() {
	focusedPart = updateFocusedPart()

	updateFocusedElement('lentry', focusedPart[0])
	updateFocusedElement('rentry', focusedPart[1])
}
function percentToNext() {
	return ((1-(focusedPart[1][2]-abm())/(focusedPart[1][2]-focusedPart[0][2]))*100).toPrecision(7).padEnd(7,0) + '%'
}

/* MISC */
function update() {
	document.getElementById('day').innerHTML = 'Days since 2/16/26 in UTC: ' + day().toPrecision(10).padEnd(10,0)
	document.getElementById('abm').innerHTML = `Abmetric Index [${abm().toPrecision(10).padEnd(10,0)}]`
	document.getElementById('next').innerHTML = 'Next entry in ' + daytotimestamp(abmtoday(focusedPart[1][2]) - day())
	document.getElementById('innerbar').innerHTML = percentToNext()
	document.getElementById('outerbar').setAttribute("style", 'width:' + percentToNext())
	if (abm() >= focusedPart[1][2]) {
		updateFocusedNumbers()
		console.log('focused part updated')
	}
}

function load() {
	updateFocusedNumbers()
	update()

	setInterval(update, 1000/30)
}