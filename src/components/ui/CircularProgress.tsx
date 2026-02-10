interface CircularProgressProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function CircularProgress({
  value,
  size = 80,
  strokeWidth = 6,
  showLabel = true,
  label,
  className = ''
}: CircularProgressProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle with gradient */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#40836e" />
            <stop offset="100%" stopColor="#50a286" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showLabel && (
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-forest-700">{Math.round(normalizedValue)}%</span>
          {label && <span className="text-xs text-earth-600">{label}</span>}
        </div>
      )}
    </div>
  );
}
