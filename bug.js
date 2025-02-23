```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The callback function creates a new closure for each render,
    // leading to a memory leak and possibly incorrect behavior.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function is crucial, but not enough here
  }, []);

  return <div>Count: {count}</div>;
}
```