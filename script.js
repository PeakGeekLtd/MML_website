const appData = [
    { name: "MML - RemindMe", group: "longevity", price: "£4.99" },
    { name: "MML - VitalMe", group: "longevity", price: "£9.99" },
    { name: "MML - NewMe", group: "longevity", price: "£14.99" },
    { name: "MML - PTMe", group: "transformation", price: "£19.99" },
    { name: "MML - JustMe", group: "transformation", price: "£12.99" },
    { name: "MML - NotJustMe", group: "transformation", price: "£14.99" },
    { name: "MML - EliteMe", group: "performance", price: "£29.99" },
    { name: "MML - AnalyzeMe - Diving", group: "performance", price: "£49.99" },
    { name: "MML - AnalyzeMe - Trampoline", group: "performance", price: "£49.99" },
    { name: "MML - AnalyzeMe - Gymnastics", group: "performance", price: "£49.99" }
];

const grid = document.getElementById('app-grid');

if (grid) {
    grid.innerHTML = '';
    appData.forEach(app => {
        const card = document.createElement('div');
        card.className = `card group-${app.group}`;
        card.innerHTML = `<div class="card-overlay"><h2>${app.name}</h2></div>`;
        card.onclick = () => {
            alert(app.name + " costs " + app.price);
        };
        grid.appendChild(card);
    });
}