import DashboardLayout from "../../../components/examples/DashboardLayout"
import ResultCard from "../../../components/cards/ResultCard"
import SideBar from "../../../components/navbars/SideBar"
import TopNavBar from "../../../components/navbars/TopNavBar"
import {navlinks} from "../../../data/navlinks"
import {tests} from "../../../data/tests"
import { useRouter } from 'next/router'

const ResultsPage = () => {
  const router = useRouter()
  const { test_id } = router.query
  const test = tests.find((item) => {
    if (item.id == test_id) {
        return true
      }
      else {
        return false
      }
  })
  return (
    <DashboardLayout>
      <TopNavBar navlinks={navlinks} />
      <SideBar />
      <ResultCard test={test} />
    </DashboardLayout>
  )
}

export default ResultsPage