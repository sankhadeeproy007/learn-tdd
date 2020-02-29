import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox='0 0 400 160'
    backgroundColor='#f3f3f3'
    foregroundColor='#e6e5e7'
  >
    <rect x='1' y='10' rx='3' ry='3' width='88' height='6' />
    <rect x='96' y='10' rx='3' ry='3' width='52' height='6' />
    <rect x='1' y='47' rx='3' ry='3' width='410' height='6' />
    <rect x='1' y='62' rx='3' ry='3' width='380' height='6' />
    <rect x='2' y='77' rx='3' ry='3' width='178' height='6' />
    <rect x='-4' y='28' rx='3' ry='3' width='6' height='0' />
    <rect x='20' y='22' rx='3' ry='3' width='88' height='6' />
  </ContentLoader>
);

export default MyLoader;
