import React, {Component} from 'react';
import './MovieAdd.css';
import Button from "../../UI/Button/Button";

class MovieAdd extends Component {
    render() {
        return (
            <form className="MovieAdd-form" onSubmit={this.props.addNewMovieInList}>
                <input
                    type="text"
                    placeholder="Enter movie name..."
                    value={this.props.value}
                    id="MovieAdd-input"
                    name="movie-name"
                    onChange={this.props.addNewMovie}
                    required
                />
                <Button
                    label="add"
                    type="submit"
                />
            </form>
        );
    }
}

export default MovieAdd;