import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class SongInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayLyrics: true};

    this.toggleView = this.toggleView.bind(this);
    this.updateSong = this.updateSong.bind(this);
  }

  toggleView() {
    this.setState((prevState) => {
      return {displayLyrics: !prevState.displayLyrics};
    });
  }

  renderPlay() {
    return(
      <button className='nav__button nav__button--audio' onClick={this.toggleAudio}>
        <span className="visuallyhidden">
          Play
        </span>

        <svg className='nav__button-icon'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 72"><path d="M5,12.07,28.93,36,5,59.93V12.07M0,0V72L36,36,0,0Z"/></svg>
      </button>
    );
  }

  renderShowImage() {
    return(
      <button className="song-info__toggle-button" onClick={this.toggleView}>
        <span className="visuallyhidden">
          Show Image
        </span>

        <svg className="song-info__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M20.21,0H0V36H36V0ZM5,31V24.54l6-6L23.46,31Zm26,0h-.47l-16-16L11,11.47,7.46,15,5,17.47V5h9A16,16,0,0,0,30,21c.33,0,.67,0,1,0ZM30,16A11,11,0,0,1,19,5H31V16C30.67,16,30.34,16,30,16Z"/></svg>
      </button>
    );
  }

  renderShowText() {
    return(
      <button className="song-info__toggle-button" onClick={this.toggleView}>
        <span className="visuallyhidden">
          Show Text
        </span>

        <svg className="song-info__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32"><g><rect width="36" height="5"/><rect y="27" width="31" height="5"/><rect y="9" width="31" height="5"/><rect y="18" width="36" height="5"/></g></svg>
      </button>
    );
  }

  updateSong() {
    this.props.setSong(this.props.songId);
  }

  render() {
    const songInfoClasses = classNames({
      'song-info__container': true,
      'song-info__container--lyrics': this.state.displayLyrics,
      'song-info__container--img': !this.state.displayLyrics,
    });

    return (
      <div className={songInfoClasses}>
        <div className="song-info__panel song-info__panel--img">
          <div className="song-info__content">
            <img className="song-info__img" src={this.props.songImg} />
          </div>
        </div>

        <div className="song-info__panel song-info__panel--lyrics">
          <div className="song-info__content">
            <h1 className="song-info__title">{this.props.songTitle}</h1>
            <button onClick={this.updateSong} className="song-info__play-button">
              <span className="visuallyhidden">Set Song</span>
              &#9654;
            </button>

            <p className="song-info__lyrics">
              {this.props.songLyrics.map((lyric, i) => (
                <span key={i}>{lyric}</span>
              ))}
            </p>
          </div>
        </div>

        {this.state.displayLyrics ?
          this.renderShowImage()
          : this.renderShowText()}
      </div>
    );
  }
}

SongInfo.propTypes = {
  setSong: PropTypes.func.isRequired,
  songId: PropTypes.number.isRequired,
  songImg: PropTypes.string.isRequired,
  songLyrics: PropTypes.array.isRequired,
  songTitle: PropTypes.string.isRequired,
};

export default SongInfo;
