import React from 'react';
import classNames from 'classnames';

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
        <button className="song-info__toggle-button" onClick={this.toggleView}>
          <span>Toggle</span>
        </button>
      </div>
    );
  }
}

SongInfo.propTypes = {
  setSong: React.PropTypes.func.isRequired,
  songId: React.PropTypes.number.isRequired,
  songImg: React.PropTypes.string.isRequired,
  songLyrics: React.PropTypes.array.isRequired,
  songTitle: React.PropTypes.string.isRequired,
};

export default SongInfo;
