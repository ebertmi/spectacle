function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Quote, Slide, SlideSet, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text } from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

var images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

var theme = createTheme({
  primary: "#ff4081"
});

var Presentation = function (_React$Component) {
  _inherits(Presentation, _React$Component);

  function Presentation() {
    _classCallCheck(this, Presentation);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Presentation.prototype.render = function render() {
    return React.createElement(
      Deck,
      { transition: ["zoom", "slide"], theme: theme, transitionDuration: 500 },
      React.createElement(
        Slide,
        { transition: ["zoom"], bgColor: "primary" },
        React.createElement(
          Heading,
          { size: 1, fit: true, caps: true, lineHeight: 1, textColor: "black" },
          "Spectacle"
        ),
        React.createElement(
          Heading,
          { size: 1, fit: true, caps: true },
          "A ReactJS Presentation Library"
        ),
        React.createElement(
          Heading,
          { size: 1, fit: true, caps: true, textColor: "black" },
          "Where You Can Write Your Decks In JSX"
        ),
        React.createElement(
          Link,
          { href: "https://github.com/FormidableLabs/spectacle" },
          React.createElement(
            Text,
            { bold: true, caps: true, textColor: "tertiary" },
            "View on Github"
          )
        ),
        React.createElement(
          Text,
          { textSize: "1.5em", margin: "20px 0px 0px", bold: true },
          "Hit Your Right Arrow To Begin!"
        )
      ),
      React.createElement(
        Slide,
        { id: "wait-what", transition: ["slide"], bgColor: "black", notes: "You can even put notes on your slide. How awesome is that?" },
        React.createElement(Image, { src: images.kat.replace("/", ""), margin: "0px auto 40px", height: "293px" }),
        React.createElement(
          Heading,
          { size: 2, caps: true, fit: true, textColor: "primary", textFont: "primary" },
          "Wait what?"
        )
      ),
      React.createElement(
        Slide,
        { transition: ["zoom", "fade"], bgColor: "primary", notes: "<ul><li>talk about that</li><li>and that</li></ul>" },
        React.createElement(CodePane, {
          lang: "jsx",
          source: require("raw-loader!../assets/deck.example"),
          margin: "20px auto"
        })
      ),
      React.createElement(
        Slide,
        { transition: ["slide"], bgImage: images.city.replace("/", ""), bgDarken: 0.75 },
        React.createElement(
          Appear,
          { fid: "1" },
          React.createElement(
            Heading,
            { size: 1, caps: true, fit: true, textColor: "primary" },
            "Full Width"
          )
        ),
        React.createElement(
          Appear,
          { fid: "2" },
          React.createElement(
            Heading,
            { size: 1, caps: true, fit: true, textColor: "tertiary" },
            "Adjustable Darkness"
          )
        ),
        React.createElement(
          Appear,
          { fid: "3" },
          React.createElement(
            Heading,
            { size: 1, caps: true, fit: true, textColor: "primary" },
            "Background Imagery"
          )
        )
      ),
      React.createElement(
        Slide,
        { transition: ["zoom", "fade"], bgColor: "primary" },
        React.createElement(
          Heading,
          { caps: true, fit: true },
          "Flexible Layouts"
        ),
        React.createElement(
          Layout,
          null,
          React.createElement(
            Fill,
            null,
            React.createElement(
              Heading,
              { size: 4, caps: true, textColor: "secondary", bgColor: "white", margin: 10 },
              "Left"
            )
          ),
          React.createElement(
            Fill,
            null,
            React.createElement(
              Heading,
              { size: 4, caps: true, textColor: "secondary", bgColor: "white", margin: 10 },
              "Right"
            )
          )
        )
      ),
      React.createElement(
        Slide,
        { transition: ["slide"], bgColor: "black" },
        React.createElement(
          BlockQuote,
          null,
          React.createElement(
            Quote,
            null,
            "Wonderfully formatted quotes"
          ),
          React.createElement(
            Cite,
            null,
            "Ken Wheeler"
          )
        )
      ),
      React.createElement(
        Slide,
        { transition: ["spin", "zoom"], bgColor: "tertiary" },
        React.createElement(
          Heading,
          { caps: true, fit: true, size: 1, textColor: "primary" },
          "Inline Markdown"
        )
      ),
      React.createElement(
        Slide,
        { transition: ["slide", "spin"], bgColor: "primary" },
        React.createElement(
          Heading,
          { caps: true, fit: true, size: 1, textColor: "tertiary" },
          "Smooth"
        ),
        React.createElement(
          Heading,
          { caps: true, fit: true, size: 1, textColor: "secondary" },
          "Combinable Transitions"
        )
      ),
      React.createElement(
        SlideSet,
        null,
        React.createElement(
          Slide,
          { transition: ["fade"], bgColor: "secondary", textColor: "primary" },
          React.createElement(
            List,
            null,
            React.createElement(
              Appear,
              null,
              React.createElement(
                ListItem,
                null,
                "Inline style based theme system"
              )
            ),
            React.createElement(
              Appear,
              null,
              React.createElement(
                ListItem,
                null,
                "Autofit text"
              )
            ),
            React.createElement(
              Appear,
              null,
              React.createElement(
                ListItem,
                null,
                "Flexbox layout system"
              )
            ),
            React.createElement(
              Appear,
              null,
              React.createElement(
                ListItem,
                null,
                "PDF export"
              )
            ),
            React.createElement(
              Appear,
              null,
              React.createElement(
                ListItem,
                null,
                "And..."
              )
            )
          )
        ),
        React.createElement(
          Slide,
          { transition: ["slide"], bgColor: "primary" },
          React.createElement(
            Heading,
            { size: 1, caps: true, fit: true, textColor: "tertiary" },
            "Your presentations are interactive"
          ),
          React.createElement(Interactive, null)
        )
      ),
      React.createElement(
        Slide,
        { transition: ["slide"], bgColor: "primary",
          notes: "Hard to find cities without any pizza"
        },
        React.createElement(
          Heading,
          { size: 4, caps: true, textColor: "secondary", bgColor: "white", margin: 10 },
          "Pizza Toppings"
        ),
        React.createElement(
          Layout,
          null,
          React.createElement(
            Table,
            null,
            React.createElement(
              TableHeader,
              null,
              React.createElement(
                TableRow,
                null,
                React.createElement(TableHeaderItem, null),
                React.createElement(
                  TableHeaderItem,
                  null,
                  "2011"
                ),
                React.createElement(
                  TableHeaderItem,
                  null,
                  "2013"
                ),
                React.createElement(
                  TableHeaderItem,
                  null,
                  "2015"
                )
              )
            ),
            React.createElement(
              TableBody,
              null,
              React.createElement(
                TableRow,
                null,
                React.createElement(
                  TableItem,
                  null,
                  "None"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "61.8%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "39.6%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "35.0%"
                )
              ),
              React.createElement(
                TableRow,
                null,
                React.createElement(
                  TableItem,
                  null,
                  "Pineapple"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "28.3%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "54.5%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "61.5%"
                )
              ),
              React.createElement(
                TableRow,
                null,
                React.createElement(
                  TableItem,
                  null,
                  "Pepperoni"
                ),
                React.createElement(TableItem, null),
                React.createElement(
                  TableItem,
                  null,
                  "50.2%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "77.2%"
                )
              ),
              React.createElement(
                TableRow,
                null,
                React.createElement(
                  TableItem,
                  null,
                  "Olives"
                ),
                React.createElement(TableItem, null),
                React.createElement(
                  TableItem,
                  null,
                  "24.9%"
                ),
                React.createElement(
                  TableItem,
                  null,
                  "55.9%"
                )
              )
            )
          )
        )
      ),
      React.createElement(
        Slide,
        { transition: ["spin", "slide"], bgColor: "tertiary" },
        React.createElement(
          Heading,
          { size: 1, caps: true, fit: true, lineHeight: 1.5, textColor: "primary" },
          "Made with love in Seattle by"
        ),
        React.createElement(
          Link,
          { href: "http://www.formidable.com" },
          React.createElement(Image, { width: "100%", src: images.logo })
        )
      )
    );
  };

  return Presentation;
}(React.Component);

export { Presentation as default };