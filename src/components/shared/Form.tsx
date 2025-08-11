import React, { createContext, useContext } from "react";
import {
   Form as ShadcnForm,
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
   Select as ShadcnSelect,
   SelectTrigger,
   SelectValue,
   SelectContent,
   SelectItem,
} from "@/components/ui/select";
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from "@/components/ui/accordion";
import type {
   FieldValues,
   Path,
   UseFormReturn,
   SubmitHandler,
} from "react-hook-form";
import { cn } from "@/lib/utils";

// ---------- Context ----------
interface FormContextType<T extends FieldValues> {
   form: UseFormReturn<T>;
}

const FormContext = createContext<FormContextType<any> | null>(null);

function useFormContextSafe<T extends FieldValues>() {
   const ctx = useContext(FormContext);
   if (!ctx) {
      throw new Error("Form.* components must be used inside <Form>");
   }
   return ctx.form as UseFormReturn<T>;
}

// ---------- Root ----------
interface FormRootProps<T extends FieldValues> {
   formProp: UseFormReturn<T>;
   onSubmit: SubmitHandler<T>;
   className?: string;
   children: React.ReactNode;
   accordion?: boolean;
   accordionTitle?: string;
   defaultAccordionOpen?: boolean;
}

function FormRoot<T extends FieldValues>({
   formProp,
   onSubmit,
   className,
   children,
   accordion = false,
   accordionTitle = "Form",
   defaultAccordionOpen = true,
}: FormRootProps<T>) {
   const content = (
      <form
         onSubmit={formProp.handleSubmit(onSubmit)}
         className={cn(className)}
      >
         {children}
      </form>
   );

   return (
      <FormContext.Provider value={{ form: formProp }}>
         <ShadcnForm {...formProp}>
            {accordion ? (
               <Accordion
                  type="single"
                  collapsible
                  defaultValue={defaultAccordionOpen ? "item-1" : undefined}
                  className="w-full"
               >
                  <AccordionItem value="item-1">
                     <AccordionTrigger>{accordionTitle}</AccordionTrigger>
                     <AccordionContent>{content}</AccordionContent>
                  </AccordionItem>
               </Accordion>
            ) : (
               content
            )}
         </ShadcnForm>
      </FormContext.Provider>
   );
}

// ---------- Input ----------
interface FormInputProps<T extends FieldValues> {
   name: Path<T>;
   label: string;
   placeholder?: string;
   required?: boolean;
   className?: string;
   inputClassName?: string;
}

function FormInput<T extends FieldValues>({
   name,
   label,
   placeholder,
   required,
   className,
   inputClassName,
}: FormInputProps<T>) {
   const { control } = useFormContextSafe<T>();

   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <FormItem className={`w-full space-y-2 ${className ?? ""}`}>
               <FormLabel className="text-base">
                  {label} {required && <span className="text-red-500">*</span>}
               </FormLabel>
               <FormControl>
                  <Input
                     placeholder={placeholder}
                     className={`min-h-12 ${inputClassName ?? ""}`}
                     {...field}
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   );
}

// ---------- Select ----------
interface FormSelectProps<T extends FieldValues> {
   name: Path<T>;
   label: string;
   required?: boolean;
   placeholder?: string;
   className?: string;
   children: React.ReactNode;
}

function FormSelect<T extends FieldValues>({
   name,
   label,
   required,
   placeholder,
   className,
   children,
}: FormSelectProps<T>) {
   const { control } = useFormContextSafe<T>();

   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <FormItem className={`w-full space-y-2 ${className ?? ""}`}>
               <FormLabel className="text-base">
                  {label} {required && <span className="text-red-500">*</span>}
               </FormLabel>
               <FormControl>
                  <ShadcnSelect
                     value={field.value}
                     onValueChange={field.onChange}
                     dir="rtl"
                  >
                     <SelectTrigger className="w-full min-h-12">
                        <SelectValue placeholder={placeholder} />
                     </SelectTrigger>
                     <SelectContent>{children}</SelectContent>
                  </ShadcnSelect>
               </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   );
}

// ---------- Compound export ----------
export const Form = Object.assign(FormRoot, {
   Input: FormInput,
   Select: FormSelect,
   SelectItem,
});
