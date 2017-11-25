import React from 'react';

class Credits extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Credits;
