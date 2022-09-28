import Patty from "./ingredients/patty/patty";
import Tomato from "./ingredients/tomato/tomato";
import Cheese from "./ingredients/cheese/cheese";
import Bacon from "./ingredients/bacon/bacon"
import React, {Component} from 'react';
import propTypes from 'prop-types';
import "./ingredients.css"
class Ingredients extends Component {
    render() {
        let ingr = null;
        switch (this.props.type) {
            case ('brd-bottom'):
                ingr = <div className="brd_bottom"></div>;
                break;
            case ('brd-top'):
                ingr = (
                <div className="brd_top">
                    <div className="seed"></div>
                    <div className="seed2"></div>
                    <div className="seed3"></div>
                    <div className="seed4"></div>
                    <div className="seed5"></div>
                    <div className="seed6"></div>
                    <div className="seed7"></div>
                    <div className="seed8"></div>
                    <div className="seed9"></div>
                    <div className="seed10"></div>
                    <div className="seed11"></div>
                    <div className="seed12"></div>
                </div>
                );
                break;
            case ('patty'):
                ingr = <div><Patty/></div>;
                break;
            case ('tomato'):
                ingr = <div><Tomato/></div>;
                break;
            case ('cheese'):
                ingr = <div><Cheese/></div>
                break;
            case ('bacon'):
                ingr = <div><Bacon/></div>
                break;
            default:
                ingr = null;
        };
        return ingr;
    };
};

Ingredients.proptype = {
    type: propTypes.string.isRequired
}

export default Ingredients;