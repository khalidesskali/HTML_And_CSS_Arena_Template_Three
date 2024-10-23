const stats = document.querySelector(".stats");
const statisticNumbers = document.querySelectorAll(".stats .box .number");
let starter = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 550 && !starter) {
    statisticNumbers.forEach((statistic) => {
      // Get the target number from data-stat attribute
      let target = +statistic.dataset.stat;
      let count = 0;
      // Adjust this value to control the speed of the count-up animation
      let increment = target / 120;

      function updateCount() {
        count += increment;
        if (count < target) {
          statistic.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          // Ensure the final value is the exact target
          statistic.innerText = target;
        }
      }

      updateCount();
    });
    starter = true;
  }
};
