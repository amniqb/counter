// counter 

let count = 0;

document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("counter").innerHTML = count;
}


document.getElementById("resetButton").onclick = function(){
    count=0;
    document.getElementById("counter").innerHTML = count;
}


document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("counter").innerHTML = count;
}

// color picker

const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
     if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();


// date and time

const dateAndTime = new Date();
document.getElementById("dateAndTime").innerHTML= dateAndTime.toDateString();
