import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Grooming from './pages/grooming'
import Clinica from './pages/clinica'
import Productos from './pages/productos'
import Promociones from './pages/promociones'
import About from './pages/about'
import Contactanos from './pages/contactanos'
import Header from './components/header/header'
import Footer from './components/footer/footer'
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/grooming'>
					<Grooming />
				</Route>
				<Route exact path='/clinica'>
					<Clinica />
				</Route>
				<Route exact path='/productos'>
					<Productos />
				</Route>
				<Route exact path='/promociones'>
					<Promociones />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/contactanos'>
					<Contactanos />
				</Route>
			</Switch>

			<Footer />
		</Router>
	)
}

export default App
