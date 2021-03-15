import { tests } from "../../data/tests"

const ResultCard = (props) => {
  const test = props.test
  return (
    <fieldset>
      <legend>Results {test.title} Test</legend>
      <table>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Correct</th>
            <th>Incorrect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default ResultCard