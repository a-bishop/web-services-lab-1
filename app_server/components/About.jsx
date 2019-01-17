const React = require("react");
const About = props => {
  return (
    <h2>
      This is a <a href={props.links[0]}>React</a> Component generated on the
      Server and delivered via <a href={props.links[1]}>Node.js</a> and&nbsp;
      <a href={props.links[2]}>Express</a>!
    </h2>
  );
};
module.exports = About;
