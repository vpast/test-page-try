import CardsWrap from "../../components/CardsWrap"
import DashboardLayout from "../../components/examples/DashboardLayout"
import TopNavBar from "../../components/TopNavBar"
import {navlinks} from "../../data/navlinks"
import SideBar from "../../components/SideBar"

const IndexPage = () => {
  return (
    <DashboardLayout>
      <TopNavBar navlinks={navlinks} />
      <SideBar />
      <CardsWrap />
    </DashboardLayout>
  )
}

export default IndexPage