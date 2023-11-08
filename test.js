// const tabsBox = document.querySelector(".tabs-box");
// allTabs = document.querySelectorAll(".tab")
// arrowIcons = document.querySelectorAll(".icon i"); 


// let isDragging = false;


// const handleIcons = ( ) => {
//     let scrollVal = tabsBox.scrollLeft;
//     let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
//     arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
//     arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";

// }



// arrowIcons.forEach(icon => {
//     icon.addEventListener("click" , ( ) => {
//        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
//        setTimeout( () => handleIcons() , 50);
//     });
// });


// allTabs.forEach(tab => {
//     tab.addEventListener("click", ( ) => {
//         tabsBox.querySelector(".active").classList.remove("active");
//         tab.classList.add("active")
//     })
// })


// const dragging = ( e ) => {
//     if(!isDragging) return;
//     tabsBox.classList.add("dragging");
//     tabsBox.scrollLeft -= e.movementX;
// }

// const dragStop = ( ) => {
//     isDragging = false;
//     tabsBox.classList.remove("dragging");
// }


// tabsBox.addEventListener("mousedown", () => isDragging = true)
// tabsBox.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop );


const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow");
const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow");

const removeAllActiveClasses = () => {
    tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.style.borderBottomColor = ""; 
    });
};

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
        
        const colors = ["skyblue", "blueviolet", "red", "goldenrod", "wheat", "lightpink", "lightgreen", "orangered", "violet","cyan", "yellowgreen"];
        tab.style.borderBottomColor = colors[index % colors.length];
    });
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
    } else {
        leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

    if (tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else {
        rightArrowContainer.classList.add("active");
    }
};

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
    manageIcons();
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
    manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);

let dragging = false;

const drag = (e) => {
    if (!dragging) return;
    tabsList.classList.add("dragging");
    tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
    dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
    dragging = false;
    tabsList.classList.remove("dragging");
});
