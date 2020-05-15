import React from 'react';
import PropTypes from 'prop-types';

import { get, map, capitalize } from 'lodash';

import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const List = ({ data, onItemClick, onSecActionClick, labelAs, keyAs, subtitleAs }) => {
  return map(data, (list, type) => {
    return (
      <MaterialList subheader={<li />} key={type.toString()}>
        <li key={type}>
          <ul style={{ backgroundColor: '#fff', padding: 0 }}>
            <ListSubheader>{capitalize(type)}</ListSubheader>

            {list.map((title) => (
              <ListItem
                key={`item-${get(title, keyAs, title[labelAs])}`}
                button
                onClick={() => onItemClick({ title, type })}
              >
                <ListItemText primary={title[labelAs]} secondary={title[subtitleAs]} />
                <ListItemSecondaryAction onClick={() => onSecActionClick({ title, type })}>
                  <CircularProgress />
                  <IconButton edge="end">
                    <StarBorderIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </ul>
        </li>
      </MaterialList>
    );
  });
};

List.defaultProps = {
  labelAs: 'title',
  subtitleAs: 'year',
  keyAs: 'ids.trakt',
};

List.propTypes = {
  labelAs: PropTypes.string,
  subtitleAs: PropTypes.string,
  keyAs: PropTypes.string,
};

export default List;
