// import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import React from 'react'
import { Camera, CameraResultType } from '@capacitor/camera';

const Camerax = () => {
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    // imageElement.src = imageUrl;
    // Can be set to the src of an image now

    // Filesystem


    // const writeFile = async () => {
    //   await Filesystem.writeFile({
    //     path: 'secrets/text.txt',
    //     data: "This is a test",
    //     directory: Directory.Documents,
    //     encoding: Encoding.UTF8,
    //   });
    // };

    // const readSecretFile = async () => {
    //   const contents = await Filesystem.readFile({
    //     path: 'secrets/text.txt',
    //     directory: Directory.Documents,
    //     encoding: Encoding.UTF8,
    //   });

    //   console.log('secrets:', contents);
    // };

    // const deleteSecretFile = async () => {
    //   await Filesystem.deleteFile({
    //     path: 'secrets/text.txt',
    //     directory: Directory.Documents,
    //   });
    // };

    // const readFilePath = async () => {
    //   // Here's an example of reading a file with a full file path. Use this to
    //   // read binary data (base64 encoded) from plugins that return File URIs, such as
    //   // the Camera.
    //   const contents = await Filesystem.readFile({
    //     path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
    //   });

    //   console.log('data:', contents);
    // };

  };
  return (
    <>
      <button className="btx" onClick={takePicture}>Go</button>
    </>
  )
}

export default Camerax;