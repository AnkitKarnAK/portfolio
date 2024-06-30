import ReactGA from "react-ga4";

export const initGA4 = () => {
  ReactGA.initialize("G-YH5EXGVYFE")
}

export const TrackEventGA4 = (eventName, eventParams) => {
  ReactGA.event({
    name: eventName,
    params: eventParams,
  });
};
