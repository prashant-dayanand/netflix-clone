import './App.css';
import Row from "./Row"
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFILX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending now" fetchURL={requests.fetchTrending} isLarge/>
      <Row title="Top rated" fetchURL={requests.fetchTopRated} isLarge/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLarge/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Footer />
    </div>
  );
}

export default App;
