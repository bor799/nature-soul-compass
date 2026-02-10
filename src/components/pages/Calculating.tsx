export function Calculating() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-8 relative">
        <div className="w-20 h-20 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🧭</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-earth-900 mb-2">
        正在分析你的结果...
      </h2>
      <p className="text-earth-600">
        匹配最适合你的徒步目的地
      </p>

      <div className="mt-8 space-y-2 text-sm text-earth-500">
        <p>分析性格特质...</p>
        <p>评估舒适度需求...</p>
        <p>匹配目的地数据...</p>
      </div>
    </div>
  );
}
