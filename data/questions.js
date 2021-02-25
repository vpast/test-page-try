export const questions = [
  {
    test_id: 1,
    text: "HTML 2+2",
    options: [
      {text: "3"},
      {text: "4"},
      {text: "5"}
    ],
    answer: 1
  },
  {
    test_id: 2,
    text: "CSS 2-2",
    options: [
      {text: "0"},
      {text: "1"},
      {text: "2"}
    ],
    answer: 0
  },
  {
    test_id: 3,
    text: "JS 3-5",
    options: [
      {text: "0"},
      {text: "-2"},
      {text: "2"}
    ],
    answer: 1
  },
  {
    test_id: 4,
    text: "Java 3+3",
    options: [
      {text: "6"},
      {text: "9"},
      {text: "5"}
    ],
    answer: 0
  },
  {
    test_id: 5,
    text: "React 2/2",
    options: [
      {text: "1"},
      {text: "2"},
      {text: "0"}
    ],
    answer: 0
  },
  {
    test_id: 6,
    text: "C# 10+10",
    options: [
      {text: "10"},
      {text: "100"},
      {text: "20"}
    ],
    answer: 2
  }
]

export const getTestQuestions = (testId) => {
  return questions.filter(question => question.test_id == testId)
}