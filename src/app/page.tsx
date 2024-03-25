"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {ModeToggle} from "@/components/ui/toggle-mode";
import {Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {useState} from "react";


export default function Home() {

    const [isUserNameUser,setUserNameUser] = useState("")

    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log('isUserNameUser',isUserNameUser)
        console.log(values)
    }


  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
        <ModeToggle/>
      <Button>Click Me</Button>
        <Button disabled={false}>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
        </Button>


        <h1>user name : {isUserNameUser}</h1>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input value={isUserNameUser}
                                       onChange={(e:any) => setUserNameUser(e.target.value)} placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            <h1>User name: {isUserNameUser}</h1>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>

    </main>
  );
}
