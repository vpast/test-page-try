import CardsWrap from "../../components/cards/CardsWrap"
import DashboardLayout from "../../components/examples/DashboardLayout"
import TopNavBar from "../../components/navbars/TopNavBar"
import {navlinks} from "../../data/navlinks"
import SideBar from "../../components/navbars/SideBar"

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