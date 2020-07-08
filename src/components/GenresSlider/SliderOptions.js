import React from 'react';

// Icons
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default {
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  draggable: false,
  infinite: false,
  adaptiveHeight: true,
  variableWidth: true,
  prevArrow: (
    <div className="prevvvvvi">
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
    </div>
  ),
  nextArrow: (
    <div>
      <IconButton>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  ),
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        infinite: true,
      },
    },
  ],
};
