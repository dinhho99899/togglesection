//using selectors inside the element
const all = document.querySelectorAll('.question');
all.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function (e) {
    question.classList.toggle('show-text');
    all.forEach(function (e) {
      if (e != question) {
        e.classList.remove('show-text');
      }
    });
  });
});
