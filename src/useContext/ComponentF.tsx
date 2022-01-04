// import React from 'react';

// import { UserContext } from './App';

// function ComponentF() {
//   return (
//     <div>
//       {/* 消费Context */}
//       <UserContext.Consumer>
//         {(user) => <div>User context value {user}</div>}
//       </UserContext.Consumer>
//     </div>

//   );
// }

// export default ComponentF;

import React from 'react';

import { UserContext, ChannelContext } from './App';

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <ChannelContext.Consumer>
            {(channel) => (
              <div>
                User context value {user}, channel value {channel}
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
