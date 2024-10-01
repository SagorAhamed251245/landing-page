function formatCompactDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const result = [];

  if (hours > 0) {
    result.push(hours + "h");
  }

  if (minutes > 0 || (hours > 0 && seconds % 3600 === 0)) {
    result.push(minutes + "m");
  }

  if (remainingSeconds > 0 && hours === 0 && minutes === 0) {
    result.push(remainingSeconds + "s");
  }

  if (seconds === 0) {
    return "0s";
  }

  return result.join(" ");
}

export default formatCompactDuration;
