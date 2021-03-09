import { tests } from "../../data/tests"

const ResultCard = () => {
  return (
    <fieldset>
      <legend>Results {tests.map((test, id) => <p key={id}>{test.title}</p>)} Test</legend>
    </fieldset>
  )
}

export default ResultCard