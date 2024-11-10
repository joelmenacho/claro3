import { Button } from "react-bootstrap";
import img from '../assets/img/sub_include.png';

const PlanMCard = ({
    isRecommend,
    isNew,
    title,
    price,
    gigas,
    gigasFC,
    covertura,
}) => {
    return (
        <div className="col-md-4">
            <div className="card d-flex flex-column gap-3 p-3">
                {isRecommend ? <div className="badge bg-danger text-white">RECOMENDADO</div> : ''}
                {isNew ? <div className="badge bg-info text-white">NUEVO</div> : ''}
                <div className={`d-flex justify-content-between  ${isRecommend || isNew ? 'mt-4' : 'mt-2'}`}>
                    <div className='d-flex'>
                        <h5 className='text-center text-danger'>{title.split(' ')[0]}</h5>
                        <h5 className='text-center text-black'>{title.split(' ')[1]}</h5>
                    </div>
                    <p className="text-center fs-4 fw-bold">S/ {price}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-muted">Gigas:</p>
                    <p className='fw-bold fs-5'>
                        {gigas} GB
                    </p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-muted">Gigas con Full Claro:</p>
                    <p className='fw-bold text-danger fs-5'>{gigasFC} GB</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-muted">Cobertura Internacional:</p>
                    <p>{covertura}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-muted">Suscripción: Gratuita</p>
                    <img src={img} alt="beneficio" className="m-0" />
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-muted">Beneficios adicionales:</p>
                    <div className='fw-bold'>
                        <div className='d-flex'>
                            <p className='text-danger'>Claro</p>
                            <p>Club</p>
                        </div>
                        <div className='d-flex'>
                            <p className='text-danger'>Claro</p>
                            <p>Video</p>
                        </div>
                    </div>
                </div>
                <Button variant="outline-danger" className="w-100 mt-3">Tienda Online</Button>
                <a href="/" className="d-block text-center mt-2 text-primary">Saber más</a>
            </div>
        </div>
    );
}

export default PlanMCard;