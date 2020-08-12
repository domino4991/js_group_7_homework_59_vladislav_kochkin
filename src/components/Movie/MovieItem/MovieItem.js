import React, {Component} from 'react';
import './MovieItem.css';
import Button from "../../UI/Button/Button";

class MovieItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name !== this.props.name;
    }

    render() {
        return (
            <div
                className="MovieList-item"
                style={this.props.duration ? {
                    animationDuration: `${this.props.duration}s`
                } : null}
            >
                <input
                    type="text"
                    name="movieName"
                    value={this.props.name}
                    onChange={this.props.change}
                    className="MovieList-item__movie-name"
                />
                <Button
                    type="button"
                    label="X"
                    clicked={this.props.remove}
                />
            </div>
        );
    }
}

export default MovieItem;