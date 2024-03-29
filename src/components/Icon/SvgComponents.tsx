export function CheckboxOn({ ...props }) {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8.5" r="8" fill="#131313" />
      <path
        d="M3.7334 7.96663L6.57784 11.1666L12.2667 5.83329"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckboxOff({ ...props }) {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8.5" r="7.5" stroke="#686868" />
      <path
        d="M3.73328 7.96663L6.57772 11.1666L12.2666 5.83329"
        stroke="#686868"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EnvelopeBlack({ ...props }) {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1" y="0.5" width="12" height="8" stroke="#131313" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 0.5L7 5.16667L13 0.5" stroke="#131313" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EnvelopeWhite({ ...props }) {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="1" width="12" height="8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.5 1L6.5 5.66667L12.5 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EyeOn({ ...props }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx="3.42857"
        cy="3.42857"
        r="3.42857"
        transform="matrix(1 0 0 -1 8.57129 16.1431)"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5713 11.9998C20.5713 11.9998 18.4284 6.85693 11.9999 6.85693C5.57129 6.85693 3.42843 11.9998 3.42843 11.9998"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeOff({ ...props }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx="3.42857"
        cy="3.42857"
        r="3.42857"
        transform="matrix(1 0 0 -1 8.57129 16.1431)"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5713 11.9998C20.5713 11.9998 18.4284 6.85693 11.9999 6.85693C5.57129 6.85693 3.42843 11.9998 3.42843 11.9998"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="18.6357"
        y1="6.07088"
        x2="6.34285"
        y2="18.3638"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SidebarLeft({ ...props }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 18L14 14L18 10" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18L8 14L12 10" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SidebarRight({ ...props }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 18L14 14L10 10" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 18L20 14L16 10" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ ...props }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 13.8491L20 13.8491" stroke="#959595" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20L14 8" stroke="#959595" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WeakPlus({ ...props }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 5.89941L10 5.89941" stroke="#959595" strokeLinecap="round" />
      <path d="M6 10L6 2" stroke="#959595" strokeLinecap="round" />
    </svg>
  );
}

export function NonCheckedRadio({ ...props }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="7.5" stroke="#959595" />
    </svg>
  );
}

export function CheckedRadio({ ...props }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="8" fill="#131313" />
      <path d="M4 8.14286L7 11L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UpArrow({ ...props }) {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.5 7.5L6.5 3.5L9.5 7.5" stroke="#959595" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownArrow({ ...props }) {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.5 4.5L6.5 8.5L3.5 4.5" stroke="#959595" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChipPlus({ ...props }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 5.89941L10 5.89941" stroke="currentColor" stroke-linecap="round" />
      <path d="M6 10L6 2" stroke="currentColor" stroke-linecap="round" />
    </svg>
  );
}

export function ChipMinus({ ...props }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 6H10" stroke="currentColor" stroke-linecap="round" />
    </svg>
  );
}
