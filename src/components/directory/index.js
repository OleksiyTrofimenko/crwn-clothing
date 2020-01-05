import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory-selectors';
import MenuItem from '../menu-item';
import './styles.scss';


const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections && sections.map(({id, ...other }) => (
      <MenuItem key={id} {...other} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems,
});

export default connect(mapStateToProps)(Directory);
