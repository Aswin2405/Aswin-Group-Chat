import React from "react";
// import "./sidebarOption.css";
import "./sidebaroption.css";
function SidebarOption({ Icon, title, addChannelOption, id }) {
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : SelectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
