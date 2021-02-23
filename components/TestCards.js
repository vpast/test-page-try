import {useRouter} from "next/router"
import {getTestTitle} from "../data/test"
import {test} from "../data/test"

const TestCards = () => {
  // const router = useRouter();
  // const {testTitle} = router.query;
  // const test = getTestTitle(testTitle);

  return (
    <div className="d-flex row">
      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          {/* <h1 className="card-title">{testTitle}</h1> */}
          <h1 className="card-title">{test.title}</h1>
          {console.log(test.title)}
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>

      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h1 className="card-title">Test 2</h1>
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>

      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h1 className="card-title">Test 3</h1>
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>

      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h1 className="card-title">Test 4</h1>
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>

      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h1 className="card-title">Test 5</h1>
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>

      <div className="card col-4 text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h1 className="card-title">Test 6</h1>
          <p className="card-text">Simple test!</p>
          <a href="#" className="btn btn-primary">Go Try!</a>
        </div>
      </div>
    </div>
  )
}

export default TestCards