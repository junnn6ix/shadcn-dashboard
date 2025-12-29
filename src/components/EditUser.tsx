"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  username: z.string().min(1, "Username must be at least 1 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  domicile: z.string().min(3, "Domicile must be at least 3 characters"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  role: z.enum(["admin", "user", "seller"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

const EditUser = ({ title }: { title: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "John Doe",
      username: "john.doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 8901",
      domicile: "New York, USA",
      address: "123 Main St, New York, NY 10001",
      role: "user",
    },
  });

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription>Edit user Information</SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form className="grid flex-1 auto-rows-min gap-6 px-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display username.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                    Only admin can see your email.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display phone.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domicile"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Domicile</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display domicile.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display address.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="seller">Seller</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                {/* <FormDescription>
                    This is your public display role.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save changes</Button>
        </form>
      </Form>
      {/* <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter> */}
    </SheetContent>
  );
};

export default EditUser;
