
import "../styles/main.scss";


const App = ({Component, pageProps}) => {
  return <Component {...pageProps} appProps="Hello From App"/>
}

export default App;
