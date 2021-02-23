import Card from "./Card"
import {tests} from "../data/tests"

const CardsWrap = () => {
  return (
    <div className="row">
      { tests.map((test, i) => <div key={i} className="col-4 cardPosition"><Card test={test} /></div>) }
    </div>
  )
}

export default CardsWrap