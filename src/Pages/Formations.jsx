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
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Rechercher...</label>
                        </div>

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

                        <div className='formations__cards'>
                            <p className='cards__header'>Electromécanique & gestion de production</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/ELECTROM%C3%89CANIQUE%20%26%20GESTION%20DE%20PRODUCTION%20-%20Electrom%C3%A9canique.png" alt="" />
                                <p className='cards__title'>Electrmécanique</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/ELECTROM%C3%89CANIQUE%20%26%20GESTION%20DE%20PRODUCTION%20-%20Gestion%20de%20production.png" alt="" />
                                <p className='cards__title'>Gestion de production</p>
                            </div>
                            </div>

                        </div>

                        <div className='formations__cards'>
                            <p className='cards__header'>Gestion & Droit</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20Comptabilit%C3%A9.png" alt="" />
                                <p className='cards__title'>Comptabilité</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20Droit.png" alt="" />
                                <p className='cards__title'>Droit</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20Marketing.png" alt="" />
                                <p className='cards__title'>Marketing Commercial</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20Management%20de%20la%20logistique.png" alt="" />
                                <p className='cards__title'>Management Logistique</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20International%20Business.png" alt="" />
                                <p className='cards__title'>International Business</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/SOCIAL%20-%20Gestion%20des%20ressources%20humaines.png" alt="" />
                                <p className='cards__title'>Gestion des ressources humaines</p>
                            </div>
                            </div>

                        </div>

                        <div className='formations__cards'>
                            <p className='cards__header'>Numérique & informatique</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/NUM%C3%89RIQUE%20%26%20INFORMATIQUE%20-%20Informatique%20de%20gestion.png" alt="" />
                                <p className='cards__title'>Informatique</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/NUM%C3%89RIQUE%20%26%20INFORMATIQUE%20-%20Architecture%20des%20syst%C3%A8mes%20informatiques.png" alt="" />
                                <p className='cards__title'>Architecture des systèmes informatiques</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/NUM%C3%89RIQUE%20%26%20INFORMATIQUE%20-%20Techniques%20infographiques.png" alt="" />
                                <p className='cards__title'>Infographie</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/NUM%C3%89RIQUE%20%26%20INFORMATIQUE%20-%20Jeux%20vid%C3%A9os.png" alt="" />
                                <p className='cards__title'>Dev app Mobile & Web</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/GESTION%20%26%20DROIT%20-%20International%20Business.png" alt="" />
                                <p className='cards__title'>International Business</p>
                            </div>
                            </div>

                        </div>

                        <div className='formations__cards'>
                            <p className='cards__header'>Santé</p>
                            <div className='box__cards'>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/SANT%C3%89%20-%20Audiologie.png" alt="" />
                                <p className='cards__title'>Audiologie</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/SANT%C3%89%20-%20Sage-femme.png" alt="" />
                                <p className='cards__title'>Sage Femme</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/SANT%C3%89%20-%20Sciences%20infirmi%C3%A8res.png" alt="" />
                                <p className='cards__title'>Science infirmière</p>
                            </div>
                            <div className='cards'>
                                <img src="https://www.hepl.be/sites/default/files/images/formations/backgrounds/SANT%C3%89%20-%20Di%C3%A9t%C3%A9tique.png" alt="" />
                                <p className='cards__title'>Diététique</p>
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
