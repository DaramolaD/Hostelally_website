"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CircleCheck, Info, XCircleIcon } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        iconType,
        ...props
      }) {
        let Icon;

        // Choose the icon based on the `iconType`
        if (iconType === "success") {
          Icon = CircleCheck; // Success icon
        } else if (iconType === "error") {
          Icon = XCircleIcon; // Error icon
        } else if (iconType === "info") {
          Icon = Info; // Info icon
        } else {
          Icon = null; // Default, no icon
        }

        return (
          <Toast key={id} {...props}>
            <div className="flex items-center gap-2">
              {Icon && (
                <Icon
                  className={`h-5 w-5  ${
                    iconType === "success"
                      ? "text-green-500"
                      : iconType === "error"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
              )}{" "}
              {/* Icon */}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
