import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GroceryList extends Component {
  render(){
    return(
      <div>
        <h3>{this.props.dayOfWeek}</h3>
        <ol>
          {this.props.data.map((item)=><li key={item.key}>{item.name}</li>)}
        </ol>
      </div>
    )
  }
}

GroceryList.defaultProps = {
  data:[]
}

GroceryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  })),
};
