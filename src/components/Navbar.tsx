"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mt-4 mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex gap-10">


        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses/guitar-fundamentals">
                Guitar Fundamentals
              </HoveredLink>
              <HoveredLink href="/courses/vocal-techniques">
                Vocal Techniques
              </HoveredLink>
              <HoveredLink href="/courses/music-production">
                Music Production
              </HoveredLink>
              <HoveredLink href="/courses/electronic-materials">
                Electronic Materials
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
