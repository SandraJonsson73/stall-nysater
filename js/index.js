document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".image-and-news");

  const newsBox = document.createElement("div");
  newsBox.classList.add("news-boxen");
  newsBox.innerHTML = `
      <h3>Senaste nytt</h3>
      <p>25/5-26, Mantorp<br>
      Idag skulle Eve kört Midde i premieloppet, men eftersom Midde råkade bryta hennes finger så fick Oskar Svanberg köra honom. Midde klarade premien galant på tiden 1.31,0g och 20.000 kr kunde ägaren/tränaren inkassera. 
      </p>
    `;

  container.appendChild(newsBox);
});