export const test = [
  {
    title: "HTML",
    id: 1
  },
  {
    title: "CSS",
    id: 2
  },
  {
    title: "JS",
    id: 3
  },
  {
    title: "Java",
    id: 4
  },
  {
    title: "React",
    id: 5
  },
  {
    title: "C#",
    id: 6
  }
]

export const getTestTitle = (testTitle) => {
  return test.filter(test => test.title == testTitle)
}