import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB7HLlZI2BbznsDSXgp1MF2ZWD-gDwS6W4';

YTSearch({key: API_KEY, term: 'surfboards'}, data => {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));