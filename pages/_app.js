import Layout from '../components/shared/layout/layout'
import '../styles/globals.css'
import "../styles/button.style.css"
import "../components/shared/badge/badge.css"
// import "react-datepicker/dist/react-datepicker.css";
// import "../components/shared/badge/badge.css"
// import 'tw-elements';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp

