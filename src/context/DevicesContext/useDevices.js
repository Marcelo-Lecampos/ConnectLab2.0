import { useContext } from "react";
import { DevicesContext } from "./DevicesContext";

export const useDevices = () => {
  const context = useContext(DevicesContext);

  return context;
};
