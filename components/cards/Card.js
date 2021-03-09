import Link from "next/link"
import Button from "../ui/buttons/Button"

const Card = (props) => {
  const test = props.test;
  return (
    <div className="card text-center">
      <div className="card-body">
        <h1 className="card-title">{test.title}</h1>
        <p className="card-text">{test.description}</p>
        <Button text="Go try!" url={`/tests/${test.id}`}/>
      </div>
    </div>
  )
}

export default Card