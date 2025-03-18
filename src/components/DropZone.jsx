import React from "react";
import { useDropzone } from "react-dropzone";
import { useRef } from "react";
import { RiDragDropFill } from "react-icons/ri";

function Dropzone(props) {
  const { required, name, classProps } = props;

  const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        // Note the specific way we need to munge the file into the hidden input
        // https://stackoverflow.com/a/68182158/1068446
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        {/*
            Add a hidden file input 
            Best to use opacity 0, so that the required validation message will appear on form submission
          */}
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          multiple={true}
        />
        <input {...getInputProps()} />
        <p><RiDragDropFill/> Glissez les fichiers ici</p>
        <button className={classProps} type="button" onClick={open}>
          Ouvrir l'explorateur de fichier
        </button>
      </div>
      <aside>
        <h4>Files : </h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

<Dropzone />;

export default Dropzone;
