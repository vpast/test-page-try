import { useState, useEffect } from "react";


const Question = (props) => {
  const data = props.data
  const [result, setResult] = useState('');
  useEffect(() => {
    setResult('')
  }, [data])
  return (
  <div>
    <h3>{data.text}</h3>
    {
      data.options.map((option, index) => {
        return (
          <p key={index} onClick = {() => {
            setResult((index === data.answer) ? "Правильно" : "Не правильно")
          }}>
            {option.text}
          </p>
        )
      })
    }
    <div>
      <p>{result}</p>
    </div>
  </div>
  )

}

export default Question;