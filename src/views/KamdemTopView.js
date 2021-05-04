import React from 'react';


import desktopImage from '../img/stage_pk.jpg';
import mobileImage from '../img/stage_pk_mobile_v2.jpg';

import KamdemItemList from '../views/Components/KamdemItemList.js';
import KamdemStage from '../views/Components/KamdemStage.js';
import KamdemPosts from '../views/Components/KamdemPosts.js';
import KamdemCard from './Components/KamdemCard.js';
import KamdemOffers from './Components/KamdemOffers.js';


function KamdemTopView () {

  const words = ['Beratung', 'Analyse', 'Tests', 'IT - Architektur', 'Softwareentwicklung', 'UX Design'];
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const imageUrl = window.innerWidth >= 570 ? desktopImage : mobileImage;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);
 
  return (
    <div>
      <div className="kamdem-stage" style={{ marginBottom : '30px' , backgroundImage : `url(${imageUrl})`, backgroundRepeat: 'no-repeat'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <KamdemStage />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop : '30px',marginBottom : '30px' }}>
        <div className="row">
          <div className="col-sm-12">
          {/*  <KamdemPosts /> */}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop : '30px',marginBottom : '30px' }}>
        <div className="row">
          <div className="col-sm-6">
            <KamdemCard /> 
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <KamdemOffers /> 
              </div>
              <div className="col-sm-12">
                <div className="mb-5">
                  <KamdemItemList words={words} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KamdemTopView;