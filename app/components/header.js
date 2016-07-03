import React from 'react';
import { Affix } from 'react-overlays';


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      affix: {
        offsetBottom: 0
      }
    };
  }


  componentDidMount() {
    if (typeof window === 'undefined') return;
    if (typeof document === 'undefined') return;

    setTimeout(() => {
      this._documentHeight = $(document).height();
      this._headerHeight = $('#header').height();
      this._blueSVG = $('.svg.blau').find('svg')[0];
      this._blueSVGHeight = $(this._blueSVG).height();
      this._blueSVGWidth = $(this._blueSVG).width();
      this._blackSVG = $('.svg.schwarz').find('svg')[0];
      this._blackSVGHeight = $(this._blackSVG).height();
      this._blackSVGWidth = $(this._blackSVG).width();

      this._initAffix();
      this._randdomizeColor();
    }, 300);
  }


  _initAffix = () => {
    this.setState({
      affix: {
        offsetBottom: (this._documentHeight - this._headerHeight + 40)
      }
    });
  }


  _randdomizeColor = () => {
    /*eslint-disable*/
    // we need to require velocity inline to support server side rendering
    const velocity = (typeof window !== 'undefined') ? require('velocity-animate') : null;
    if (!velocity) return;
    /*eslint-enable*/
    const svgLine = $(this._blackSVG).find('line');
    setInterval(() => {
      velocity(svgLine, {
        stroke: `#${Math.floor(Math.random() * 16777215).toString(16)}`
      });
    }, 2000);
  }


  handleMouseMove = (evt) => {
    this._blueSVG.style.top = `${evt.screenY - this._blueSVGHeight / 2}px`;
    this._blueSVG.style.left = `${evt.screenX - this._blueSVGWidth / 2}px`;
  }


  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Affix offsetTop={0} offsetBottom={this.state.affix.offsetBottom}>
                <h1 className="topi">Haupt<wbr />sache <br />seriös</h1>
              </Affix>
            </div>
          </div>
        </div>
        <img data-src="/assets/images/schwarz.svg" className="svg blau" alt="schwarz" />
        <img data-src="/assets/images/schwarz.svg" className="svg schwarz" alt="schwarz" />
      </div>
    );
  }
}


export default Header;
