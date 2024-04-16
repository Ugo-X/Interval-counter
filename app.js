const items = document.querySelectorAll(".number");

const updateCount = (el) => {
  console.log(el);
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  //   we want to create an interval in which in a certain amount of time, the count increases in and in which if the increment amount is greater than the original value in the item, it will by default take the original value
  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
