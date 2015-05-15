(function() {

	var dragInstructions = 'Drag an image file here.';
	var dropInstructions = 'Drop to test the tiling';
	var imageError = 'Unsupported image format.';

	var dropArea = document.getElementById('droparea');

	var fileReader = new FileReader();

	fileReader.addEventListener('load', function(event) {
		document.body.style.backgroundImage = 'url(' + event.target.result + ')';
	});

	dropArea.addEventListener('dragover', function(event) {
		event.preventDefault();
	});

	dropArea.addEventListener('dragenter', function(event) {
		event.preventDefault();
		dropArea.textContent = dropInstructions;
	});

	dropArea.addEventListener('dragleave', function(event) {
		event.preventDefault();
		dropArea.textContent = dragInstructions;
	});

	dropArea.addEventListener('drop', function(event) {
		event.preventDefault();

		var files = event.dataTransfer.files;

		if (files.length > 0) {
			var file = files.item(0);
			if (file.type.match(/^image/)) {
				fileReader.readAsDataURL(file);
				dropArea.textContent = dragInstructions;
			} else {
				dropArea.textContent = imageError;
			}
		}
	});

	dropArea.textContent = dragInstructions;

})();