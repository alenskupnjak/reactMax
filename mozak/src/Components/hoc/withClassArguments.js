import React from 'react';

const withClassArguments = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <p>I tu sam SADA</p>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClassArguments;
