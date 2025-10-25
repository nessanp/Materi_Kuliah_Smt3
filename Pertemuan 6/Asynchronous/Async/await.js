async function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            const data = 'Fetched data!';
            resolve(data);
        }, 1000);
    });
}

// Using async/await
async function getData(){
    try {
        const data = await fetchData()
        console.log(data)
    } catch(error){
        console.error(error)
    }
}

getData()


    // async with promise
async function processData(){
    try {
        const data = await fetchData()
        const result1 = await process1(data)
        const result2 = await process2(result1)
        const finalResult = await process3(result2)
        console.log('Final Result: ', finalResult)
    }catch(error){
        console.error(error)
    }
}

processData()