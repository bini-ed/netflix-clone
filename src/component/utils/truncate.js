export const truncate = (value, number) => {
  return value?.length > number
    ? value.substring(0, number - 1) + "..."
    : value;
};
