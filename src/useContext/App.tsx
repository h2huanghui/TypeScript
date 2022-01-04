import React, { createContext } from 'react';
import ComponentC from './ComponentC';

//创建 context

export const UserContext = createContext('');
export const ChannelContext = createContext('');

const App = () => {
  return (
    <div className='App'>
      {/* 提供Provider */}
      <UserContext.Provider value={'h2'}>
        <ChannelContext.Provider value={'code volution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
