import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
export function HeartIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_27)">
        <path
          d="M16 27S3.5 20 3.5 11.5A6.501 6.501 0 0116 8.996h0A6.501 6.501 0 0128.5 11.5C28.5 20 16 27 16 27z"
          stroke="#9F9F9F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_27">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
