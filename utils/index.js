import ReactGA from "react-ga4";

export const initGA4 = () => {
  ReactGA.initialize("G-YH5EXGVYFE");
};

export const TrackEventGA4 = (eventName, eventParams) => {
  ReactGA.event({
    name: eventName,
    params: eventParams,
  });
};

export const yearsOfExperience = () => {
  const startYear = 2021;
  const startMonth = 8; // September (0-indexed)

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const years = currentYear - startYear;
  const months = currentMonth - startMonth;

  return (years + months / 12).toFixed(1);
};
