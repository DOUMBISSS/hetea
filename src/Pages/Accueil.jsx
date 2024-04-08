import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
// import { useDispatch, useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";
import Footer from './Footer';

export default function Accueil () {
    
  const [display,setDisplay]= useState(false);
  

  const [cart,setCart]= useState(false);

  const closeCart = ()=> {
    setCart (false)
}
const showCart =()=>{
    setCart (true)
}
  // const newArrivages = useSelector(state=>state.categoryReducer.newArrivages);
  // const newsProducts = useSelector(state=>state.categoryReducer.newsProducts);
  // const carts = useSelector(state => state.cartReducer.carts);

    //   useEffect(()=>{
    //     localStorage.setItem("carts",JSON.stringify(carts));
    // })

    return (
      <div>
                <Marquee className="marquee" speed={80}>
                Les inscriptions et réinscriptions pour l'année universitaire 2023 - 2024 ont commencé et se poursuivent tous les jours de 8 h 00 à 16 h 00 depuis le 1er Aout 2023.
                 </Marquee>

               <Navbar/>
            <div className='main--part--container'>
              <div className='main--part--container--image'>
                <img src="Banderole.jpg" alt="" />
              </div>
            </div>
            <div className='container'>
              <div className='container--presentation'>
                <div className='container--presentation--content'>
                  <h2>L’ECOLE-IT forme des experts en informatique</h2>

                  <p className='desc'>L’ECOLE-IT forme des experts en informatique et délivre des titres professionnels reconnus par l’Etat de Niveau Bac+3 et Bac+5. </p>

                  <p className='desc'>L’ECOLE-IT rassemble des experts de la formation et des personnes issues du secteur professionnel privé et public, de façon à offrir à 
                    ses étudiants une formation de pointe, qui combine théorie et pratique. Elle offre à ses étudiants un environnement dynamique et une formation 
                    répondant de près aux besoins des entreprises et s’adaptant à ceux-ci au fur et à mesure de l’évolution des technologies afin de leur garantir 
                    un accès direct au marché de l’emploi, dès la fin de leurs études.</p>

                    <p className='amb'>« Notre ambition : ​​former les futurs talents du numérique »</p>

                    <p className='desc'>Fort de leur expérience entrepreneuriale dans la Data dans le secteur pharmaceutique, Martin Zanchetta et Paul Moreau ont identifié un besoin crucial 
                      de professionnels qualifiés et formées à l’IT. ​Suite à la cession de leur entreprise, ils ont fondé l’ECOLE-IT pour promouvoir les métiers de l’informatique et 
                      surtout répondre aux besoins des entreprises en matière de ressources humaines qualifiées.​​</p>
                </div>
              </div>

          </div>

          <div className='section__formation'>
            <h3>Nos Formations</h3>
            <div className='section__formation__container'>
                <div className='cards__formation'>
                  <div className='cards__formation__title__box'>
                      <h3>Gestion, Juridique, Développement durable</h3>
                  </div>
                  <div className='cards__formation__description'>
                        <li> Gestion Immobilière</li>
                        <li>Assistant de direction en langues et gestion</li>
                        <li> Gestion Immobilière</li>
                        <li>Bachelier en Droit</li>
                        <li> Bachelier en commerce et développement</li>
                        <li> Assistant de direction médical</li>
                      
                  </div>
                </div>
                <div className='cards__formation'>
                  <div className='cards__formation__title__box'>
                      <h3>Ingénierie et Technologie</h3>
                  </div>
                  <div className='cards__formation__description'>                      
                        <li>Ingénieur industriel en chimie</li>
                        <li>Ingénieur industriel en informatique</li>
                        <li>Ingénieur industriel en physique nucléaire et médicale</li>
                        <li>Ingénieur industriel mécanicien – génies mécanique et aéronautique</li>
                        <li>Conseiller en prévention, sécurité industrielle et environnement</li>

                      
                  </div>
                </div>
                <div className='cards__formation'>
                  <div className='cards__formation__title__box'>
                      <h3>Informatique</h3>
                  </div>
                  <div className='cards__formation__description'>                     
                  <li>Master en cybersécurité</li>
                  <li>Informaticien industriel</li>
                  <li>Informaticien réseaux et télécommunications</li>
                  <li>Développeur d’applications</li>   
                  </div>
                </div>
                <div className='cards__formation'>
                  <div className='cards__formation__title__box'>
                      <h3>Social, Information et Documentation</h3>
                  </div>
                  <div className='cards__formation__description'>
                        
                  <li>Assistant·e social·e</li> 
                  <li>Accueil et éducation du jeune enfant</li> 
                  <li> Bibliothécaire – Documentaliste</li> 
                  <li>Ingénierie et actions sociales – MIAS</li> 

                  </div>
                </div>
            </div>
            <div className='btn__block'>
              <button className='btn__formations'>Toutes nos formations</button>
            </div>

          </div>
          <div className="question--part">
            <div className="question--part--content">
             <h3 className='question'>À la recherche d'un service de nettoyage, nous proposons différent services !!</h3>
            <div className="question--part--btn">
             <Link className='liste' to="/contactez--nous"> 
              <button className="btn--contact">Contactez-nous !</button>
             </Link>
            </div>
            </div>
        </div>

          {/* <div className='part__newsletter'>
            <div className='part__newsletter__content'>
              <h3 className='news__header'>Ne manquez pas nos excellentes offres & Recevez des offres de tous nos meilleurs par e-mail !</h3>
                <div className='news__container'>
                      <div className='news__container__content'>
                      <div className="news__container__input">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Sélectionnez votre ville</option>
                      <option value="1">Abidjan</option>
                    </select>
                    </div>
                    <div class="form-floating col-md-7">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Addresse email</label>
                    </div>
                      <button className='btn__newsletter'>Abonnez-vous à la newsletter</button>
                      </div>
                </div>
            </div>
          </div>  */}
          <Footer/>
        </div>

    );
}

