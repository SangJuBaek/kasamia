import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Other from 'pages/Other'
import List from 'pages/List'
import Form from 'pages/Form'
import ReactTableList from 'pages/ReactTableList'
import ToastGrid from 'pages/ToastGrid'
import { Layout, Header, Footer } from 'Layouts'

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="/reactTableList" element={<ReactTableList />} />
          <Route path="/toastGrid" element={<ToastGrid />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
