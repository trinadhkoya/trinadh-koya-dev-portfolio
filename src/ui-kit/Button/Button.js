import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

const _STYLES = [
    'btn--primary',
    'btn--outline'
]
const _SIZES = [
    'btn--medium',
    'btn--large'
]


const Button = (props) => {
    const buttonSize = _SIZES.includes(props.buttonSize) ? props.buttonSize : _SIZES[0]
    const buttonStyle = _STYLES.includes(props.buttonStyle) ? props.buttonStyle : _STYLES[0]
    return (
        <button type={props.type} className={`btn ${buttonStyle} ${buttonSize}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    buttonStyle: PropTypes.string,
    buttonSize: PropTypes.string,
    onClick: PropTypes.func
};
Button.defaultProps = {
    onClick: () => {
    }
}

export {Button}