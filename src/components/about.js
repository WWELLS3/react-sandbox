import React from 'react';
import createReactClass from 'create-react-class';

var About = createReactClass({

    // lifecycle method --> setup default props
    getDefaultProps: function() {
        return {
            selectedColor: 'blue',
            defaultColor: 'red',
        }
    },

    // lifecycle method --> setup default state
    getInitialState: function() {
        return {
            isSelected: false,
        }
    },

    // lifecycle method --> what we want to render
    render: function() {

        let background = this.props.defaultColor;
        if (this.state.isSelected) {
            background = this.props.selectedColor;
        }

        let colorBoxStyle = {
            background,
            height: 45
        };

        return (
            <div>
                <button style={{background: '#eee', height: 45, width: 100, margin: 10}} onClick={this.handleClick}>
                    Toggle Selection
                </button>
                <div style={colorBoxStyle}></div>
            </div>
        )
    },

    handleClick: function() {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }
});

export default About;