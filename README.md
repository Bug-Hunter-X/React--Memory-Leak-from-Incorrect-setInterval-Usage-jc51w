# React: Memory Leak from Incorrect setInterval Usage

This example demonstrates a common mistake when using `setInterval` within a React component: creating a new closure for the callback function in each render.  This leads to memory leaks because the `clearInterval` function will only clear the last interval ID, and the others remain running.

The solution demonstrates how to correctly use `setInterval` by using a useRef to hold the interval ID.