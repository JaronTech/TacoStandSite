import { useNavigate } from "react-router-dom";

import PromoImage from './assets/PromoMeal.jpg';
import bannerImage from './assets/TacoBackground.jpg';
import './Promo.css';

function Index() {
    const navigate = useNavigate()
    return(
        <>
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})`}}>
                <div>
                    <h1>The Taco Stand</h1>
                </div>
            </div>
            <div className="container">
                <img
                    src={PromoImage}
                    alt="Promotional Image"
                    className="image"
                />
                <div className="promo">
                    <p className="paragraph">
                    Dive into a Mexican Fiesta! Our signature Mexican-inspired dish brimming with succulent flavors takes center stage.
                    </p>
                    <input className='button' type='button' value="View The Menu" onClick={() => navigate('menu')} />
                </div>
            </div>
      </>
    );
}

export default Index;