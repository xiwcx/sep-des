import Credits from './credits';
import React from 'react';
import ReactHowler from 'react-howler';
import MapItem from './mapItem';
import Page from './page';
import SongInfo from './songInfo';
import data from '../data';

const pages = [1, 2, 3, 4, 5, 6, 7];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentSong: 0,
      playing: false,
    };

    this.nextPage = this.nextPage.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.setSong = this.setSong.bind(this);
    this.toggleAudio = this.toggleAudio.bind(this);
  }

  nextPage() {
    if(this.state.currentPage > 0 && this.state.currentPage < 7) {
      this.setState((prevState) => {
        return {currentPage: prevState.currentPage + 1};
      });
    }
  }

  nextSong() {
    if(this.state.currentSong >= 0 && this.state.currentSong < 3) {
      this.setState((prevState) => {
        return {currentSong: prevState.currentSong + 1};
      });
    }
  }

  onEnd() {
    if(this.state.currentSong < 3) {
      this.setState((prevState) => {
        return {currentSong: prevState.currentSong + 1};
      });
    }

    return this.setState({
      currentSong: 0,
      playing: false,
    });
  }

  prevPage() {
    if(this.state.currentPage > 1 && this.state.currentPage < 8) {
      this.setState((prevState) => {
        return {currentPage: prevState.currentPage - 1};
      });
    }
  }

  prevSong() {
    if(this.state.currentSong > 0 && this.state.currentSong < 4) {
      this.setState((prevState) => {
        return {currentSong: prevState.currentSong - 1};
      });
    }
  }

  renderPause() {
    return(
      <button className='nav__button nav__button--audio' onClick={this.toggleAudio}>
        <span className="visuallyhidden">
          Pause
        </span>

        <svg className='nav__button-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 72"><g><rect x="13" width="5" height="72"/><rect width="5" height="72"/></g></svg>
      </button>
    );
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

  setSong(song) {
    this.setState({
      currentSong: song,
      playing: true,
    });
  }

  toggleAudio() {
    this.setState({playing: !this.state.playing});
  }

  render() {
    return (
      <div>
        <main>
          <Page
            backgroundType="none"
            containerType="alternate"
            currentPage={this.state.currentPage}
            pageId={1}
          >
            <h1 className="cover__text cover__text--title">We Are Separate / We Are Desperate</h1>
            <h2 className="cover__text cover__text--subtitle">An Extended Play by Será</h2>
          </Page>

          <Page
            backgroundType="display"
            currentPage={this.state.currentPage}
            pageId={2}
          >
            <div className="text__container">
              <div className="text__content">
                <h1 className="h1">We Are Separate /<br /> We Are Desperate</h1>
                <h2 className="h2 color-text-inverse">An Extended Play by Será</h2>
                <ol className="ol__container">
                  <li className="ol__item">Stare And Slow</li>
                  <li className="ol__item">For Rain</li>
                  <li className="ol__item">Pnuemo</li>
                  <li className="ol__item">Bloom / Grow</li>
                </ol>
              </div>
            </div>
          </Page>

          {data.map((datum, i) => (
            <Page
              currentPage={this.state.currentPage}
              key={i}
              pageId={i + 3}
            >
              <SongInfo
                setSong={this.setSong}
                songId={datum.songId}
                songImg={datum.songImg}
                songLyrics={datum.songLyrics}
                songTitle={datum.songTitle}
              />
            </Page>
          ))}

          <Page
            currentPage={this.state.currentPage}
            pageId={7}
          >
            <Credits />
          </Page>
        </main>

        <div className="nav__container">
          <ol className="map">
            {pages.map((page, i) => (
              <MapItem
                currentPage={this.state.currentPage}
                key={i}
                pageId={page}
              />
            ))}
          </ol>

          <div>
            playing: {data[this.state.currentSong].songTitle}
          </div>

          <nav className="nav__button-container">
            <button className='nav__button nav__button--page nav__button--page-prev' onClick={this.prevPage}>
              <span className="visuallyhidden">
                Previous Page
              </span>

              <svg className="nav__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 72"><polygon points="36 64.93 7.07 36 36 7.07 36 0 0 36 36 72 36 64.93"/></svg>
            </button>

            <button className='nav__button nav__button--audio' onClick={this.prevSong}>
              <span className="visuallyhidden">
                Previous Song
              </span>

              <svg className="nav__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 72"><g><path d="M5,36,41,72V0ZM36,59.93,12.07,36,36,12.07Z"/><polygon points="0 0 0 72 5 72 5 36 5 0 0 0"/></g></svg>
            </button>

            {this.state.playing ?
              this.renderPause()
              : this.renderPlay()}

            <button className='nav__button nav__button--audio' onClick={this.nextSong}>
              <span className="visuallyhidden">
                Next Song
              </span>

              <svg className="nav__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 72"><path d="M0,72,36,36,0,0ZM5,12.07,28.93,36,5,59.93Z"/><polygon points="36 0 36 36 36 72 41 72 41 0 36 0"/></svg>
            </button>

            <button className='nav__button nav__button--page nav__button--page-next' onClick={this.nextPage}>
              <span className="visuallyhidden">
                Next Page
              </span>

              <svg className="nav__button-icon nav__button--page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 72"><polygon points="0 64.93 28.93 36 0 7.07 0 0 36 36 0 72 0 64.93"/></svg>
            </button>
          </nav>
        </div>

        <ReactHowler
          playing={this.state.playing}
          src={data[this.state.currentSong].songAudio}
          onEnd={this.onEnd}
        />
      </div>
    );
  }
}

export default App;
