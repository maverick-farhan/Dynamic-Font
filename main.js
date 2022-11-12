const tempLoad = () => {
  let temp = document.getElementById("icon");
  temp.innerHTML = `&#xf2cb;`;
  setTimeout(() => {
    temp.innerHTML = `&#xf2ca;`;
    temp.style.color = "#FF731D";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = `&#xf2c9;`;
    temp.style.color = "#FF731D";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = `&#xf2c8;`;
    temp.style.color = "#FF731D";
  }, 3000);

  setTimeout(() => {
    temp.innerHTML = `&#xf2c7;`;
    temp.style.color = "#D2001A";
  }, 4000);
};
tempLoad();

setInterval(tempLoad, 5000);
