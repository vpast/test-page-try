// откуда test берет данные? Если он не связан с tests.js? Либо я чего то не понимаю

import Link from "next/link"

const Card = (props) => {
  const test = props.test; 
  return (
    <div className="card text-center">
      <div className="card-body">
        <h1 className="card-title">{test.title}</h1>
        <p className="card-text">{test.description}</p>
        <Link href={`/tests/${test.title}`} activeClassName="btn btn-primary lol">
          Go Try!
        </Link>
      </div>
    </div>
  )
}

export default Card