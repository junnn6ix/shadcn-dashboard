import CardList from "@/components/CardList";
import { ChartAreaGradient } from "@/components/ChartArea";
import { ChartLineLabel } from "@/components/ChartLine";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { BadgeCheck, Candy, Citrus, Edit2, Shield } from "lucide-react";

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-bold">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="bg-blue-500/30 border border-blue-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start" className="cursor-pointer">
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm ">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="bg-green-500/30 border border-green-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start" className="cursor-pointer">
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm ">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="bg-yellow-500/30 border border-yellow-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start" className="cursor-pointer">
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm ">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="bg-red-500/30 border border-red-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start" className="cursor-pointer">
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm ">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFOS CONTAINERS */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">User Information</h1>
              <Sheet>
                <SheetTrigger>
                  <Edit2 size={16} />
                </SheetTrigger>
                <EditUser title="Edit User" />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={50} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 567 8901</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Domicile:</span>
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Address:</span>
                <span>123 Main St, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-muted-foreground  text-sm mt-4">
                Joined on January 1, 2020
              </p>
            </div>
          </div>
          {/* CARD LISTS */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="https://avatars.githubusercontent.com/u/98792546?v=4" />
                <AvatarFallback className="font-bold bg-orange-600/10 text-orange-600">
                  J
                </AvatarFallback>
              </Avatar>
              <div className=" flex flex-col">
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">john.doe</p>
              </div>
            </div>
            <p className=" ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              mollitia temporibus similique recusandae, maxime deserunt atque,
              quos id cumque facilis repellendus? Consectetur, eveniet
              molestiae! Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <ChartLineLabel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
// https://youtu.be/SjsQdfvxjL8?t=6910
