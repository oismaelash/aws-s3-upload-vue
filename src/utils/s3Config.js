import AWSS3UploadAshClient from "aws-s3-upload-ash";

const config = {
  bucketName: "aws-s3-upload-ash",
  dirName:
    "media" /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */,
  region: "us-east-1",
  accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.VUE_APP_AWS_SECRET_KEY,
  s3Url: "https://aws-s3-upload-ash.s3.amazonaws.com/",
};

let S3CustomClient = new AWSS3UploadAshClient(config);

function s3Cliente(fileSelected) {
  // eslint-disable-next-line no-debugger
  debugger;
  console.log(fileSelected);
  return S3CustomClient.uploadFile(
    fileSelected,
    fileSelected.type,
    undefined,
    fileSelected.name,
    undefined
  );
}

export default s3Cliente;
