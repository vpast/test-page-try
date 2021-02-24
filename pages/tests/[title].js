import {useRouter} from 'next/router'
import {getTestQuestions} from "../../data/questions"
import Question from "../../components/Question"
import {useState} from "react"

const TestPage = () => {
  const router = useRouter();
  const {title} = router.query;
  const {test_id} = router.query;

  const questions = getTestQuestions(test_id);
  const [activeIndex, setActiveIndex] = useState(0);
  const question = questions[activeIndex]

  return (
    <div className="container">
      <h1>Test {title}</h1>
      {!!question && <Question data={question} />}
      {console.log(test_id)}
    </div>
  )
}

export default TestPage