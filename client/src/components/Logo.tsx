export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric network design inspired by the uploaded logo */}
      <g>
        {/* Outer geometric structure */}
        <path
          d="M20 20 L50 10 L80 20 L85 50 L80 80 L50 90 L20 80 L15 50 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        
        {/* Inner network pattern */}
        <path
          d="M30 30 L50 25 L70 30 L75 50 L70 70 L50 75 L30 70 L25 50 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Central diamond */}
        <path
          d="M40 50 L50 40 L60 50 L50 60 Z"
          fill="currentColor"
        />
        
        {/* Connection lines */}
        <line x1="30" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="70" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="70" y1="70" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
        <line x1="30" y1="70" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="1" />
        
        {/* Network nodes */}
        <circle cx="30" cy="30" r="2" fill="currentColor" />
        <circle cx="70" cy="30" r="2" fill="currentColor" />
        <circle cx="75" cy="50" r="2" fill="currentColor" />
        <circle cx="70" cy="70" r="2" fill="currentColor" />
        <circle cx="30" cy="70" r="2" fill="currentColor" />
        <circle cx="25" cy="50" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}
