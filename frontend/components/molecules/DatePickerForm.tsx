"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useController, UseControllerProps } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps extends UseControllerProps {
  label: string;
  placeholder?: string;
  disabledDates?: (date: Date) => boolean;
  onChange?: (date: Date | null) => void; // Add this
}

export function DatePicker({
  name,
  control,
  label,
  placeholder = "Pick a date",
  disabledDates,
  onChange, // Receive onChange from parent
}: DatePickerProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <FormItem className="flex flex-col">
      <FormLabel>{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-[200px] pl-3 text-left font-normal justify-start",
                !field.value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="h-4 w-4 opacity-50" />
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>{placeholder}</span>
              )}
            </Button>
          </FormControl>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              const safeDate = date || null; // Convert undefined to null
              field.onChange(safeDate); // Update react-hook-form
              if (onChange) onChange(safeDate); // Notify parent
            }}
            disabled={
              disabledDates ||
              ((date) => date < new Date(new Date().setHours(0, 0, 0, 0))) // Disable past dates
            }
            initialFocus
            className="w-full"
          />
        </PopoverContent>
      </Popover>
      {error && <FormMessage>{error.message}</FormMessage>}
    </FormItem>
  );
}
