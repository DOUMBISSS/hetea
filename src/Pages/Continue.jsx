import React from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Continue  () {
            
    return (
    <div>
        <Navbar />
              <div className='container__header__continue'>
                    <div className='container__description'>
                        <h1>Certificats & <br/>formations continues </h1>
                    </div>
              </div>
              <div className='container'>
                <div className='container__description__continue'>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_sm/public/images/stock/2022-01/Certificats%20GettyImages-963192098%20720x480.jpg?h=47c2b8da&itok=dsgklgKt" alt="" />
                        <p className='continue__title'>Certificats</p>
                    </div>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Formations%20continues%20GettyImages-469711926%20720x480.jpg?h=397f25c3&itok=gvDzqXnX" alt="" />
                        <p className='continue__title'>Formation continue</p>
                    </div>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_sm/public/images/stock/2022-01/S%C3%A9minaires%20et%20conf%C3%A9rences%20GettyImages-829570660%20720x480.jpg?h=4a732484&itok=3OQnL47W" alt="" />
                        <p className='continue__title'>Séminaires et conférences</p>
                    </div>
                </div>
          </div>
        <Footer/>
    </div>
    );
}
