let slideDiv = document.getElementById("sliding");
let slideImg1 = document.getElementById("slideImg1");
let slideImg2 = document.getElementById("slideImg2");

let container = document.getElementById("container");

let images1 = [
    "https://www.thomascook.in/images/home-page-banners/2023/mar/Vietnam-Banner-1920x545.jpg",
    "https://resources.thomascook.in/images/holidays/PKG011248/photos/MaldivesNautica1500.jpg",
    "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://wallpapercave.com/dwp1x/wp4088743.jpg",
    "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://resources.thomascook.in/images/holidays/PKG010445/photos/Gangehi_1500.jpg",
    ]
    
let count1 = 0
setInterval(() => {
    slideImg1.src = images1[count1]
    count1++
    if(count1==images1.length){
        count1 = 0;
    }
}, 2000)

let travelData = []
fetchData()

function fetchData(){
  fetch("https://projectnewapi.onrender.com/lucknow")
  .then(res => res.json())
  .then((data)=>{
    console.log(data)
    travelData = data;
    appendData(data);
  })
  .catch((error)=>{
    console.log(error)
  })
}

function appendData(data){
  container.innerHTML="";

  let cardlist = document.createElement("div");
  cardlist.className = "card-list";

  data.forEach((item) => {
    let card =  createCard(item);
    cardlist.append(card)
  })
  container.append(cardlist);
}

function createCard(item){
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id",item.id);

  let imgDiv = document.createElement("div");
  imgDiv.className = "card-img";

  let img = document.createElement("img");
  img.setAttribute("alt", "Image");
  img.src = item.image;

  imgDiv.append(img);

  let bodyDiv = document.createElement("div");
  bodyDiv.className = "card-body";

  let centerDiv = document.createElement("div");
  centerDiv.className = "center-div";

  let h3 = document.createElement("h4");
  h3.className = "card-name";
  h3.textContent = item.name;

  let p1 = document.createElement("p");
  p1.className = "card-rating" ;
  p1.textContent = `Customers Rating : ${item.rating} ⭐`;

  let p2 = document.createElement("p");
  p2.className = "card-category" ;
  p2.textContent = "Every Maldives tour allows you the freedom, flexibility, refreshed and energized.";

  let p3 = document.createElement("p");
  p3.className = "card-price" ;
  p3.textContent = `$ ${item.price} / Person`;
  p3.style.fontWeight = "bold"

  let p4 = document.createElement("p");
  p4.textContent = `${item.name.length}Days/${item.name.length-1} Nights`
  p4.style.color = 'gray'

  let btn = document.createElement("button");
  btn.setAttribute("data-id",item.id);
  btn.className = "card-button" ;
  btn.textContent = "Proceed";

  // let id = item.id
  btn.addEventListener("click",()=>{
    window.location.href = "payment.html";
  })

  centerDiv.append(h3,p2,p4)
  bodyDiv.append(p1,p3,btn);

  card.append(imgDiv,centerDiv,bodyDiv);

  return card;
}


// var video = document.getElementById("video");
//     video.addEventListener('canplaythrough', function() {
//         video.play();
//     });