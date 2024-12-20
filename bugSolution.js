```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    // Correct approach 1: Only runs once on mount
    // if you only want to run the effect once at mount
    // remove the dependency array []
    //console.log("Count updated:", count);
  }, []);

  useEffect(() => {
    // Correct approach 2: Conditional update
    if (prevCount.current !== count) {
        console.log("Count updated:", count);
      prevCount.current = count;
    }
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```