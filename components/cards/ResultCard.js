import { tests } from "../../data/tests"

const ResultCard = (props) => {
  const test = props.test
  return (
    <fieldset>
      <legend>Results {test.title} Test</legend>
    </fieldset>
  )
}

export default ResultCard