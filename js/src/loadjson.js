function loadJSON(url, name, xhr, callback) {
	// Check if local storage is supported
	if (typeof(Storage) !== 'undefined') {

		var check = localStorage.getItem(name);
		if (check !== null) {
			console.log('available');
			callback(JSON.parse(check));
		} else {
			console.log('downloading');
			$.ajax({
				dataType: 'json',
				url: url,
				xhr: xhr,
				success: function(data) {
					console.log('success' + data);
					localStorage.setItem(name, JSON.stringify(data));
					callback(data);
				}
			});
		}

	} else {
console.log('failed');
		$.ajax({
			dataType: 'json',
			url: url,
			xhr: xhr,
			success: function(data) {
				callback(data);
			}
		});

	}
}
