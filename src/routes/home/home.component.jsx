import { Link } from 'react-router-dom';
import './home.styles.scss'
const Home = () => {
    return (
        <div className="home-container">
            <Link to='/shop' >
                <img alt="home-img" src="https://media.gq-magazine.co.uk/photos/63244cd55e12bea61b490cd4/master/pass/Daniel-Fletcher-spring-2023-hp.jpg"></img>
                <div className="button-enter-site">ENTER SITE</div>
            </Link>
        </div>)

}

export default Home;
