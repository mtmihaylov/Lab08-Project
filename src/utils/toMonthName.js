export default (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", {
    month: "short",
  });
};
