import { Provider } from "react-redux"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import store from "./Redux/store"



function App() {

  return (
    <Provider store={store}>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        {/* <!-- navbar --> */}
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />
          <hr className="mt-4" />

          {/* <!-- todo list --> */}
          <Todos />

          <hr className="mt-4" />

          {/* <!-- footer --> */}
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App
