import React from "react";

export function IconGoogle({ width, height, ...props }) {
  return (
    <svg
			{...props}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 19"
    >
      <path
        fill="#FFC107"
        d="M15.204 8.206h-.537v-.028h-6v2.667h3.767A3.998 3.998 0 0 1 4.667 9.51a4 4 0 0 1 4-4c1.02 0 1.947.385 2.653 1.013l1.886-1.885a6.64 6.64 0 0 0-4.54-1.794 6.667 6.667 0 1 0 6.538 5.36"
      ></path>
      <path
        fill="#FB5B5B"
        d="m2.769 6.408 2.19 1.607A4 4 0 0 1 8.667 5.51c1.02 0 1.947.385 2.653 1.013l1.886-1.885a6.64 6.64 0 0 0-4.54-1.794A6.66 6.66 0 0 0 2.77 6.408"
      ></path>
      <path
        fill="#4CAF50"
        d="M8.667 16.178a6.64 6.64 0 0 0 4.47-1.73l-2.064-1.746a3.97 3.97 0 0 1-2.406.81 4 4 0 0 1-3.761-2.65l-2.174 1.676a6.66 6.66 0 0 0 5.935 3.64"
      ></path>
      <path
        fill="#1976D2"
        d="M15.204 8.206h-.537v-.028h-6v2.667h3.767a4 4 0 0 1-1.362 1.857h.001l2.063 1.745c-.146.133 2.197-1.602 2.197-4.936a6.7 6.7 0 0 0-.13-1.305"
      ></path>
    </svg>
  );
}
