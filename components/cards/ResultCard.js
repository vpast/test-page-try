const ResultCard = (props) => {
  const test = props.test;
  return (
    <fieldset>
      <legend>Results {test.title} Test</legend>
      {console.log(test.title)}
    </fieldset>
  )
}

export default ResultCard