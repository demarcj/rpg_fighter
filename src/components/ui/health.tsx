import React from "react";

interface T{
  max_health:number,
  current_health:number
}

export const Health: React.FC <T> = props => (
  <>
    <div className="health_points">
      HP {props.current_health} / {props.max_health}
    </div>
    <div className="health_bar"></div>
  </>
);