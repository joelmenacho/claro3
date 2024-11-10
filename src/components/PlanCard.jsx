import { Button } from "react-bootstrap";
import img from '../assets/img/sub_include.png';

const PlanCard = ({
    isRecommend,
    title,
    price,
    velFC,
    velRegular
}) => {
    return (
        <div className="col-md-4">
            <div className="card position-relative pt-3">
                {isRecommend ? <div className="badge bg-danger text-white">RECOMENDADO</div> : ''}
                <div className='d-flex flex-column align-items-end px-3'>
                    <span>Precio mensual:</span>
                    <p className="text-center fw-bold fs-4">S/ {price}</p>
                </div>
                <h5 className={`text-center bg-secondary bg-opacity-10 py-4 text-danger ${isRecommend ? 'mt-4' : 'mt-2'}`}>{ title }</h5>
                <div className='d-flex flex-column gap-3 p-3'>
                    <div className='d-flex justify-content-between'>
                        <p className="text-muted">Velocidad con Full Claro:</p>
                        <p className='text-danger fw-bold'>{velFC}Mbps</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className="text-muted">Velocidad regular:</p>
                        <p className='fw-bold'>{velRegular}Mbps</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className="text-muted">Suscripción: Incluida</p>
                        <img src={img} alt="beneficio" className='m-0' />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className="text-muted">Beneficios adicionales:</p>
                        <div className='d-flex fw-bold'>
                            <p className='text-danger'>Claro</p>
                            <p>Club</p>
                        </div>
                    </div>
                    <Button variant="outline-danger" className="w-100 mt-3">Solicitar</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Conoce más</a>
                </div>
            </div>
        </div>
    );
}

export default PlanCard;