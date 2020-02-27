import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test("should render", () => {
  const { container } = render(<Footer />);

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      display: grid;
      grid-template-rows: repeat(3,auto);
      place-items: center;
      grid-row-gap: var(--spacing-large);
      padding: var(--spacing-large);
      background-color: #000;
    }

    .c7 {
      display: grid;
      grid-row-gap: var(--spacing-medium);
      text-align: center;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 21px;
      color: var(--color-dark-grey);
    }

    .c7 a,
    .c7 a:link,
    .c7 a:active,
    .c7 a:visited,
    .c7 a:focus {
      color: var(--color-white);
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }

    .c9 > span:first-of-type {
      color: var(--color-red);
    }

    .c9 > span:nth-of-type(2) {
      color: var(--color-white);
    }

    .c2 {
      display: grid;
      place-items: center;
      z-index: 1;
      margin: 0;
      width: 100%;
    }

    .c2 img {
      max-width: 200px;
    }

    .c6 {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      -webkit-box-pack: start;
      -webkit-justify-content: start;
      -ms-flex-pack: start;
      justify-content: start;
      grid-column-gap: var(--spacing-large);
      justify-items: center;
      width: 100%;
      margin: 0;
    }

    .c6 a {
      color: var(--color-white);
    }

    .c3 {
      display: grid;
      grid-template-rows: repeat(2,auto);
      grid-row-gap: var(--spacing-medium);
      place-items: center;
      font-size: 1.4rem;
    }

    .c3 h4 {
      margin: 0;
      color: var(--color-white);
    }

    .c3 address {
      color: var(--color-dark-grey);
      font-style: normal;
    }

    .c1 {
      display: grid;
      grid-template-rows: repeat(2,auto);
      grid-row-gap: var(--spacing-medium);
      place-items: center;
      color: var(--color-dark-grey);
      font-size: 1.4rem;
    }

    .c1 p {
      margin: 0;
    }

    .c4 {
      display: grid;
      grid-template-rows: repeat(2,auto);
      grid-row-gap: var(--spacing-medium);
      place-items: center;
      font-size: 1.4rem;
      color: var(--color-dark-grey);
      display: grid;
      grid-template-rows: repeat(2,auto);
    }

    .c4 h4 {
      margin: 0;
      color: var(--color-white);
    }

    .c4 a {
      color: var(--color-dark-grey);
    }

    .c5 {
      display: grid;
      grid-template-rows: repeat(2,auto);
      grid-row-gap: var(--spacing-medium);
      place-items: center;
      color: var(--color-dark-grey);
    }

    .c5 h4 {
      font-size: 1.4rem;
      margin: 0;
      color: var(--color-white);
    }

    .c5 a svg {
      color: var(--color-dark-grey);
    }

    @media (min-width:768px) {
      .c0 {
        grid-row-gap: var(--spacing-huge);
        grid-column-gap: var(--spacing-huge);
        justify-items: start;
        padding: var(--spacing-huge);
        grid-template-rows: repeat(3,1fr);
        grid-template-columns: repeat(6,1fr);
        grid-row-gap: var(--spacing-medium);
      }
    }

    @media (min-width:768px) {
      .c7 {
        width: 100%;
        grid-row: 3 / -1;
        grid-column: 1 / -1;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        display: grid;
        grid-template-columns: repeat(2,auto);
      }
    }

    @media (min-width:768px) {
      .c9 {
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        justify-self: end;
      }
    }

    @media (min-width:768px) {
      .c8 {
        justify-self: start;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
      }

      .c8 > span:first-of-type {
        color: var(--color-red);
      }

      .c8 > span:nth-of-type(2) {
        color: var(--color-white);
      }
    }

    @media (min-width:768px) {
      .c2 {
        grid-row: 1 / -1;
        grid-column: 1 / span 1;
      }
    }

    @media (min-width:768px) {
      .c6 {
        grid-template-columns: repeat(5,auto);
      }
    }

    @media (min-width:768px) {
      .c3 {
        grid-row: 2 / span 1;
        grid-column: 4 / span 2;
        justify-self: end;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        display: grid;
        grid-template-rows: repeat(2,auto);
        grid-row-gap: var(--spacing-medium);
        justify-items: start;
      }
    }

    @media (min-width:768px) {
      .c1 {
        grid-row: 1 / span 1;
        grid-column: 1 / span 2;
        display: grid;
        justify-items: start;
      }
    }

    @media (min-width:768px) {
      .c4 {
        grid-column: 6 / span 1;
        grid-row: 2 / span 1;
        justify-self: end;
        display: grid;
        justify-items: start;
        grid-template-rows: repeat(2,auto);
        grid-row-gap: var(--spacing-medium);
      }
    }

    @media (min-width:768px) {
      .c5 a:hover svg {
        -webkit-transition: color 0.3s ease-in-out;
        transition: color 0.3s ease-in-out;
      }

      .c5 a:hover svg:hover {
        color: var(--color-white);
      }
    }

    @media (min-width:768px) {
      .c5 {
        grid-row: 2 / span 1;
        grid-column: 1 / span 2;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        display: grid;
        grid-template-rows: repeat(2,auto);
        grid-row-gap: var(--spacing-medium);
        justify-items: start;
        width: 100%;
      }
    }

    <div>
      <footer
        class="c0"
      >
        <section
          class="c1"
        >
          <div
            class="c2"
          >
            <a
              href="/"
            >
              <img
                src="/static/images/logo-5-white.png"
              />
            </a>
          </div>
          <p>
            Sew it for the culture.
          </p>
        </section>
        <section
          class="c3"
        >
          <h4>
            Visit
          </h4>
          <address>
            Pop Brixton, 49 Brixton Station Rd, London SW9 8PQ
          </address>
        </section>
        <section
          class="c4"
        >
          <h4>
            New business
          </h4>
          <a
            href="mailto:hello@fiveyards.app"
          >
            Email us
          </a>
          <a
            href="tel:447932442879"
          >
            +44 7932442879
          </a>
        </section>
        <section
          class="c5"
        >
          <h4>
            Follow
          </h4>
          <ul
            class="c6"
          >
            <li>
              <a
                href="https://twitter.com/fiveyardsapp"
              >
                <svg
                  class="svg-inline--fa fab-twitter fa-3x"
                  color="var(--color-dark-grey)"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fiveyardsapp"
              >
                <svg
                  class="svg-inline--fa fab-instagram fa-3x"
                  color="var(--color-dark-grey)"
                />
              </a>
            </li>
            <li>
              <a
                href="https://fb.me/fiveyardsapp"
              >
                <svg
                  class="svg-inline--fa fab-facebook-f fa-3x"
                  color="var(--color-dark-grey)"
                />
              </a>
            </li>
          </ul>
        </section>
        <section
          class="c7"
        >
          <span
            class="c8"
          >
            © 
            2020
             Five Yards. All rights reserved.
          </span>
          <span
            class="c9"
          >
            Made with 
            <span>
              ♡
            </span>
             in 
            <span>
              South London
            </span>
            .
          </span>
        </section>
      </footer>
    </div>
  `);
});
