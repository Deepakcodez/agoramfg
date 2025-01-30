import React from "react";
import Assembly from "./Assembly";
import Design from "./Design";
import Form from "./Form";
import Laser from "./Laser";
import Paint from "./Paint";
import Weld from "./Weld";
import Ship from "./Ship";

interface capabilitiesProps {
  name: string;
}
const CapabilityDistributer: React.FC<capabilitiesProps> = ({ name }) => {
  if (name.toLowerCase() === "assembly") {
    return (
      <div>
        <Assembly />
      </div>
    );
  }
  if (name.toLowerCase() === "design") {
    return (
      <div>
        <Design />
      </div>
    );
  }
  if (name.toLowerCase() === "form") {
    return (
      <div>
        <Form />
      </div>
    );
  }
  if (name.toLowerCase() === "laser") {
    return (
      <div>
        <Laser />
      </div>
    );
  }
  if (name.toLowerCase() === "paint") {
    return (
      <div>
        <Paint />
      </div>
    );
  }
  if (name.toLowerCase() === "ship") {
    return (
      <div>
        <Ship />
      </div>
    );
  }
  if (name.toLowerCase() === "weld") {
    return (
      <div>
        <Weld />
      </div>
    );
  }

  return (
    <>
      <Assembly />
    </>
  );
};
export default CapabilityDistributer;
