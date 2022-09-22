

//                                     // setings bar // 

let settingsbar = document.querySelector(".settings-box")
let gear = document.querySelector(".fa-gear")
let colors = document.querySelectorAll(".colors ul li")
let yes = document.querySelector(".settings-box .background .yes")
let no = document.querySelector(".settings-box .background .no")
//                                // landing page //


// setting the background change of landingpage

let landingpage = document.querySelector(".landing-page")
let array = ["url(../photos/653692.jpg)","url(../photos/384374.jpg)","url(../photos/143072.jpg)","url(../photos/143066.jpg)","url(../photos/143033.jpg)","url(../photos/27696.jpg)","url(../photos/143033.jpg)","url(../photos/732865.jpg)"]
let count = array.length
let random 
let counter,
randombackground,
backgroundoption = true

// if there is saved background in local storage
if (window.localStorage.getItem("randombackground")!= null) {
    backgroundoption = false
    clearInterval(counter)
    landingpage.style= `background-image:${window.localStorage.getItem("randombackground")}`
    no.classList.add("active")
}else{
    yes.classList.add("active")
}




function backgroundinterval() {
        if (backgroundoption === true) {
                counter = setInterval(() => {
                random = Math.floor(Math.random()*count)
                console.log(random)
                landingpage.style= `background-image:${array[random]}`
                }, 8000);
        }
}
backgroundinterval()


   
    
// }
//                                     // setings bar // 


// take the main color fron localStorage 
if (window.localStorage.getItem("color")) {
    document.body.style.cssText = `--main-color:${window.localStorage.getItem("color")}`
    colors.forEach(color => {
        if (color.dataset.color === window.localStorage.getItem("color")) {
            color.classList.add("active")
        }
    });
}

// show settings bar 
gear.onclick = function () {
    gear.classList.toggle("fa-spin")
    settingsbar.classList.toggle("showset-bar")
}

// changing the main color
colors.forEach(color => {
    console.log(color.dataset.color)
    color.onclick = function () {
        colors.forEach(color => {
            color.classList.remove("active")
        });
        console.log(color.dataset.color)
        document.body.style.cssText = `--main-color:${color.dataset.color}`
        window.localStorage.setItem("color",`${color.dataset.color}`)
        color.classList.add("active")
    }
});
// adding and removing active class from yes & no 

let randombuttons = document.querySelectorAll(".randombuttons span")
randombuttons.forEach(button => {
    button.addEventListener("click",function (e) {
        console.log(e.target)
        // yes & no button to choose the background image
        if (e.target.classList.contains("yes")) {
            backgroundoption = true
            backgroundinterval()
            window.localStorage.removeItem("randombackground")
        } else {
            backgroundoption = false
            clearInterval(counter)
            window.localStorage.setItem("randombackground",array[random])
        }
        randombuttons.forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
    })
});
// 

//                                           // our skills 

let progressspans = document.querySelectorAll(".skills .skill span.skill-progress")
let ourskillsection =  document.querySelector(".skills ")
console.log(ourskillsection)
window.onscroll= function () {
    if (window.scrollY = ourskillsection.offsetTop) {
        progressspans.forEach(span => {
            span.style.width = span.dataset.progress
        });
    }
}



//                                        // gallary 
let imgcontent =document.querySelector(".img-content")
let images = document.querySelectorAll(".img-content img")
console.log(images)

images.forEach(image => {
    image.addEventListener("click",function (e) {
        // create overlay 
        let overlayimg = document.createElement("div")
        overlayimg.className = "img-overlay"
        document.body.appendChild(overlayimg)
        // create img 
        let imgbox = document.createElement("div")
        imgbox.className = "img-box"
        document.body.appendChild(imgbox)
              // create close button 

            let closebutton = document.createElement("span")
            closebutton.className="close-button"
            imgbox.appendChild(closebutton)
            let buttontext = document.createTextNode("x")
            closebutton.appendChild(buttontext)
            // create heading 
            let imghead = document.createElement("h3")
            imghead.className = "img-head"
            imgbox.appendChild(imghead)


        let img = e.target.cloneNode(true)

        img.className = "img-selected"
        imgbox.appendChild(img)

        if (img.alt) {
            imghead.innerText = img.alt
        }

        closebutton.addEventListener("click",function (e) {
            imgbox.remove()
            overlayimg.remove()
})


img.addEventListener("blur",function (e) {
    imgbox.remove()
    overlayimg.remove()
})

    })
    
});
///                                                nav bullets



let bullets = document.querySelectorAll(".nav .bulet")

bullets.forEach(bulet => {
    bulet.addEventListener("click",function (e) {
        window.onscroll
    })
});