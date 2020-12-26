const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createItem = ()=>{
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click",()=>{
       li.classList.toggle("done");
        console.log(li.classList);
        
    } )
    
}

btn.addEventListener("click",()=>{
    if(input.value){
        createItem();
    };
})
   

input.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
       createItem();
    }
})

