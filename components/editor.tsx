"use client";
import { BlockNoteEditor, PartialBlock, BlockNoteEditorOptions } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useCreateBlockNote } from "@blocknote/react"; // Adjust this import if necessary
import "@blocknote/react/style.css";
import { useEdgeStore } from "@/lib/edgestore";
interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const { resolvedTheme } = useTheme();
    const {edgestore} =useEdgeStore();
    const edit=editable;
    const handleUpload= async(file:File)=>{
        const res=await edgestore.publicFiles.upload({file});
    return res.url;
    }
    const onEditorChange = ()=>{
        onChange(JSON.stringify(editor.document,null,2));
    }
    const editor= useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
        uploadFile:handleUpload
    });

    return (
        <div>
            <BlockNoteView editor={editor} theme={resolvedTheme === "dark" ? "dark" : "light"} editable={edit} onSelectionChange={onEditorChange} />
        </div>
    );
};

export default Editor;