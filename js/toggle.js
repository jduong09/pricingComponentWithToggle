document.addEventListener('DOMContentLoaded', () => {
  // const toggleContainer = document.querySelector('toggle-container');
  const toggleCircle = document.getElementById('toggle-circle');
  const monthlyElements = document.getElementsByClassName('pricing-monthly');
  const yearlyElements = document.getElementsByClassName('pricing-yearly');
  toggleCircle.addEventListener('click', () => {
    if (toggleCircle.classList.contains('monthly')) {
      toggleCircle.classList.remove('monthly');
      toggleCircle.classList.add('yearly');
      for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].classList.add('hide');
        yearlyElements[i].classList.remove('hide');
      }
    } else {
      toggleCircle.classList.remove('yearly');
      toggleCircle.classList.add('monthly');
      for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].classList.remove('hide');
        yearlyElements[i].classList.add('hide');
      }
    }
  });
});