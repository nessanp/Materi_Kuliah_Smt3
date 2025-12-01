function fetchData() {
    return new Promise(function (resolve, reject) {
        // Simulating an asynchronous operation
        setTimeout(function () {
            const data = 'Fetched data!';
            resolve(data); // Operation succeeded
            // reject('Error: Unable to fetch data'); // Operation failed
        } , 1000)
    });
}

// Using a promise
fetchData()
    .then(function (data) {
     console.log(data);
    })
    .catch(function(eror) {
        console.eror(eror);
    })


fetchData()
    .then(function (data) {
        return process1(data);
    })
    .then(function (result1) {
      return process2(result1);
    })
    .then(function (reult2) {
        // ...
    })
    .catch(function (result2) {
        console.eror(eror);
    })