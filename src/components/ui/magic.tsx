import React from "react";

interface T{
  max_magic:number,
  current_magic:number
}

export const Magic: React.FC <T> = props => (
  <>
    <div className="magic_points">
      MP {props.current_magic} / {props.max_magic}
    </div>
    <div className="magic_bar"></div>
  </>
);