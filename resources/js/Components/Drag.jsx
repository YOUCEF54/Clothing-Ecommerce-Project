
import { useForm } from '@inertiajs/react';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";

import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";

// import "../../../vendor/doka.min.css";
// import { create } from "../../../vendor/doka.esm.min";
import { useState } from 'react';

registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginImageEdit,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType
);

const Drag = () => {
    const { data, setData, post, progress } = useForm({
        name: '',
        avatars: [],
    });

    const [files, setFiles] = useState([]);

    const handleImageEditConfirm = (data) => {
        // Update the file metadata to mark it as edited
        const editedFile = files.find((file) => file.id === data.id);
        if (editedFile) {
            editedFile.edited = true;
            setFiles([...files]); // Update state to trigger re-render
        }
    };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);

        // Separate regular file uploads from edited images
        const regularFiles = [];
        const editedFiles = [];

        files.forEach((file, index) => {
            if (file.edited) {
                editedFiles.push(file.file);
            } else {
                regularFiles.push(file.file);
            }
        });

        // Append regular files to FormData
        regularFiles.forEach((file, index) => {
            formData.append(`avatar_${index}`, file);
        });

        // Append edited files to FormData
        editedFiles.forEach((file, index) => {
            formData.append(`edited_avatar_${index}`, file);
        });

        // Submit the form with both regular files and edited images
        post('/dashboard', formData);
    };
    const srcList = [ {
        src:'',
        id:'',
        time:0
    }]
    return (
        <div className="App">
    <form>
        <FilePond
            files={files}
            allowMultiple={true}
            allowReorder
            allowImageEdit={true}
            onpreparefile={(file, output) => {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(output);
                img.className = "rounded-md ring shadaw size-[8rem] object-cover hover:object-contain "
                document.getElementById('con').appendChild(img);

                // Check if an object with the same id already exists
                const index = srcList.findIndex(item => item.id === file.id);

                // If an object with the same id exists, remove it from the srcList and remove the corresponding image from the DOM
                if (index !== -1) {
                    srcList.splice(index, 1);
                    document.getElementById('con').children[index-1].remove();
                }

                // Add the new object to srcList
                srcList.push({ src: img.src, id: file.id, time: Date.now() });
                console.log(srcList);
            }}

            onupdatefiles={fileItems => {
                // Update form data with selected files
                setData('avatars', fileItems.map(fileItem => fileItem.file));
            }}
            onprocessfile={(error, file) => {
                if (!error) {
                    // File processed successfully, update the file in the FilePond component
                    const pond = document.querySelector('.filepond--root');
                    pond.pond.updateFile(file.id, {
                        file: file.file,
                        metadata: { ...file.getMetadata() }
                    });
                }
            }}
            server={{
                url: '/dashboard',
                process: {
                    method: 'POST',
                    withCredentials: true,
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    onload: (response) => {
                        // Check if response contains file paths
                        if (Array.isArray(response)) {
                            // Update form data with file paths
                            setData('avatars', response);
                        } else {
                            // console.error('Unexpected response format:', response);
                        }
                    }
                }
            }}
            acceptedFileTypes={['image/*']}
            maxFileSize="1MB"
            labelIdle='Drag & Drop your picture or <span class="filepond--label-action">Browse</span>'
            imageResizeTargetWidth={200}
            imageResizeTargetHeight={144}
            imageResizeUpscale={false}
            imageResizeMode={"contain"}
        />
        {progress && (
            <progress className='rounded' value={progress.percentage} max="100">
                {progress.percentage}%
            </progress>
        )}
        <button className='p-2 bg-[#1C2434] text-white rounded hover:bg-[#121925]' onClick={submit}>Submit</button>
        <div className='flex gap-6 flex-wrap mt-4' id='con'></div>
    </form>
</div>

    );
};

export default Drag;
