import React from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Campus  () {
            
    return (
    <div>
        <Navbar />
              <div className='container__header__campus'>
                    <div className='container__description'>
                        <h1>Nos campus </h1>
                    </div>
              </div>
              <div className='campus__header'>
                <h1 className='campus__header__title'>Une Haute École bien ancrée dans sa province </h1>
              </div>
              <div className='container'>
                <div className='container__description__campus'>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/Campus%202000%20vignette%20516x798.JPG" alt="" />
                        <p className='campus__title'>Campus 2000 - Jemepe</p>
                    </div>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/Barbou%20vignette%20516x798.jpg" alt="" />
                        <p className='campus__title'>Campus Barbou</p>
                    </div>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/6.png" alt="" />
                        <p className='campus__title'>Campus Beeckman</p>
                    </div>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/Gloesener%20vignette%20516x798.jpg" alt="" />
                        <p className='campus__title'>Campus Gloesener</p>
                    </div>

                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/2021-06%20-%20La%20Reid-24%20vignette%20516x798.jpg" alt="" />
                        <p className='campus__title'>Campus La Reid</p>
                    </div>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/Campus%20Kurth_vignette.png" alt="" />
                        <p className='campus__title'>Campus Kurth</p>
                    </div>
                    <div className='campus__cards'>
                        <img src="https://www.hepl.be/sites/default/files/images/campus/vignettes/Parc%20des%20Marets%20vignette%20516x798.jpg" alt="" />
                        <p className='campus__title'>Campus Glazz</p>
                    </div>
                </div>
          </div>
        <Footer/>
    </div>
    );
}
