const correctAnswers = ["C", "B", "C", "B", "D"];
const form = document.querySelector(".quiz_questions");
const finalScore = document.querySelector(".finalscore");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  //   check for correct answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
    const scoreSheet = document.querySelector(".quiz_Score");
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
      finalScore.textContent = output + "%";
      if (output === score) {
        clearInterval(timer);
      } else {
        output++;
      }
    }, 100);
    scoreSheet.style.display = "block";
  });
});
