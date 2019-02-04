console.log("hallej");
const items = document.getElementsByClassName("item")
console.log(items)
for (let i = 0; i < items.length; i++){
    //console.log(items[i])
    items[i].addEventListener("click", (e) => {
        console.log(e + " din lilla räka")
        
    })
}
const items2 = document.getElementsByClassName("item2");

for (let i = 0; i < items.length; i++){
    //console.log(items[i])
    items[i].addEventListener("click", (e) => {
    })
}