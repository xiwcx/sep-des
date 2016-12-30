/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <main>
      <section className="page__container page__container--alternate">
        <h1 className="cover__text cover__text--title">We Are Separate / We Are Desperate</h1>
        <h2 className="cover__text cover__text--subtitle">An Extended Play by Será</h2>
      </section>

      <section className="page__container bg-color--display text__container">
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
      </section>

      <section className="page__container bg-color--default text__container">
        <div className="text__content">
          <h1 className="track-info__title">Stare And Slow</h1>

          <p className="track-info__lyrics">
            <span>I howl at the moon</span>
            <span>It never calls back to me</span>
            <span>Just stares and slows</span>
            <span>I’d rip it down If I could</span>
            <span>Tell me you can hear me</span>
            <span>Tell me you’ll be back tomorrow</span>
            <span>Don’t let me see a different side of you</span>
            <span>Until I say I’m ready</span>
            <span>Keep your distance</span>
            <span>But don’t go too far</span>
          </p>
        </div>
      </section>

      <section className="page__container bg-color--default text__container">
        <div className="text__content">
          <h1 className="track-info__title">Pnuemo</h1>

          <p className="track-info__lyrics">
            <span>Throw up my arms</span>
            <span>Scream for rain</span>
            <span>For anything</span>
            <span>For a chance to keep the dust at bay</span>
            <span>I won’t breathe copper, dirt of centuries</span>
            <span>Cough it out before it weighs me down</span>
            <span>Carve the past</span>
            <span>In trees that drown in the floods</span>
            <span>Claw at the banks</span>
            <span>Churn the mud and debris</span>
            <span>Stand at the edge</span>
            <span>Wait to cross</span>
            <span>Stare at the edge</span>
            <span>At the loss</span>
          </p>
        </div>
      </section>

      <section className="page__container bg-color--default text__container">
        <div className="text__content">
          <h1 className="track-info__title">For Rain</h1>

          <p className="track-info__lyrics">
            <span>Breathe deep and swear to me you won’t disappear too soon</span>
            <span>Blow the mist from your lungs</span>
            <span>Cough out the fog</span>
            <span>You are more than the storm inside your chest</span>
            <span>Lay still like the pause between lightning and thunder</span>
            <span>Come back to us with a voice you never had</span>
          </p>
        </div>
      </section>

      <section className="page__container bg-color--default text__container">
        <div className="text__content">
          <h1 className="track-info__title">Bloom / Grow</h1>

          <p className="track-info__lyrics">
            <span>Love and fear are digging roots inside of me</span>
            <span>It’s not a home when it’s overgrown</span>
            <span>I don’t know what parts are my own</span>
            <span>I bloom and grow</span>
            <span>All I wanted was to be alone</span>
            <span>Now I’m breaking through the floorboards</span>
            <span>I scale the walls</span>
            <span>All I wanted was to be alone</span>
            <span>Shatter the windows and lock the door</span>
            <span>I don’t know what parts are my own</span>
            <span>It’s not a home when it’s overgrown</span>
            <span>All I wanted was to be alone</span>
            <span>All I wanted was to be alone</span>
            <span>Stay underground</span>
            <span>Wait out the cold</span>
            <span>I never knew what I’d sown</span>
            <span>It’s not a home when it’s overgrown</span>
          </p>
        </div>
      </section>

      <section className="page__container bg-color--default text__container">
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
      </section>
    </main>

    <nav className="nav__container">
      <button>Previous</button>
      <button>Next</button>
    </nav>
  </div>,
  document.getElementById('app')
);
