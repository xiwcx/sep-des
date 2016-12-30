import React from 'react';
import classNames from 'classnames';

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
  backgroundType: React.PropTypes.oneOf([
    'display',
    'default',
    'none',
  ]).isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
  ]).isRequired,
  containerType: React.PropTypes.oneOf([
    'default',
    'alternate',
  ]).isRequired,
  currentPage: React.PropTypes.number.isRequired,
  pageId: React.PropTypes.number.isRequired,
};

export default Page;
