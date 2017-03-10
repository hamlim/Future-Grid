import React from 'react';

const Grid = ({variation, customElement = 'div', extraClasses, children}) => {
  let classes = `Grid ${variation === 'gutter' && 'Grid--withGutter'} ${!!extraClasses && extraClasses}`;
  const Element = customElement;
  return (
    <Element className={classes}>{children}</Element>
  )
};

const Column = ({size, smSize, mdSize, lgSize, xlSize, extraClasses, customElement = 'div', children}) => {
  let classes = `Grid-item ${!!size && `u-size${size}of12`} ${!!smSize && `u-sm-size${smSize}of12`} ${!!mdSize && `u-md-size${mdSize}of12`} ${!!lgSize && `u-lg-size${lgSize}of12`} ${!!xlSize && `u-xl-size${xlSize}of12`} ${!!extraClasses && extraClasses}`;
  const Element = customElement;
  return (
    <Element className={classes}>{children}</Element>
  )
}