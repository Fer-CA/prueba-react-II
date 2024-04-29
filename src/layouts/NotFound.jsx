import Foto from "../assets/img/404.png"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const NotFound = ()=> {
  

    return (
      <>
      <h1 className="text-center py-5">Página no encontrada</h1>
      <div className="caja">
        <img src={Foto} alt="imagen" height={500}/>
        <Link to="/">
        <Button className="me-auto" variant="warning">Volver</Button>
        </Link>
      </div>
      
      </>
    )
  }
  
  export default NotFound