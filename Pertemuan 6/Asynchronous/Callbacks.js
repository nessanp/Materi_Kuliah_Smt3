function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function () {
        const data = 'Fetched data!';
        callback(data);
    }, 1000);
}

// Using a callback
fetchData(function (data) {
    console.log(data);
});


fetchData(function (data) {
    process1(data, function(result1) {
        process2(result1, function(result2) {
            // ...

        });
    });
});


