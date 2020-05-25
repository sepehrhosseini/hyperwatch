import React from 'react';
import PropTypes from 'prop-types';

import { get, map, capitalize } from 'lodash';

import MaterialList from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const progressStyles = {
  position: 'absolute',
};

const List = ({ data, onItemClick, onIconClick, labelAs, keyAs, subtitleAs, loadingIds, Icon }) => {
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
                <ListItemSecondaryAction>
                  {title.isLoading || loadingIds.find((id) => id === get(title, keyAs)) ? (
                    <CircularProgress size={34} />
                  ) : (
                    Icon && <Icon title={title} keyAs={keyAs} type={type} />
                  )}
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

  loadingIds: [],
  Icon: null,

  onItemClick: () => {},
  onSecActionClick: () => {},
};

List.propTypes = {
  labelAs: PropTypes.string,
  subtitleAs: PropTypes.string,
  keyAs: PropTypes.string,

  loadingIds: PropTypes.arrayOf(PropTypes.number),

  Icon: PropTypes.element,

  onItemClick: PropTypes.func,
  onSecActionClick: PropTypes.func,
};

export default List;
