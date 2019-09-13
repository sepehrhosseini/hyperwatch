import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { map, capitalize } from 'lodash'

import history from '../../history';
import Search from '../../components/Search';
import TitleDetail from '../../components/TitleDetail';

import { connect } from 'react-redux'
import { Wrapper, List, Card } from './styled'
import * as Actions from './actions'

class Home extends Component {
    componentDidMount() {
        const { getPopularMovies, getPopularShows, getSingleTitle, match } = this.props;

        getPopularMovies();
        getPopularShows();

        if (match.params.title_type && match.params.title_id) {
            getSingleTitle({
                type: match.params.title_type,
                id: match.params.title_id,
            });
        }
    }

    onTitleClick = ({ title, type }) => {
        const { getSingleTitle } = this.props;

        getSingleTitle({
            type,
            id: title.ids.imdb
        })

        history.push(`/${type}/${title.ids.imdb}`);

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
                            <ListItem key={`item-${title}-${item}`} button onClick={() => this.onTitleClick({ title: item, type: title })}>
                            <ListItemText primary={item.title} secondary={item.year} />
                          </ListItem>
                        ))}
                    </ul>
                </li>
            )
        })
    }

    render() {
      const { movies, shows, isLoading, singleState } = this.props;
      return (
          <Wrapper>
              <Grid container>
                  <Grid md={4} item>
                    <Card isLoading={isLoading}>
                        <List subheader={<li />}>

                          { this.renderList({movies, shows}) }

                        </List>
                    </Card>
                  </Grid>
                  <Grid md={8} item>
                      <TitleDetail
                          title={singleState.title}
                          isLoading={singleState.isLoading}
                      />
                  </Grid>
            </Grid>
          </Wrapper>
      );
    }
};

export default connect(state => ({
    movies: state.home.movies,
    shows: state.home.shows,
    isLoading: state.home.isLoading,
    singleState: state.home.single
}), {
    getPopularMovies: Actions.getPopularMovies,
    getPopularShows: Actions.getPopularShows,
    getSingleTitle: Actions.getSingleTitle
})(Home)
