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
import CuDatePicker from "./DatePicker";
import RichTextEditor from "./RichTextEditor";
import { ImageUploadInput } from "./ImageUploadInput";
import { Checkbox } from "@/components/ui/checkbox";
import Select from "react-select";
import StarRating from "./StarRating";
import TimePickerInput from "../ui/TimePicker";

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
  defaultAccordionOpen = false,
}: FormRootProps<T>) {
  const content = (
    <form onSubmit={formProp.handleSubmit(onSubmit)} className={cn(className)}>
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
            className="w-full border-b-red-500 border-b-2! px-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg!">
                {accordionTitle}
              </AccordionTrigger>
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
  disabled?: boolean;
}

function FormInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  className,
  inputClassName,
  disabled,
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
              disabled={disabled}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
// ---------- Date ----------
interface FormDateProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  className?: string;
}

function FormDate<T extends FieldValues>({
  name,
  label,
  className,
}: FormDateProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full space-y-2  ${className ?? ""}`}>
          <FormLabel className="text-base">
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <CuDatePicker value={field.value} onChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// ---------- RichText ----------
interface FormRichTextProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  required?: boolean;

  className?: string;
}

function FormRichText<T extends FieldValues>({
  name,
  label,
  required,
  className,
}: FormRichTextProps<T>) {
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
            <RichTextEditor value={field.value} onChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// // ---------- Select ----------
// interface FormSelectProps<T extends FieldValues> {
//   name: Path<T>;
//   label: string;
//   required?: boolean;
//   placeholder?: string;
//   className?: string;
//   children: React.ReactNode;
// }

// function FormSelect<T extends FieldValues>({
//   name,
//   label,
//   required,
//   placeholder,
//   className,
//   children,
// }: FormSelectProps<T>) {
//   const { control } = useFormContextSafe<T>();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className={`w-full space-y-2 ${className ?? ""}`}>
//           <FormLabel className="text-base">
//             {label} {required && <span className="text-red-500">*</span>}
//           </FormLabel>
//           <FormControl>
//             <ShadcnSelect
//               value={field.value}
//               onValueChange={field.onChange}
//               dir="rtl"
//             >
//               <SelectTrigger className="w-full min-h-12">
//                 <SelectValue placeholder={placeholder} />
//               </SelectTrigger>
//               <SelectContent>{children}</SelectContent>
//             </ShadcnSelect>
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }

// ---------- Textarea ----------
interface FormTextareaProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  textareaClassName?: string;
}

function FormTextarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  className,
  textareaClassName,
}: FormTextareaProps<T>) {
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
            <textarea
              placeholder={placeholder}
              className={`w-full  p-2 border rounded-md ${
                textareaClassName ?? ""
              }`}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// ---------- Image Upload ----------
interface FormImageProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  required?: boolean;
  className?: string;
}

function FormImage<T extends FieldValues>({
  name,
  label,
  required,
  className,
}: FormImageProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full space-y-2 ${className ?? ""}`}>
          {label && (
            <FormLabel className="text-base">
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <ImageUploadInput field={field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

//---------- MultiSelect ----------

interface MultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
  className?: string;
}

export function MultiSelect<T extends FieldValues>({
  name,
  label,
  options,
  required,
  className,
}: MultiSelectProps<T>) {
  const { control } = useFormContextSafe<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col w-full space-x-2 space-y-0 ${
            className ?? ""
          }`}
        >
          <FormLabel className="text-md">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Select<{ label: string; value: string }, false>
              isRtl
              closeMenuOnSelect
              options={options}
              className="min-h-[44px] h-full! mt-4"
              value={options.find((opt) => opt.value === field.value) ?? null}
              onChange={(val) => field.onChange(val ? (val as { label: string; value: string }).value : "")}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

//---------- STAR ----------

interface StarRateProps<T extends FieldValues> {
  name: Path<T>;
  className?: string;
}

export function StarRate<T extends FieldValues>({
  name,
  className,
}: StarRateProps<T>) {
  const { control } = useFormContextSafe<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col w-full space-x-2 space-y-0 ${
            className ?? ""
          }`}
        >
          <FormControl>
            <StarRating star={field.value} onChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

// ---------- Checkbox ----------
interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  required?: boolean;
  className?: string;
}

function FormCheckbox<T extends FieldValues>({
  name,
  label,
  required,
  className,
}: FormCheckboxProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center space-x-2 space-y-0 ${
            className ?? ""
          }`}
        >
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="size-6"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-md">
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

// ---------- TimePicker ----------
interface FormTimePickerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  required?: boolean;
  className?: string;
}

function FormTimePicker<T extends FieldValues>({
  name,
  label,
  required,
  className,
}: FormTimePickerProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col space-x-2 space-y-0 ${
            className ?? ""
          }`}
        >
          <FormLabel className="text-md">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <TimePickerInput value={field.value} onChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
export const Form = Object.assign(FormRoot, {
  Input: FormInput,
  // Select: FormSelect,
  Date: FormDate,
  RichText: FormRichText,
  Textarea: FormTextarea,
  Image: FormImage,
  Checkbox: FormCheckbox,
  SelectItem,
  FormSelect: MultiSelect,
  StarRate: StarRate,
  TimePicker: FormTimePicker,
});
