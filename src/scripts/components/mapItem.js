import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class MapItem extends React.Component {
  render() {
    const currentPage = this.props.currentPage;
    const pageId = this.props.pageId;

    const indicatorClasses = classNames({
      'map__indicator': true,
      'map__indicator--active': currentPage === pageId,
      'map__indicator--inactive': currentPage !== pageId,
    });

    return (
      <li className="map__item">
        <div className={indicatorClasses} />
      </li>
    );
  }
}

MapItem.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
};

export default MapItem;
