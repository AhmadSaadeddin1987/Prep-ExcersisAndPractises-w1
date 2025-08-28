/*function getData() {    
    return new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
    if (success) {
        resolve("u are awesome");
    } else {
        reject("u are not awesome");
    }
    }, 2000);
});
}

// using the Promise
getData()
.then((result) => {
    console.log("passed", result);
})  
.catch((error) => {
    console.error("Error", error);
})
.finally(() => {
    console.log("the end");
});*/
function fetchUserData(url) {
    return fetch(url)
    .then((response) => {
    if (!response.ok) {
        // If the server returned an error
        return Promise.reject("❌ Error fetching data: " + response.status);
    }
      return response.json(); // Return the response as JSON
    });
}

// Usage
fetchUserData("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => {
    console.log("✅ Data:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });