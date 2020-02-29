import React from 'react';

import { Header } from './components/Header';
import { Headline } from './components/Headline';
import { ListItem } from './components/ListItem';

import './app.scss';

function App() {
  return (
    <div>
      <Header />
      <section>
        <Headline title='Posts' description='Click button to see more posts' />
        <ListItem />
      </section>
    </div>
  );
}

export default App;
