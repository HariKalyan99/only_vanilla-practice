


function navFn(sec) {
    sec.classList.toggle("change")
    var navsection = document.querySelector(".nav_section3")
    if(navsection.className === "nav_section3 change"){
        var navsection = document.querySelector(".nav_section3cat")
        navsection.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; height: 150px; border: 1px solid black; justify-content:space-around;background-color: #e7b78e;")
        navsection.innerHTML=`<a href="#" id="anchorTags">About us</a>
        <a href="#" id="anchorTags">Gallery</a>
        <a href="#" id="anchorTags">Products</a>
        <a href="#" id="anchorTags">ContactUs</a>`
    }else{
        var navsection = document.querySelector(".nav_section3cat")
    navsection.setAttribute("style", "display: none;")
    }
}


function onLoad(){
    let head = document.querySelector(".head_section");
    let head_div = document.createElement("div");
    head_div.innerHTML=`<div id="hero">
            <h1 >Welcome to True.coffee</h1>
            <strong >"Coffee is a language in itself." - Jackie Chan</strong>
        </div>`

        head.append(head_div)
}


// api - https://api.sampleapis.com/coffee/hot

onLoad();
