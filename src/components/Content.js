import React from 'react';
import ContentAbout from './ContentAbout';
import ContentFuture from './ContentFuture';
import ContentCards from './ContentCards';

function Content (props) {
  return (
    <div className="container">
      <ContentAbout />
      <ContentFuture />
      <ContentCards />
    </div>
  )
};

export default Content;