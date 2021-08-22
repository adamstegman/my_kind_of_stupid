import React from 'react';

import { container } from './index.module.css';

const _container = ({ children }) => (
  <div className={container}>
    {children}
  </div>
)
export default _container;
