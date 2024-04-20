"use client";

import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { SingleImageDropzone } from "../single-image-dropzone";

const CoverImageModal = () => {
    const [file,setFile]=useState<File>();
    const [isSubmitting,setIsSubmitting] = useState(false);
    const coverImage=useCoverImage();
    const {edgestore}=useEdgeStore();
    const update=useMutation(api.documents.update);
    const params= useParams();
    const onChange = async (file?:File) => {
    const onClose= ()=>{
        setFile(undefined);
        setIsSubmitting(false);
        coverImage.onClose();
    }
        if(file){
            setIsSubmitting(true);
            setFile(file);
            let res;
            res=await edgestore.publicFiles.upload({
                file,
                options:{
                    replaceTargetUrl:coverImage.url,
        }});
        await update({
            id :params.documentId as Id<"documents">,
            coverImage:res.url
        }); 
    onClose();}
       
    }
    return ( <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
        <DialogContent>
            <DialogHeader>
                <h2 className="text-center text-lg font-semibold">
                    Cover Image
                </h2>
            </DialogHeader>
            <div>
               <SingleImageDropzone className="w-full outline-none"
               disabled={isSubmitting}
               value={file}
               onChange={onChange}
               />
            </div>
        </DialogContent>

    </Dialog> );
}
 
export default CoverImageModal;