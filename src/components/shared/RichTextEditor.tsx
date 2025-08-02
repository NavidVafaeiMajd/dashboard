import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { FormControl } from "@/components/ui/form";

type Props = {
   value: string;
   onChange: (value: string) => void;
};

function RichTextEditor({ value, onChange }: Props) {
   const { quill, quillRef } = useQuill({
      theme: "snow",
      modules: {
         toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ align: [] }],
            ["blockquote"],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            ["link", "image"],
            ["clean"],
         ],
      },
      placeholder: "چیزی بنویسید...", // RTL placeholder (optional)
   });

   // Set default content
   useEffect(() => {
      if (quill && value !== quill.root.innerHTML) {
         quill.root.innerHTML = value;
      }
   }, [quill, value]);

   // Listen for content changes
   useEffect(() => {
      if (!quill) return;
      quill.on("text-change", () => {
         onChange(quill.root.innerHTML);
      });
   }, [quill]);

   // Set RTL direction on editor content
   useEffect(() => {
      if (quill) {
         quill.root.setAttribute("dir", "rtl");
         quill.root.style.textAlign = "right";
      }
   }, [quill]);

   return (
      <FormControl>
         <div
            className="border rounded-md overflow-hidden text-right editor-wrapper"
            dir="rtl"
         >
            <div ref={quillRef} />
         </div>
      </FormControl>
   );
}

export default RichTextEditor;
