const TransitionButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="btn btn-success"
    >{props.text}</button>
  )
}

export default TransitionButton