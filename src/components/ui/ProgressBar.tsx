interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
}

export function ProgressBar({ current, total, showText = true }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {showText && (
        <div className="flex justify-between items-center mb-2 text-sm text-earth-700">
          <span>进度</span>
          <span>{current}/{total}</span>
        </div>
      )}
      <div className="w-full bg-earth-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-forest-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
