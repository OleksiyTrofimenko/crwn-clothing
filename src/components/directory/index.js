import React, { Component } from 'react';
import MenuItem from '../menu-item';
import sections from '../../data/sections';
import './styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = { sections }
  }

  render() {
    const { sections } = this.state;
  
    return (
      <div className="directory-menu">
        {sections.map(({id, ...other }) => (
          <MenuItem key={id} {...other} />
        ))}
      </div>
    );
  }
}

export default Directory;
