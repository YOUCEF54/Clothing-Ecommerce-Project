// import React, { useState, useRef, useEffect } from 'react';
// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// const Drag = () => {
//   const [files, setFiles] = useState([]);
//   const pond = useRef(null);

//   useEffect(() => {
//     console.log("FilePond instance has initialised", pond.current);
//   }, []);

//   const handleUpdateFiles = (fileItems) => {
//     setFiles(fileItems.map(fileItem => fileItem.file));
//   };

//   return (
//     <div className="App">
//       <FilePond
//         ref={pond}
//         files={files}
//         allowMultiple={true}
//         allowReorder={true}
//         maxFiles={3}
//         server="/upload"
//         name="files"
//         onupdatefiles={handleUpdateFiles}
//       />
//     </div>
//   );
// };

// export default Drag;



import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Drag() {
  const { data, setData, post, progress } = useForm({
    name: '',
    avatar: null,
  });

  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('avatar', data.avatar);
    post('/upload', formData); // Sending form data instead of plain object
  }

  return (
    <form className='  z-50' onSubmit={submit}>
      <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
      <input type="file" onChange={e => setData('avatar', e.target.files[0])} />
      {progress && (
        <progress value={progress.percentage} max="100">
          {progress.percentage}%
        </progress>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
