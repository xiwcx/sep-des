import React from 'react';
import ReactHowler from 'react-howler';
import Page from './page';
import SongInfo from './songInfo';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentSong: 3,
      playing: false,
    };

    this.nextPage = this.nextPage.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.toggleAudio = this.toggleAudio.bind(this);
  }

  nextPage() {
    if(this.state.currentPage > 0 && this.state.currentPage < 7) {
      this.setState((prevState) => {
        return {currentPage: prevState.currentPage + 1};
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
                <h1 className="h1">We Are Separate / We Are Desperate</h1>
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
            <div className="text__container">
              <div className="text__content">
                <h1 className="h1">Credits</h1>

                <ul className="ul__container">
                  <li className="ul__item">
                    <a href="https://www.instagram.com/humanleather/">Ana Humanleather</a> &mdash; Illustrator (Stare and Slow)
                  </li>
                  <li className="ul__item">
                    <a href="http://andrew-kenney.com/">Andrew Kenney</a> &mdash; Photo Retoucher
                  </li>
                  <li className="ul__item">Daniel López &mdash; Drums
                  </li>
                  <li className="ul__item">
                    <a href="https://www.instagram.com/dj_dohar/">DJ Dohar</a> &mdash; Digitech
                  </li>
                  <li className="ul__item">Henry Mesias &mdash; Bass
                  </li>
                  <li className="ul__item">
                    <a href="http://ianloringshiver.com/">Ian Shiver</a> &mdash; Photography
                  </li>
                  <li className="ul__item">Joshua Stark &mdash; Vocals
                  </li>
                  <li className="ul__item">Kris Hilbert &mdash; Production, Mixing at <a href="http://www.lgtbiz.com/">Legitimate Business</a>
                  </li>
                  <li className="ul__item">
                    <a href="http://www.mattiehinkley.com/">Mattie Hinkley</a> &mdash; Illustrator (For Rain)
                  </li>
                  <li className="ul__item">
                    <a href="http://www.ketchwehrart.com/">Ketch Wehr</a> &mdash; Illustrator (Bloom / Grow)
                  </li>
                  <li className="ul__item">
                    <a href="http://www.valdemargtz.tumblr.com/">Val Gutiérrez</a> &mdash; Illustrator (Pnuemo)
                  </li>
                  <li className="ul__item">
                    <a href="xiw.cx">Welch Canavan</a> &mdash; Guitar, Vocals, Designer, Art Director, Web Developer
                  </li>
                </ul>
              </div>
            </div>
          </Page>
        </main>

        <nav className="nav__container">
          <button onClick={this.prevPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
          <button onClick={this.toggleAudio}>Toggle Audio</button>
          <ReactHowler
            playing={this.state.playing}
            src={data[this.state.currentSong].songAudio}
            onEnd={this.onEnd}
          />
        </nav>
      </div>
    );
  }
}

export default App;
