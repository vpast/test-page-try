import {useRouter} from 'next/router'
import {getTestQuestions} from "../../data/questions"
import Question from "../../components/Question"
import {useState} from "react"
import DashboardLayout from '../../components/examples/DashboardLayout'
import TopNavBar from '../../components/navbars/TopNavBar'
import SideBar from '../../components/navbars/SideBar'
import {navlinks} from "../../data/navlinks"
import TransitionButton from '../../components/ui/buttons/TransitionButton'
import Button from "../../components/ui/buttons/Button"

const TestPage = () => {
  const router = useRouter();
  const {title} = router.query;
  const {test_id} = router.query;

  const questions = getTestQuestions(test_id);
  const [activeIndex, setActiveIndex] = useState(0);
  const question = questions[activeIndex]

  const nextQuestion = () => {
    if(activeIndex + 1 > questions.length - 1) {
      return;
    }
    setActiveIndex(activeIndex + 1)
  }

  
  const prevQuestion = () => {
    if(activeIndex - 1 < 0) {
      return;
    }
    setActiveIndex(activeIndex - 1)
  }
  
  {console.log(questions[activeIndex])}
  return (
    <DashboardLayout>
      <TopNavBar navlinks={navlinks} />
      <SideBar />
        <h1>Test {title}</h1>
        {!!question && <Question data={question} />}
        <TransitionButton onClick={prevQuestion} text="Prev" />
        <TransitionButton onClick={nextQuestion} text="Next" />
        <Button text="Result" url={`/tests/results/${test_id}`}/>
    </DashboardLayout>
  )
}

export default TestPage