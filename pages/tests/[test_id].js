import {useRouter} from 'next/router'
import {getTestQuestions} from "../../data/questions"
import Question from "../../components/Question"
import {useState} from "react"
import DashboardLayout from '../../components/examples/DashboardLayout'
import TopNavBar from '../../components/TopNavBar'
import SideBar from '../../components/SideBar'

const TestPage = () => {
  const router = useRouter();
  const {title} = router.query;
  const {test_id} = router.query;

  const questions = getTestQuestions(test_id);
  const [activeIndex, setActiveIndex] = useState(0);
  const question = questions[activeIndex]

  return (
    <DashboardLayout>
      <TopNavBar/>
      <SideBar />
        <h1>Test {title}</h1>
        {!!question && <Question data={question} />}
    </DashboardLayout>
  )
}

export default TestPage