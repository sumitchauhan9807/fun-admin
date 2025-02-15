import { GET_CLOUD_PUT_URL } from "src/queries";
import axios from "axios";
import apollo from "src/apollo";

export const getCloudPutUrl = async (file: any) => {
  try {
    let filename = makeId(8)
    let { data } = await apollo.query({
      query: GET_CLOUD_PUT_URL,
      variables: {
        filename:filename,
        mimetype: file.type,
      },
    });
    return {
      status: true,
      data: data.getCloudPutUrl,
      filename:filename
    };
  } catch (e) {
    return {
      status: false,
      error: e,
    };
  }
};

export const uploadToCloud = (file: any, url: any, progress: any) => {
  return new Promise((resolve, reject) => {
    let mimeType = file.type;
    console.log(mimeType,"mimeType")
    console.log(url,"url")
    axios
      .request({
        method: "PUT",
        url: url,
        data: file,
        // headers_list:['Content-Type:video/mp4'],
        headers: {
          "Content-Type": mimeType,
        },
        onUploadProgress: (p: any) => {
          progress(Math.ceil((p.loaded / p.total) * 100));
        },
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// export default useUploadCloud

// async uploadToCloud(file) {
//   try {
//     this.uploadingFiles = true;
//     let mimeType = file.type;
//     let name = this.makeId(5) + "_" + file.name;
//     console.log(file);
//     console.log(name);
//     const { data, errors } = await this.$apollo.query({
//       query: GET_CLOUD_PUT_URL,
//       variables: {
//         filename: name,
//         mimetype: mimeType,
//         bucket: "mazuproductions",
//       },
//     });
//     let putUrl = data.getCloudPutUrl;
//     return new Promise((resolve, reject) => {
//       axios
//         .request({
//           method: "PUT",
//           url: putUrl,
//           data: file,
//           // headers_list:['Content-Type:video/mp4'],
//           headers: {
//             "Content-Type": mimeType,
//           },
//           onUploadProgress: (p) => {
//             console.log(p);
//             console.log(Math.ceil((p.loaded / p.total) * 100));
//             this.uploadProgress = Math.ceil((p.loaded / p.total) * 100);
//             console.log(this.uploadProgress);
//             // document.getElementById('progress').innerHTML = `${Math.ceil(p.progress * 100)}  %`
//             //this.setState({
//             //fileprogress: p.loaded / p.total
//             //})
//           },
//         })
//         .then((data) => {
//           console.log(data);
//           resolve({
//             filename: name,
//             mimetype: mimeType,
//           });
//         })
//         .catch((e) => {
//           this.uploadingFiles = false;
//           this.uploadProgress = 0;
//           reject(e);
//         });
//     });
//   } catch (e) {
//     console.log(e);
//   }
// },
const makeId = (length: Number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
