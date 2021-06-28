import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Container from '@material-ui/core/Container'

function App() {
  return (
    <Container>
      <Header />
      <Homepage />
    </Container>
  );
}

export default App;
