import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';


class Impress extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="impress" className="container">
        <Row>
          <Col xs={12}>
            <br />
            <br />
            <br />
            <Link to="/">Main</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <br />
            <h4>Verantwortlich für Inhalt</h4>
            <br />
            <address>
              <p>
                Johannes Dirr <br />
                Reichenberger Str. 61<br />
                10999 Berlin<br />
              </p>
            </address>
            <br /><br />
            <h4>Haftungsausschluss</h4>
            <br />
            <h5>Haftung für Inhalte</h5>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <br />
            <h5>Haftung für Links</h5>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}


export default Impress;
