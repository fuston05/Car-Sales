import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from './actions/carActions';

//components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
      props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          removeFeature={removeFeature}
          car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }//end return
}//end mapStateToProps

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);

// connect is a function that gets called twice!
// The first call:
// takes two arguments
// 1- a function (mapStateToProps) - this maps our redux state to the props of the component we are connecting

// 2- an object of action creators - this wraps each action creator inside dispatch, and then adds the AC to the props of the component we are connecting

// The second call takes the component you wish to connect as an argument
