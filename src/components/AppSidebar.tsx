import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Info,
  MessageCircleQuestionMark,
  Plus,
  Projector,
  Search,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
// import Modal from "./Modal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Badge } from "./ui/badge";
import EditUser from "./EditUser";

const AppSidebar = () => {
  // Menu items.
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      {/* Sidebar Header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild suppressHydrationWarning>
              <Link href="/">
                <Image src="./vercel.svg" width={20} height={20} alt="logo" />
                <span className="font-bold">.eNearby Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild suppressHydrationWarning>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>
                      <Badge>24</Badge>
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild suppressHydrationWarning>
                      <Link href="/">
                        <Projector />
                        See All Projects
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild suppressHydrationWarning>
                          <Link href="/">Project A</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild suppressHydrationWarning>
                          <Link href="/">Project B</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild suppressHydrationWarning>
                          <Link href="/">Project C</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  {/* Dialog */}
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <SidebarMenuButton asChild suppressHydrationWarning>
                          <Link href="/">
                            <Plus />
                            Add Project
                          </Link>
                        </SidebarMenuButton>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create New Project</DialogTitle>
                          <DialogDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum ducimus a ut.
                          </DialogDescription>
                        </DialogHeader>
                        <Input
                          id="project-name"
                          name="project-name"
                          placeholder="Project Name"
                        />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                          <Button type="submit">Create</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                  {/* Endof Dialog */}
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>

        {/* Users */}
        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Users</span>
          </SidebarGroupAction>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuButton asChild suppressHydrationWarning>
                <Link href="/users/username">
                  <User />
                  See All Users
                </Link>
              </SidebarMenuButton>

              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton asChild suppressHydrationWarning>
                      <Link href="/">
                        <Plus />
                        Add User
                      </Link>
                    </SidebarMenuButton>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Add User</SheetTitle>
                      <SheetDescription>Add New User</SheetDescription>
                    </SheetHeader>
                    <EditUser title="Add User" />
                    <SheetFooter>
                      <Button type="submit">Add User</Button>
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>

        {/* Other */}
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild suppressHydrationWarning>
                      <Link href="/">
                        <MessageCircleQuestionMark />
                        FAQ
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild suppressHydrationWarning>
                      <Link href="#">
                        <Info />
                        Support
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild suppressHydrationWarning>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/98792546?v=4" />
                    <AvatarFallback className="font-bold bg-orange-600/10 text-orange-600">
                      J
                    </AvatarFallback>
                  </Avatar>
                  junnn6ix
                  <ChevronUp className="ml-auto " />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
                align="end">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
