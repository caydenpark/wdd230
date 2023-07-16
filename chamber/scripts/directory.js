data = null;
window.addEventListener("load", (event) => {
    const data = fetch("./data/members.json")
        .then((response) => response.json())
        .then((result) => (this.data = result));
    console.log(data);
});