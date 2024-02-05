import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
export function CrownIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_54)">
        <path
          d="M3.526 15.314a.626.626 0 00.779.458 21.398 21.398 0 0111.386-.001.626.626 0 00.78-.458l1.99-8.462a.626.626 0 00-.862-.715l-3.951 1.757a.625.625 0 01-.8-.268l-2.302-4.142a.626.626 0 00-1.092 0L7.153 7.625a.625.625 0 01-.8.268L2.4 6.136a.625.625 0 00-.862.714l1.988 8.464z"
          stroke="#9F9F9F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_54">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
