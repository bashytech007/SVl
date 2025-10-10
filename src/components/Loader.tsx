import React from "react";

const Loader: React.FC<{ size?: number; color?: string }> = ({
  size = 16,
  color = "white",
}) => (
  <div
    className="animate-spin rounded-full border-2 border-t-transparent"
    style={{
      width: size,
      height: size,
      borderColor: `${color}33`, // 20% opacity
      borderTopColor: color,
    }}
  />
);

export default Loader;
