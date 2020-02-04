window.onload = function () {
	// document.getElementById('go').addEventListener('click', loadPredefinedPanorama, false);

	for (let i = 1; i < 15; i++) {
		let img = $(`<div class='img' style='background-image:url(images/img${i}.jpg)'></div>`)
		img.on('click',()=>{
			loadPredefinedPanorama(`img${i}.jpg`)
		})
		$('.imglist').append(img)
	}



	loadPredefinedPanorama('img15.jpg')

	document.getElementById('pano').addEventListener('change', upload, false);
	// this.document.getElementById('button').addEventListener('click', ()=>{loadPredefinedPanorama('img12.jpg')});

};

// Load the predefined panorama
function loadPredefinedPanorama(imgName) {
	// evt.preventDefault();

	var div = document.getElementById('container');

	var PSV = new PhotoSphereViewer({
		// Path to the panorama
		panorama: `images/${imgName}`,

		// Container
		container: div,

		// Deactivate the animation
		time_anim: false,

		// Display the navigation bar
		navbar: true,

		// Resize the panorama
		size: {
			width: '100%',
			height: '500px'
		}
	});
}

// Load a panorama stored on the user's computer
function upload() {
	// Retrieve the chosen file and create the FileReader object
	var file = document.getElementById('pano').files[0];
	var reader = new FileReader();

	reader.onload = function () {
		var div = document.getElementById('your-pano');

		var PSV = new PhotoSphereViewer({
			// Panorama, given in base 64
			panorama: reader.result,

			// Container
			container: div,

			// Deactivate the animation
			time_anim: false,

			// Display the navigation bar
			navbar: true,

			// Resize the panorama
			size: {
				width: '100%',
				height: '500px'
			}
		});
	};

	reader.readAsDataURL(file);
}
