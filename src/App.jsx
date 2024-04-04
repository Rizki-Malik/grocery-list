import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Actions from "./components/Actions"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Form />
      <List />
      <Actions />
      <Footer />
    </div>
  )
}