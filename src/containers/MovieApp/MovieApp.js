import React, {Component} from 'react';
import './MovieApp.css';
import {nanoid} from "nanoid";
import MovieAdd from "../../components/Movie/MovieAdd/MovieAdd";
import MovieItem from "../../components/Movie/MovieItem/MovieItem";

class MovieApp extends Component {
    saveMovies = JSON.parse(localStorage.getItem('movies'));
    state = {
        movies: this.saveMovies ? this.saveMovies : [],
        movieName: ''
    }

    addNewMovie (e) {
        this.setState({movieName: e.target.value});
    }

    addNewMovieInList (e) {
        e.preventDefault();
        const movies = [...this.state.movies];
        movies.push({name: this.state.movieName, id: nanoid()});
        localStorage.setItem('movies', JSON.stringify(movies));
        this.setState({
            movies,
            movieName: ''
        });
    }

    removeMovie (id) {
        const i = this.state.movies.findIndex(item => item.id === id);
        const movies = [...this.state.movies];
        movies.splice(i, 1);
        localStorage.setItem('movies', JSON.stringify(movies));
        this.setState({movies});

    }

    onChangeNameMovie (e, id) {
        const i = this.state.movies.findIndex(m => m.id === id);
        const movies = [...this.state.movies];
        const movieItem = {...movies[i]};
        movieItem.name = e.target.value;
        movies[i] = movieItem;
        localStorage.setItem('movies', JSON.stringify(movies));
        this.setState({movies});
    }

    render() {
        let duration = 0.2;
        return (
            <div className="MovieApp">
                <MovieAdd
                    value={this.state.movieName}
                    addNewMovie={(e) => this.addNewMovie(e)}
                    addNewMovieInList={(e) => this.addNewMovieInList(e)}
                />
                <h4 className="MovieApp-title">To watch list: </h4>
                {this.state.movies.length > 0 ? this.state.movies.map(item => <MovieItem
                    key={item.id}
                    name={item.name}
                    duration={duration += 0.2}
                    change={(e) => this.onChangeNameMovie(e, item.id)}
                    remove={() => this.removeMovie(item.id)}
                />) : <p style={{textAlign: 'center'}}>The list is empty</p>}
            </div>
        );
    }
}

export default MovieApp;