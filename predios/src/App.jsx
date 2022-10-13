import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Predio from './components/predio';
import Page1 from './components/Page1';
import Rua from './components/rua';
import styles from './App.module.css'
import Sala from './components/sala';
import Tipo from './components/tipo';

function App() {
  return (
    <Router>
      <div>
        <h1 className={styles.titulo}>Gustavo Bedin</h1>

        <div className={styles.link}>
          <Link to="/" >Página inicial</Link>
          <Link to="/predio" >Predios</Link>
          <Link to="/rua" >Ruas</Link>
          <Link to="/sala" >Salas</Link>
          <Link to="/tipo" >Tipos</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/predio" component={Predio} />
          <Route path="/rua" component={Rua} />
          <Route path="/sala" component={Sala} />
          <Route path="/tipo" component={Tipo} />
          <Route path="/*" component={Page1} />
        </Switch>

      </div>
    </Router>
  )

}


export default App
