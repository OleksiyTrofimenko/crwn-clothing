import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item';
import './styles.scss';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">
      {title}
    </h1>
    <div className="preview">
      {items.filter((_, idx) => idx < 4).map(({id, ...other}) => (
        <CollectionItem key={id} {...other} />
      ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
