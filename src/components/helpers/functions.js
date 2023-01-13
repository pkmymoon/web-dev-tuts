function zfill(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
export const secondsTohms = (d, type = "regular") => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  if (type === "regular") {
    const hDisplay =
      h > 0
        ? h + (h === 1 ? " hr" : " hrs") + (m > 0 && s > 0 ? ", " : "")
        : "";
    const mDisplay =
      m > 0 ? m + (m === 1 ? " min" : " mins") + (s > 0 ? ", " : "") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " sec" : " secs") : "";
    return hDisplay + mDisplay + sDisplay;
  } else if (type === "time_format") {
    const hDisplay = h > 0 ? `${zfill(h, 2)}:` : "";
    const mDisplay = m > 0 ? `${zfill(m, 2)}:` : "00:";
    const sDisplay = s > 0 ? `${zfill(s, 2)}` : "00";
    return `${hDisplay}${mDisplay}${sDisplay}`;
  }
};