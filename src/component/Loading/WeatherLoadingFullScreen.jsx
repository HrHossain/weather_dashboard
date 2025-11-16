export default function WeatherLoadingFullScreen({message}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-6"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="w-full max-w-5xl">
        {/* Top: spinner + message */}
        <div className="flex items-center gap-4 mb-8">
          {/* Spinner */}
          <svg
            className="h-12 w-12 animate-spin text-white"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>

          <div>
            <h2 className="text-white text-lg md:text-2xl font-semibold">{message}</h2>
            <p className="text-white/70 text-xs md:text-sm mt-1">Fetching latest weather and forecasts…</p>
          </div>
        </div>

        {/* Skeleton layout of the dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main weather card skeleton */}
          <div className="col-span-1 md:col-span-2 rounded-2xl p-6 bg-gradient-to-r from-white/3 to-white/2 border border-white/10">
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-3 w-1/2">
                <div className="h-6 rounded bg-white/10 animate-pulse w-40"></div>
                <div className="h-10 rounded bg-white/10 animate-pulse w-56"></div>
                <div className="h-4 rounded bg-white/10 animate-pulse w-32"></div>
              </div>
              <div className="flex flex-col items-end space-y-3">
                <div className="h-12 w-12 rounded-full bg-white/10 animate-pulse"></div>
                <div className="h-6 w-20 rounded bg-white/10 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl p-3 bg-white/5 border border-white/5">
                  <div className="h-4 rounded bg-white/8 animate-pulse w-3/4 mb-3"></div>
                  <div className="h-8 rounded bg-white/8 animate-pulse w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar cards skeleton */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/5">
                <div className="h-4 rounded bg-white/8 animate-pulse w-32 mb-3"></div>
                <div className="h-8 rounded bg-white/8 animate-pulse w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: suggestions / small skeletons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-white/6 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
