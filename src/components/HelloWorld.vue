<template>
  <div class="hello">
    <input type="file" @change="onChangeFile" />
    <br />
    <br />
    <button @click="handleSendFile">send file</button>
  </div>
</template>

<script>
import AWSS3UploadAshClient from "aws-s3-upload-ash";

export default {
  name: "HelloWorld",
  data: function () {
    return {
      fileSelected: null,
      config: {
        bucketName: "aws-s3-upload-ash",
        dirName:
          "media" /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */,
        region: "us-east-1",
        accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY,
        secretAccessKey: process.env.VUE_APP_AWS_SECRET_KEY,
        s3Url: "https://aws-s3-upload-ash.s3.amazonaws.com/",
      },
    };
  },
  methods: {
    onChangeFile: function (event) {
      console.log("fileSelected", event.target.files[0]);
      this.fileSelected = event.target.files[0];
    },
    handleSendFile: function () {
      console.log(
        "process.env.VUE_APP_AWS_ACCESS_KEY",
        process.env.VUE_APP_AWS_ACCESS_KEY
      );
      console.log("send file", this.fileSelected);
      let S3CustomClient = new AWSS3UploadAshClient(this.config);
      S3CustomClient.uploadFile(
        this.fileSelected,
        this.fileSelected.type,
        undefined,
        this.fileSelected.name,
        undefined
      )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
