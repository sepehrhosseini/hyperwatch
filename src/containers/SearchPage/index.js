import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CircularProgress from '@material-ui/core/CircularProgress';

import { map, capitalize, get } from 'lodash';

import { Card, List, Wrapper } from '../Home/styled';
import {
    searchTitles
} from './actions';
import {
    updateSearchQuery as updateQueryAction
} from '../Header/actions';

class SearchPage extends Component {
    componentDidMount() {
        const { match, updateQuery } = this.props;

        const queryInURL = get(match, 'params.query');
        if (queryInURL && queryInURL !== this.props.query) {
            updateQuery(queryInURL)
        }
    }

    renderList({ movies, shows }) {
        return map({ movies, shows }, (list, title) => {
            console.log('list', list)
            return (
                <li key={title}>
                    <ul style={{ backgroundColor: '#fff', padding: 0 }}>
                        <ListSubheader>
                            {capitalize(title)}
                        </ListSubheader>

                        {list.map(item => (
                          <ListItem key={`item-${title}-${item}`} button>
                            <ListItemText primary={item[item.type].title} secondary={item[item.type].year} />
                          </ListItem>
                        ))}
                    </ul>
                </li>
            )
        })
    }

    render() {
        const { movies, shows, isLoading } = this.props;

        return (
            <Wrapper>
                <Card isLoading={isLoading}>
                    <List subheader={<li />}>
                        { this.renderList({ movies, shows }) }
                    </List>
                </Card>
            </Wrapper>
        )
    }
}

export default connect(state => ({
    movies: state.search.movies,
    shows: state.search.shows,
    query: state.header.searchQuery,
    isLoading: state.search.isLoading,
}), {
    searchTitlesConnect: searchTitles,
    updateQuery: updateQueryAction,
})(SearchPage);
