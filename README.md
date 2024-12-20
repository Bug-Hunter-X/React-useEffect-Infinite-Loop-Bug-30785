# React useEffect Infinite Loop
This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.  The `useEffect` hook's dependency array is missing or incorrect leading to the state updating infinitely. The solution provides a correct implementation to avoid this issue.

## Bug Description
The provided `MyComponent` function uses `useEffect` to increment a counter. However, because `count` is included in the dependency array, every time `count` changes (due to the `useEffect` itself), the effect is triggered again, causing an infinite loop and crashing the application.

## Solution
The solution avoids the infinite loop by removing `count` from the dependencies if it doesn't need to re-run on every state update or using `useRef` to track the previous value.