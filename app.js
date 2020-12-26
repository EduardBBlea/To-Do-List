const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let tasks = [];

const addTask = () => {
    if (input.value) {
        tasks.push(input.value);
        let li = document.createElement("li");
        li.innerText = tasks.pop();
        ul.appendChild(li);
        input.value = "";
        li.addEventListener("click", () => {
            li.classList.toggle("done");
        })

    }
};

btn.addEventListener("click", () => {
    addTask();
});


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    };
});

