import React, { Component } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './styles'

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    // process the error

    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    // Info - witch component actually broke or handle error
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/Oqnene0.png" />
          <ErrorImageText>Sorry this page is broken :(</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
