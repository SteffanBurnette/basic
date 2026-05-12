const select = document.getElementById("theme");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function updateBG(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change", () =>{
    
    switch (select.value){
        case "black":
            updateBG("black", "white");
            break;
        
        case "red":
            updateBG("red", "black");
            break;

        default:
            updateBG("white", "black");
            break;
    }

});

/**
 * 
  select.addEventListener("change", () =>
    select.value === "black" 
    ? updateBG("black", "white")
    : updateBG("white", "black"),
);
 */