async function fetchUserData(url) {
    try {
    const response = await fetch(url);

    if (!response.ok) {
    throw new Error("❌ Error fetching data: " + response.status);
    }

    const data = await response.json(); // wait until JSON is parsed
    console.log("✅ Data:", data);
    } catch (error) {
    console.error("Error:", error.message);
}}

// Usage
fetchUserData("https://jsonplaceholder.typicode.com/users/1");

/*async function fetchUserData(url) {
    try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error: " + response.status);
    return await response.json(); // return the data
    } catch (err) {
    // Optional: rethrow so the caller can handle the error
    throw err;
}}

// Caller example:
(async () => {
    try {
    const data = await fetchUserData(url);
    console.log(data);
} catch (e) {
    console.error(e);
}
})();
*/