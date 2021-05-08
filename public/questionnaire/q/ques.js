(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Do you have trouble controlling your worries?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Does worry make you feel fatigued or worn out?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you experience repetitive and persistent thoughts that are upsetting and unwanted?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do your muscles get tense when you are worried?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you have trouble falling asleep even though you are fatigued?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you ever avoid places or social situation for fear of th panic?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you worry about how well you do things?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you feel impulsive, pent up, and ready to explode?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Does you feel aggressive, unyielding, or inflexible when pressed for time ?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you experience dizzyness when rising or standing up from a kneeling or sitting position?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you feel tired for no apparent reason?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you sleep more than nine hours a night ",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you have diarrhea or bouts of nausea with or without vomiting ?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "How often do you have headaches?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you have poor appetite or overeact on situations?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you feel down or hopeless?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you experience little interest or pleasure in doing things?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you feel bad about yourself - or that you are a failure or have let yourself or your family down",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question:
        "Do you have thoughts that you would be better off dead, or of hurting yourself?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Does simple day to day task take great effort?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
    {
      question: "Do you feel trapped or caught.?",
      answers: {
        a: "Rarely",
        b: "Sometimes",
        c: "Very Often",
      },
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
