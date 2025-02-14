"use client"
import { useForm } from "react-hook-form"
import { useState,useCallback } from "react"
import { useDropzone } from "react-dropzone";



// interface ImageType {
//     imgeList:string,
//     addUpdateIndex:string
// }

const AttendeeDetails = () => {
    const {register,handleSubmit} = useForm()
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, []);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] }, // Accept only images
        multiple: false,
    });
   

  return (
    <div>
        <form action="">
        <div className="bg-052228">
        
        <label htmlFor="">Upload Profile Photo</label>
            <div
            {...getRootProps()}
            className="border-4 border-[#24A0B5] p-6 max-w-[190px] mx-auto rounded-lg cursor-pointer text-center"
        >


            <input {...getInputProps()} />
            {isDragActive ? (
                <small className="text-blue-500">Drop the image here...</small>
            ) : (
                <small>Drag & drop an image here, or click to select one</small>
            )}
            {files.length > 0 && (
                <div className="mt-4">
                    <p>Uploaded Image:</p>
                    <img
                        src={URL.createObjectURL(files[0])}
                        alt="Preview"
                        className="mt-2 w-40 h-40 object-cover rounded-lg"
                    />
                </div>
            )}
        </div>
        </div>

            <div>
                <div>
                    <label htmlFor="name">Enter your name</label>
                    <input {...register("name")} type="text" name="name" title="name" className="border border-[#07373F] w-full p-2 rounded-lg" id="" />
                </div>

                <div>
                    <label htmlFor="email">Enter your name *</label>
                    <input {...register("email")} type="email" name="email" title="email" id="" placeholder="hello@avioflagos.io"  className="border border-[#07373F] w-full p-2 rounded-lg"/>
                </div>
                <div>
                    <label htmlFor="About">About the project </label>
                    <textarea {...register("about")} placeholder="textarea" className="border border-[#07373F] w-full p-2 rounded-lg"/>
                </div>
            </div>



        </form>
        <div className="flex flex-col gap-2">
            <button className="btn-1">Get My free Ticket</button>
            <button className="btn-2">Back</button>
        </div>
    </div>
  )
}

export default AttendeeDetails