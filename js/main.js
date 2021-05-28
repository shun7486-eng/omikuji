'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉','中吉','小吉','大大吉'];
    const n = Math.random();
    if(n < 0.05) {
      btn.textContent = '大吉';// 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉';// 15%
    } else {
      btn.textContent = '小吉';// 80%
    }
  });
}