"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { setTheme } = useTheme();

  // const navMenu = [
  //   { title: "Home", href: "/" },
  //   { title: "Products", href: "/projects" },
  //   { title: "Payments", href: "/payments" },
  //   { title: "Stores", href: "/stores" },
  //   { title: "Users", href: "/users" },
  // ];

  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 bg-background z-10">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <Button variant="outline" size="icon" asChild suppressHydrationWarning>
          <SidebarTrigger />
        </Button>

        {/* CENTER
        <div className="flex items-center gap-4">
          {navMenu.map((item) => (
            <Link key={item.title} href={item.href} className="mx-4">
              {item.title}
            </Link>
          ))}
        </div> */}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/98792546?v=4" />
              <AvatarFallback className="font-bold bg-orange-600/10 text-orange-600">
                J
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={16}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-6 w-6 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-6 w-6 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-6 w-6 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
