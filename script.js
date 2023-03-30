const cherry = document.querySelector('.icon');

class LikeCounter {
  constructor() {
    this.clickedCount = 0;

    const plus = document.querySelector('.increase');
    const minus = document.querySelector('.decrease');
    const cherry = document.querySelector('.icon');

    plus.addEventListener('click', () => {
      this.clickedCount += 1;
      console.log(this.clickedCount);
      cherry.style.setProperty('--fontSize', `${this.clickedCount}`);
      
    });
    minus.addEventListener('click', () => {
      this.clickedCount -= 1;
      console.log(this.clickedCount);
      cherry.style.setProperty('--fontSize', `${this.clickedCount}`);
    });
  }
}
new LikeCounter();
