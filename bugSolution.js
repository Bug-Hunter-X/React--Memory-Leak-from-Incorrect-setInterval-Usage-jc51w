```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Correct usage of setInterval: useRef prevents closure issues.
    intervalIdRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalIdRef.current); // Correct cleanup
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```