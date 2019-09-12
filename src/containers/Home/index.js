import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinearProgress from '@material-ui/core/LinearProgress';
import { map, capitalize } from 'lodash'

import Search from '../../components/Search';

import { connect } from 'react-redux'
import { Wrapper, List, Card } from './styled'
import { getPopularMovies, getPopularShows } from './actions'

const useStyles = makeStyles(theme => ({
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

class Home extends Component {
    componentDidMount() {
        this.props.getPopularMoviesConnect();
        this.props.getPopularShowsConnect();
    }

    renderList({ movies, shows }) {
        return map({movies, shows}, (list, title) => {
            return (
                <li key={title}>
                    <ul style={{ backgroundColor: '#fff', padding: 0 }}>
                        <ListSubheader>
                            {capitalize(title)}
                        </ListSubheader>

                        {list.map(item => (
                          <ListItem key={`item-${title}-${item}`} button>
                            <ListItemText primary={item.title} secondary={item.year} />
                          </ListItem>
                        ))}
                    </ul>
                </li>
            )
        })
    }

    render() {
      const { movies, shows, isLoading, state } = this.props;

      if (isLoading) return <LinearProgress />;

      return (
          <Wrapper>
            <Card>
                <List subheader={<li />}>

                  { this.renderList({movies, shows}) }

                </List>
            </Card>
          </Wrapper>
      );
    }
};

export default connect(state => ({
    movies: state.home.movies,
    shows: state.home.movies,
    isLoading: state.home.isLoading,
}), {
    getPopularMoviesConnect: getPopularMovies,
    getPopularShowsConnect: getPopularShows
})(Home)
