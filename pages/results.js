import DashboardLayout from "../components/examples/DashboardLayout"
import ResultCard from "../components/cards/ResultCard"
import SideBar from "../components/navbars/SideBar"
import TopNavBar from "../components/navbars/TopNavBar"
import {navlinks} from "../data/navlinks"

const ResultsPage = () => {
  return (
    <DashboardLayout>
      <TopNavBar navlinks={navlinks} />
      <SideBar />
      <ResultCard />
    </DashboardLayout>
  )
}

export default ResultsPage