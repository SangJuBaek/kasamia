import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Other from 'pages/Other'
import List from 'pages/List'
import Form from 'pages/Form'
import ReactTableList from 'pages/ReactTableList'
import ToastGrid from 'pages/ToastGrid'
import ReactDataGrid from 'pages/ReactDataGrid'
import EjGrid from 'pages/EjGrid'
import { Layout, Header, Footer } from 'layouts'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhWH9fc3xXTmNUVUw=')

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
          <Route path="/reactDataGrid" element={<ReactDataGrid />} />
          <Route path="/ejGrid" element={<EjGrid />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
