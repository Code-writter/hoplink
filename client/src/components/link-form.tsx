"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

const formSchema = z.object({
  name_3225948265: z.string().min(4, "Link is too small").max(1000, "Link is too big")
});

export default function LinkForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
    //   TODO : DO Something with the values
      // toast(
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      //   </pre>
      // );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto ">
        
        <FormField
          control={form.control}
          name="name_3225948265"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className=" text-black  text-2xl font-semibold font-sans" >Shorten a long link</FormLabel>
              <FormDescription className=" pb-4  text-black font-normal font-sans" >No credit card required.<FormDescription> */}
               <p className=" text-black font-bold" >Paste your long link here</p>
              <FormControl>
                <Input 
                placeholder="https://example.com/your-long-link"
                className=" px-5 py-4 h-12  text-black border-[#777570]  "
                type="text"
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <button className=" hover:cursor-pointer px-3 py-4 rounded-2xl bg-background font-bold text-white tracking-widest uppercase transform hover:bg-background transition-colors duration-200">
                <span className=" flex items-center justify-center gap-3" >Get your link for free <ArrowRight /> </span>
            </button>
      </form>
    </Form>
  )
}