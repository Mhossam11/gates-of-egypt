"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

export function DatePicker() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <Form {...form}>
      <form className="space-y-8 w-fit ">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " font-bold tracking-wider bg-transparent hover:bg-transparent shadow-none hover:cursor-pointer  border-none w-fit pl-3 ",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                    <CalendarIcon className="text-[#D2AC71] ml-auto h-4 w-4 opacity-50" />
                      {field.value ? (
                        <span className="hidden md:flex">{format(field.value, "PPP")}</span>
                      ) : (
                        <span className="hidden md:flex">Pick a date</span>
                    )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white/25 backdrop-blur-sm rounded-[30px] border-none mt-3 " align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
