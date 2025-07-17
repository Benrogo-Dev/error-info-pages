async function fetchBareInformation() {
    const memoryElement = document.getElementById("memory");
    const versionElement = document.getElementById("version");

    await fetch("/bare/").then((resp) => {
        resp.text().then((textResp) => {
            const jsonResp = JSON.parse(textResp);
            memoryElement.innerText = jsonResp.memoryUsage;
            versionElement.innerText = jsonResp.project.version;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBareInformation();
});