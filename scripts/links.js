const baseURL = "https://caydenpark.github.io/wdd230/";
const linksURL = "https://caydenpark.github.io/wdd230/data/links.json"

const activies = document.querySelector("activities")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks){
    weeks.weeks.forEach(week => {
        const weekElement =  document.createElement('div');
        const weekElementP = document.createElement('p');
        weekElementP.textContent = `${week.week}: `;
        const linksContainer = document.createElement('div');
        const links = week.links.map(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            return linkElement.outerHTML;
        });
        linksContainer.innerHTML = links.join(' | ');
        weekElement.appendChild(weekElementP);
        weekElement.appendChild(linksContainer);
        activies.appendChild(weekElement);
    });
}