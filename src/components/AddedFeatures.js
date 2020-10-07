import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";
import { remove_feature } from "../actions/featureActions";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              removefeature={props.remove_feature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};
export default connect(mapStateToProps, { remove_feature })(AddedFeatures);
