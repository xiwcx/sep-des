import React from 'react';
import classNames from 'classnames';

class SongInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayLyrics: true};
  }

  render() {
    const songInfoClasses = classNames({
      'song-info__container': true,
      'text__container': true,
    });

    return (
      <div className={songInfoClasses}>
        <div className="text__content">
          <h1 className="track-info__title">Stare And Slow</h1>

          <p className="track-info__lyrics">
            {this.props.songLyrics.map((lyric, i) => (
              <span key={i}>{lyric}</span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

SongInfo.propTypes = {
  currentPage: React.PropTypes.number.isRequired,
  songId: React.PropTypes.number.isRequired,
  songLyrics: React.PropTypes.array.isRequired,
  songTitle: React.PropTypes.string.isRequired,
};

export default SongInfo;
