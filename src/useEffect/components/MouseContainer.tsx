import React, { useState } from 'react'

import RunEffectsOnlyOnce from '../HookCounter_7'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <RunEffectsOnlyOnce />}
    </div>
  )
}

export default MouseContainer
