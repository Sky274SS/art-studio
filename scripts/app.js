const $callButton = document.querySelector("#call_button")
const $portfolioButton = document.querySelector(".portfolio_button")
const $portfolioContainer = document.querySelector("#portfolio_container")

$callButton.addEventListener("click",()=>{
    if($callButton.textContent==="Позвонить"){
        $callButton.textContent="8-962-000-98-34"
    }
    else{
        $callButton.textContent="Позвонить"
    }
})

$portfolioButton.addEventListener("click",()=>{
    if($portfolioButton.textContent==="показать еще"){
        $portfolioButton.textContent="скрыть"
    }
    else{
        $portfolioButton.textContent="показать еще"
    }

    if($portfolioContainer.classList.contains("none")) {
        $portfolioContainer.classList.remove("none")
    }
    else {
        $portfolioContainer.classList.add("none")
    }
})

for (let i=0; i<51;i++){
    let portfolio = `<div class="portfolio"> <img src="images/Portfolio/${i+5}.jpg" alt="portfolio-1"> </div>`
$portfolioContainer.insertAdjacentHTML('beforeend',portfolio)
}

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

