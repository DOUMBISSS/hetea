import React from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Student  () {
            
    return (
    <div>
        <Navbar />
              <div className='container__header__student'>
                    <div className='container__description'>
                        <h1>Vie étudiante </h1>
                    </div>
              </div>
              <div className='campus__header'>
                <h1 className='campus__header__title'>Vivez la HETEA !</h1>
              </div>
              <div className='container'>
                <div className='container__description__student'>
                <div className='description__student__life'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/VOUS%20GUIDER%20VOUS%20AIDER%20ET%20VOUS%20SOUTENIR%20GettyImages-649871644_0.jpg?h=5a0d69eb&itok=bXoJdrDp" alt="" />
                        <p className='student__title'>vous guider, vous soutenir</p>
                    </div>
                    <div className='description__student__life'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Vous%20loger%20GettyImages-862087184%20720x480.jpg?h=7ec37136&itok=Mel4g67y" alt="" />
                        <p className='student__title'>Vous loger, vous nourrir</p>
                    </div>

                    <div className='description__student__life'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Valoriser%20vos%20talents%20GettyImages-970499016%20720x480.jpg?h=34e43602&itok=Y7KRflNO" alt="" />
                        <p className='student__title'>Valoriser vos talents</p>
                    </div>
                </div>
          </div>
        <Footer/>
    </div>
    );
}
