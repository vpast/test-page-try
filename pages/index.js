import DashboardLayout from "../components/examples/DashboardLayout"
import TopNavBar from "../components/TopNavBar"
import {navlinks} from "../data/navlinks"
import SideBar from "../components/SideBar"

const IndexPage = () => {
  return (
    <DashboardLayout>
      <TopNavBar navlinks={navlinks} />
      <SideBar />
      <h1>This is Home Page!</h1>
    </DashboardLayout>
  )
}

export default IndexPage