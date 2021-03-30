console.log("****scores loaded");

const history = JSON.parse(localStorage.getItem("history"));

let list = "";
for (let i = 0; i < history.length; i++) {
    list += `
        <li class="list-score-item">
            <span>Player: ${history[i].user}</span>
            <span>Score: ${history[i].score}</span>
        </li>
    `;
}

document.querySelector(".scoreBoard").innerHTML = list;