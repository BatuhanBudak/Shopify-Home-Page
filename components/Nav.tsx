import Image from "next/image";
import React from "react";
import useToggle from "../hooks/useToggle";
import useScreenSize from "../hooks/useScreenSize";

export default function Nav({ closeNav }) {
  const [toggledFirst, toggleStateFirst] = useToggle();
  const [toggledSecond, toggleStateSecond] = useToggle();
  const windowWidth = useScreenSize();
  const breakPoint = 1000;

  return <nav className="navigation" id="navigation"></nav>;
}
