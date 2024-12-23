import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Header from "./components/Header"
import HeroSect from "./components/HeroSect"
import Portfolio from "./components/Portfolio"
import SideBar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-10 w-full max-w-[1400px] p-[2rem] md:p-[1rem]">
          <div className="lg:w-4/12 py-[2rem]">
            <SideBar/>
          </div>
          <div className="lg:w-8/12 py-[2rem]">
            <Header/>
            <div className="relative sm:top-[120px] flex flex-col">
              <HeroSect/>
              <About/>
              <Portfolio/>
              <Experience/>
              <Contact/>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default App
