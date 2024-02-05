import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
export function SearchIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.688 21.875a9.188 9.188 0 100-18.375 9.188 9.188 0 000 18.375zM19.184 19.184l5.315 5.316"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
