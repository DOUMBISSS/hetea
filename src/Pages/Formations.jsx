import React from 'react';
// import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Formations  () {
            
    return (
    <div>
        <Navbar />
              <div className='container__header'>
                    <div className='container__description'>
                        <h1>Bacheliers,<br/>Masters & Spécialisations </h1>
                    </div>
              </div>
              <div className='container'>
                <div className='container__formations'>
                    <div className='container__formations__header'>
                        <div className='container__formations__first'>
                            <h1>Trouvez votre future formation</h1>
                        </div>
                        <div className='container__formations__second'>
                            <h1>dans un de nos 12 domaines !</h1>
                    </div>

                    </div>
                    <div className='container__filter__search'>

                    </div>
                    <div className='main__part__formations'>
                        <div className='formations__cards'>
                            <p className='cards__header'>Agronomie & environnement</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/AGRONOMIE%20-%20Agronomie.png" alt="" />
                                <p className='cards__title'>Agronomie</p>
                            </div>
                            </div>

                        </div>
                        <div className='formations__cards'>
                            <p className='cards__header'>Chimie & biotechnologie</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/CHIMIE%20%26%20BIOTECHNOLOGIE%20-%20Chimie.png" alt="" />
                                <p className='cards__title'>Chimie</p>
                            </div>
                            </div>
                        </div>
                        <div className='formations__cards'>
                            <p className='cards__header'>Construction & énergie</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/CONSTRUCTION%20%26%20%C3%89NERGIE%20-%20Construction.png" alt="" />
                                <p className='cards__title'>Construction</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/CONSTRUCTION%20%26%20%C3%89NERGIE%20-%20Energies%20alternatives%20et%20renouvelables.png" alt="" />
                                <p className='cards__title'>Energie renouvelables</p>
                            </div>
                            </div>

                        </div>

                    </div>
                </div>
          </div>
        {/* <Footer/> */}
    </div>
    );
}
