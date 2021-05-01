
function setBackgroundColor(color) {
    document.getElementById("color-container").style.backgroundColor = color;

}

function redButtonClicked() {
    setBackgroundColor("eec7c7");
}

document.getElementById("color-btn-red").onclick = redButtonClicked;

function yellowButtonClicked() {
    setBackgroundColor("ffe29f");

}

document.getElementById("color-btn-yellow").onclick = yellowButtonClicked;


function greenButtonClicked() {
    setBackgroundColor("d6ffbb");

}
document.getElementById("color-btn-green").onclick = greenButtonClicked;


function lightblueButtonClicked() {
    setBackgroundColor("c3f0ff");

}
document.getElementById("color-btn-lightblue").onclick = lightblueButtonClicked;


function blueButtonClicked() {
    setBackgroundColor("7eb9cc");

}
document.getElementById("color-btn-blue").onclick = blueButtonClicked;



function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
	unhideLightbox("p2");
}

document.getElementById("pic-2").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("p3");
}
document.getElementById("pic-3").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("p4");
}
document.getElementById("pic-4").onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("p5");
}
document.getElementById("pic-5").onclick = unhideLightbox4;


function unhideLightbox5() {
	unhideLightbox("p6");
}
document.getElementById("pic-6").onclick = unhideLightbox5;


function unhideLightbox6() {
	unhideLightbox("p8");
}
document.getElementById("pic-8").onclick = unhideLightbox6;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

	document.getElementById(lightboxID).classList.add('hidden');
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;



