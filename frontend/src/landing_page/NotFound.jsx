import { Link } from "react-router-dom";
function NotFound() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-2 mb-4">404 Page Not Found  </h1>  
                <p className="mb-5">Sorry the page you are looking for does not exists. </p>
                <Link to={"/"}>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Go Home</button>
               </Link>
               
            </div> 
            
        </div>
     );
}

export default NotFound;