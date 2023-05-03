
import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style = {{backgroundImage: "url(/img/Rodapé.png)"}}>
        <div className="redes">
            <a href="https://facebook.com">
                <img src="/img/facebook.png" alt="perfil de facebook" />
            </a>
            <a href="https://twitter.com">
                <img src="/img/twitter.png" alt="perfil de twitter" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Logo de OrozCorp" />
        <strong> Desarrollado por Jorge Orozco Barragán y Alura </strong>
    </footer>
}

export default Footer;