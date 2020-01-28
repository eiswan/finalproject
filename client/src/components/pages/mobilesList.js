import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {Carousel}  from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/carousel.css'
import {getMobiles} from '../../redux/action/mobilesAction';

import MobileItem from './mobileItem';



class MobilesList extends Component{
  componentDidMount(){
    this.props.getMobiles()
  }
  render(){
    const mobilesList = this.props.mobiles.map(function(mobilesArr){
      return(
        <div className='col l4 xs12 s12 m4' key={mobilesArr._id}>
          <MobileItem
                _id= {mobilesArr._id}
                model={mobilesArr.model}
                weight={mobilesArr.weight}
                os={mobilesArr.os}
                internalmemory={mobilesArr.internalmemory}
                ram={mobilesArr.ram}
                camera={mobilesArr.camera}
                battery={mobilesArr.battery}
                color={mobilesArr.color}
                price={mobilesArr.price}/>
        </div> 
            )
    })
    return(
        <div>
<div className='row'>
<Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
<div>
            <img src="https://360.here.com/hs-fs/hubfs/Lamborghini%20Huracan%20EVO.jpg?width=4961&name=Lamborghini%20Huracan%20EVO.jpg" alt="mobile" />
            <p className="legend">Exotic</p>
            </div>
            <div>
            <img src="http://www.trendycovers.com/covers/Lamborghini_GT_facebook_cover_1347273395.jpg" alt="mobile"/>
                    <p className="legend">Special Editions</p>
            </div>
            <div>
            <img src="http://www.uniquefbcovers.com/covers/preview/IMG_76128237917931.jpeg"alt="mobile" />
            <p className="legend">Japnese</p>
            </div>
            <div>
            <img src="http://www.uniquefbcovers.com/covers/preview/bmw_m3_fall-wallpaper-1440x900.jpg"alt="mobile"/>
                    <p className="legend">Coupe</p>
                    
            </div>
            <div>
            <img src="http://www.uniquefbcovers.com/covers/preview/dodge_challenger_rt-wide.jpg"alt="mobile" />

                    <p className="legend">Muscle Cars</p>
            </div>
            <div>
            <img src="http://www.uniquefbcovers.com/covers/preview/vintage_car_hd-wallpaper-1440x90068.jpg" alt="mobile"/>
                    <p className="legend">Classic</p>
            </div>
            <div>
            <img src="https://online-vehicle.brandcrock.com/wp-content/uploads/sites/4/2013/05/slider_1_1.jpg" alt="mobile"/>
                    <p className="legend">Covertable</p>
            </div>
            <div>
            <img src="http://www.trendycovers.com/covers/audi_e_tron_facebook_cover_1347084213.jpg" alt="mobile"/>
                    <p className="legend">Electric</p>
            </div>
           

          </Carousel>
</div>
          {/* <div className='row'>
            <Cart />
          </div> */}
          <div className='row' style={{marginTop:'15px'}}>
              {mobilesList}
          </div>
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    mobiles: state.mobiles.mobiles,

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getMobiles:getMobiles
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobilesList);
