export const convertHourHandToMinuteHand = (hourHand: number) => {
  return (hourHand * 5) % 60;
};
