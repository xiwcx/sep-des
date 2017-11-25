import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Page extends React.Component {
  render() {
    const pageClasses = classNames({
      'bg-color--default': this.props.backgroundType === 'default',
      'bg-color--display': this.props.backgroundType === 'display',
      'page__container': true,
      'page__container--alternate': this.props.containerType === 'alternate',
      'page__container--active': this.props.pageId <= this.props.currentPage,
    });

    return (
      <section className={pageClasses}>
        {this.props.children}
      </section>
    );
  }
}

Page.defaultProps = {
  backgroundType: 'default',
  containerType: 'default',
};

Page.propTypes = {
  backgroundType: PropTypes.oneOf([
    'display',
    'default',
    'none',
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  containerType: PropTypes.oneOf([
    'default',
    'alternate',
  ]).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
};

export default Page;
