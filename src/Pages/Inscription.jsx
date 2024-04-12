import React from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Inscription  () {
            
    return (
    <div>
        <Navbar />
              <div className='container__header__mb'>
                    <div className='container__description'>
                        <h1>S'inscrire à la HETEA </h1>
                    </div>
              </div>
              {/* <div className='campus__header'>
                <h1 className='campus__header__title'>Une Haute École bien ancrée dans sa province </h1>
              </div> */}
              <div className='container'>
               <div className='incription__header'>
               <h2>Inscriptions pour l'année académique 2024 - 2025</h2>
                <h6>Les inscriptions seront possibles <strong>dès le lundi 17 juin 2024 - 9 h 00</strong> - via le module en ligne jusqu'au 30 septembre.<br/>
                    La rubrique documents nécessaires vous aidera à préparer votre dossier. </h6>
               </div>
                    <div className='container__description__inscription'>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_sm/public/images/stock/2022-01/Documents%20n%C3%A9cessaires%20GettyImages-176905378%20720x480.jpg?h=34e43602&itok=Ff0xKh2H" alt="" />
                        <p className='continue__title'>Documents nécessaires</p>
                    </div>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Co%C3%BBt%20des%20%C3%A9tudes%20GettyImages-1321677272%20720x480.jpg?h=34e43602&itok=S3l8t5LZ" alt="" />
                        <p className='continue__title'>Cout des études</p>
                    </div>
                    <div className='description__continue__cards'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_sm/public/images/stock/2022-01/Dispositions%20particuli%C3%A8res%20GettyImages-525213244%20720x480.jpg?h=9a181c76&itok=2_pjmSbu" alt="" />
                        <p className='continue__title'>Dispositions particulières</p>
                    </div>
                </div>
                <div className='container__process'>
                    <h3>Procédures particulières</h3>
                    <div className='process__content'>
                    <div className='description__process'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Etudiants%20UE%20non-r%C3%A9sidents%20GettyImages-1291600080%20720x480_0.jpg?h=35b1f3f4&itok=dM3aiQu3" alt="" />
                        <p className='process__title'>Etudiants UE non-residents</p>
                    </div>
                    <div className='description__process'>
                        <img src="https://www.hepl.be/sites/default/files/styles/tile_md/public/images/stock/2022-01/Etudiants%20hors%20UE%20GettyImages-1291600080%20720x480.jpg?h=35b1f3f4&itok=6Dcolx5E" alt="" />
                        <p className='process__title'>Etudiants hors UE</p>
                    </div>
                    </div>
                    <h3>Vous avez des questions sur les procédures d'inscription ?</h3>
                  <Link to="/contactez--nous">  <button className='btn__support'>Contactez notre support</button></Link>

                </div>
          </div>
        <Footer/>
    </div>
    );
}
