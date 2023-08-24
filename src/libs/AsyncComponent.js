import React from "react";
import PropTypes from "prop-types";

const DummyComponent = () => {
  return <>Error</>;
};

class AsyncComponent extends React.Component {
  state = {
    Component: null,
  };

  componentDidMount = () => {
    this.props
      .loader()
      .then((Component) => {
        this.setState({ Component: Component.default });
      })
      .catch((error) => {
        console.log("error: ", error);
        this.setState({ Component: DummyComponent });
      });
  };

  render = () => {
    if (this.state.Component) {
      const props = { ...this.props };
      const Component = this.state.Component ?? DummyComponent;
      return <Component {...props} />;
    }
    return <div></div>;
  };
}

AsyncComponent.propTypes = {
  loader: PropTypes.func.isRequired,
};

export { AsyncComponent };
