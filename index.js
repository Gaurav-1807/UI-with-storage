let users = JSON.parse(localStorage.getItem('user')) || [];


const ui = (users) => {
    document.getElementById("ui").innerHTML = ""

    let temp = ``;
    users.map((ele, user) => {
        temp += `
        <div class="div">
        <img src=${ele.img} alt =""  class="img">
        <h3>Name : ${ele.name}</h3>
      
        <p> Price: ${ele.Number} $</P>
        <p> category: ${ele.category} </P>
        <button class="update"> Add to cart</button>
       
      
        </div>
        `
    })
    document.getElementById("ui").innerHTML = temp;
}

ui(users)

const userdata = (e) => {
    e.preventDefault();
    let user = {
        img: document.getElementById("img").value,
        name: document.getElementById("name").value,
        Number: document.getElementById("Number").value,
        category: document.getElementById("category").value
    };

    users.push(user);
    console.log(users);
    localStorage.setItem("user", JSON.stringify(users));
    ui(users)
}


document.querySelector(".form").addEventListener("submit", userdata);

// sorting low to high

const handlelth = () => {
    let data = users.sort((a, b) => a.Number - b.Number);
    ui(data);
    console.log(data);
}

document.getElementById("lth").addEventListener("click", handlelth)


const handlehtl = () => {
    let data = users.sort((a, b) => b.Number - a.Number);
    ui(data);
    console.log(data);
}


document.getElementById("htl").addEventListener("click", handlehtl)

// category selection by filter 

const handlecatogory = (cat)=>{
    let data = users.filter((ele) => ele.category == cat)
    ui(data);
   
}

let cat = ["male", "female", "kids"]

for (let i = 0; i < cat.length; i++) {
    let btn = document.createElement("button")
    btn.innerHTML = cat[i]
    btn.setAttribute("id", cat[i])
    document.getElementById("btns").append(btn)
}


for (let i = 0; i < cat.length; i++) {
    document
        .getElementById(cat[i])
        .addEventListener("click", () => handlecatogory(cat[i]))
}


find = () => {
    let value = document.getElementById("value").value
    let data = users.filter((val) => val.name.includes(value.toLowerCase()))
    ui(data);
}

document.getElementById("value").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        find();
    }
   
})



document.getElementById("search").addEventListener("click", find)

