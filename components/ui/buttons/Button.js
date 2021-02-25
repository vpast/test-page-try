import Link from "next/link"

const Button = (props) => {
  return (
    <Link href={props.url}>
      <a className="btn btn-primary">
        {props.text}
      </a>
    </Link>
  )
}

export default Button