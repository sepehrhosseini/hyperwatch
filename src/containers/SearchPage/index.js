import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import TitleDetail from '../../components/TitleDetail';
import { map, capitalize, get } from 'lodash';

import { Card, List, Wrapper } from '../Home/styled';
import {
    searchTitles
} from './actions';
import {
    updateSearchQuery as updateQueryAction
} from '../Header/actions';
import {
    getSingle as getSingleAction
} from '../Titles/actions';

class SearchPage extends Component {
    state = {
        selected: {
            isLoading: false,
            title: null,
        }
    }

    componentDidMount() {
        const { match, updateQuery } = this.props;

        const queryInURL = get(match, 'params.query');
        if (queryInURL && queryInURL !== this.props.query) {
            updateQuery(queryInURL)
        }
    }

    handleItemClick = ({ title, type }) => {
        const { getSingle } = this.props;

        getSingle({
            id: get(title, [title.type, 'ids', 'imdb']),
            type
        });
    }

    renderList = ({ movies, shows }) => {
        return map({ movies, shows }, (list, key) => {
            return (
                <li key={key}>
                    <ul style={{ backgroundColor: '#fff', padding: 0 }}>
                        <ListSubheader>
                            {capitalize(key)}
                        </ListSubheader>

                        {list.map(item => (
                            <ListItem
                                key={`item-${key}-${item}`}
                                button
                                onClick={() => this.handleItemClick({ title: item, type: key })}
                            >
                            <ListItemText primary={item[item.type].title} secondary={item[item.type].year} />
                          </ListItem>
                        ))}
                    </ul>
                </li>
            )
        })
    }

    render() {
        const { movies, shows, isLoading, single } = this.props;

        return (
            <Wrapper>
                <Grid container>
                    <Grid item md={4}>
                        <Card isLoading={isLoading}>
                            <List subheader={<li />}>
                                { this.renderList({ movies, shows }) }
                            </List>
                        </Card>
                    </Grid>
                    <Grid item md={8}>
                        <TitleDetail
                            title={single.title}
                            isLoading={single.isLoading}
                        />
                    </Grid>
                </Grid>
            </Wrapper>
        )
    }
}

export default connect(state => ({
    movies: state.search.movies,
    shows: state.search.shows,
    query: state.header.searchQuery,
    isLoading: state.search.isLoading,
    single: state.titles.single
}), {
    searchTitlesConnect: searchTitles,
    updateQuery: updateQueryAction,
    getSingle: getSingleAction,
})(SearchPage);
