import React from "react";

const Pending = ({ children, isLoading, error }) =>
  // eslint-disable-next-line no-nested-ternary
  error ? null : isLoading ? children : null;

const Fulfilled = ({ children, isLoading, error }) =>
  // eslint-disable-next-line no-nested-ternary
  error ? null : isLoading ? null : children;
const Rejected = ({ children, error }) => (error ? children : null);

const RenderingCondition = ({ children, error, isLoading }) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, { ...child.props, error, isLoading })
  );

RenderingCondition.Pending = Pending;
RenderingCondition.Fulfilled = Fulfilled;
RenderingCondition.Rejected = Rejected;

export default RenderingCondition;
