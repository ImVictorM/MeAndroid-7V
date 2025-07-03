const MS_PER_DAY = 100 * 60 * 60 * 24;

export const toShortDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

export const dateDifferenceDays = (before: Date, after: Date) => {
  const beforeUtc = Date.UTC(
    before.getFullYear(),
    before.getMonth(),
    before.getDate(),
  );

  const afterUtc = Date.UTC(
    after.getFullYear(),
    after.getMonth(),
    after.getDate(),
  );

  return Math.floor((afterUtc - beforeUtc) / MS_PER_DAY);
};
