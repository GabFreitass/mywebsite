import "./styles.scss";
import ufcamisasLogo from "assets/images/ufcamisas-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-header">
      <nav className="navigation-menu">
        <Link to="/home">Início</Link>
        <Link to="/camisas">Camisas</Link>
        <img id="logo-img" src={ufcamisasLogo} alt="Logo UFCamisas" />
        <input type="search" name="search-products" id="navigation-searchBar" />
      </nav>
    </header>
  );
}

export default Header;
