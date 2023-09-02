let questionsData = [
    {
      text: "1. Who is the father of C language?",
      answers: [
        {
          text: "Steve Jobs",
          isCorrect: false
        },
        {
          text: "James Gosling",
          isCorrect: false
        },
        {
          text: "Dennis Ritchie",
          isCorrect: true
        },
        {
            text: "Rasmus Lerdorf",
            isCorrect: false
        }
      ]
    },
    {
      text: "How can we describe an array in the best possible way?",
      answers: [
        {
          text: "The Array shows a hierarchical structure.",
          isCorrect: false
        },
        {
          text: "Arrays are immutable.",
          isCorrect: false
        },
        {
          text: "Container that stores the elements of similar types",
          isCorrect: true
        },
        {
          text: "The Array is not a data structure",
          isCorrect: false
        }
      ]
    },
    {
      text: "How is an array initialized in C language?",
      answers: [
        {
          text: "int a[3]={1,2,3}",
          isCorrect: true
        },
        {
          text: "int a={1,2,3}",
          isCorrect: false
        },
        {
          text: "int a[]=new int[3]",
          isCorrect: false
        },
        {
          text: "int a(3)",
          isCorrect: false
        }
      ]
    },
    {
      text: "In witch year was the first version of c++ released",
      answers: [
        {
          text: "1982",
          isCorrect: true
        },
        {
          text: "1995",
          isCorrect: false
        },
        {
          text: "1983",
          isCorrect: false
        },
        {
          text: "1985",
          isCorrect: false
        }
      ]
    },
    {
      text: " From a complete graph, by removing maximum _______________ edges, we can construct a spanning tree.",
      answers: [
        {
          text: " e-n+1",
          isCorrect: true
        },
        {
          text: "n-e+1",
          isCorrect: false
        },
        {
          text: " n+e-1",
          isCorrect: true
        },
        {
          text: " e-n-1",
          isCorrect: false
        }
      ]
    },
    {
      text: "Which of the following algorithm cannot be desiged without recursion −",
      answers: [
        {
          text: " Tower of Hanoi",
          isCorrect: false
        },
        {
          text: " Fibonacci Series",
          isCorrect: false
        },
        {
          text: " Tree Traversal",
          isCorrect: true
        },
        {
            text: " None of the above",
            isCorrect: true
        }
      ]
    },
    {
      text: " Maximum degree of any vertex in a simple graph of vertices n is",
      answers: [
        {
          text: " 2n - 1",
          isCorrect: false
        },
        {
          text: "n",
          isCorrect: false
        },
        {
          text: "n+1",
          isCorrect: false
        },
        {
            text: "n-1",
            isCorrect: true
        }
      ]
    },
    {
      text: "What is the worst case time complexity of linear search algorithm?",
      answers: [
        {
          text: "Ο(1)",
          isCorrect: false
        },
        {
          text: "Ο(n)",
          isCorrect: false
        },
        {
          text: " Ο(log n)",
          isCorrect: true
        },
        {
            text: "Ο(n2)",
            isCorrect: true
        }
      ]
    },
    {
      text: " Postfix expression is just a reverse of prefix expression.",
      answers: [
        {
          text: "True",
          isCorrect: false
        },
        {
          text: "False",
          isCorrect: true
        },

      ]
    },
    {
      text: "What is the built in library function to compare two strings?",
      answers: [
        {
          text: "string_cmp()",
          isCorrect: false
        },
        {
          text: "strcmp()",
          isCorrect: true
        },
        {
          text: " equals()",
          isCorrect: false
        },
        {
            text: " str_compare()",
            isCorrect: false
        }
      ]
    },
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);
  