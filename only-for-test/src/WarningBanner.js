import React from "react";
export default function WarningBanner(props) {
  if (!props.warn) {
    return false;
  }

  return (
    <div className="warning">
      <h1>Warning Found</h1>
    </div>
  );
}
