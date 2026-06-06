export const DEFAULT_THREAD_HISTORY_WINDOW_HOURS = 48;

export const isWithinThreadHistoryWindow = (currentPublishedAt, candidatePublishedAt, windowHours = DEFAULT_THREAD_HISTORY_WINDOW_HOURS) => {
  const currentTime = new Date(currentPublishedAt || 0).getTime();
  const candidateTime = new Date(candidatePublishedAt || 0).getTime();
  if (!Number.isFinite(currentTime) || !Number.isFinite(candidateTime)) return true;

  const windowMs = Math.max(1, Number(windowHours) || DEFAULT_THREAD_HISTORY_WINDOW_HOURS) * 36e5;
  return candidateTime <= currentTime && currentTime - candidateTime <= windowMs;
};
