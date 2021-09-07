<template>
  <div class="hello">
    <input type="file" @change="onChangeFile" />
    <br />
    <br />
    <button @click="handleSendFile">send file</button>
  </div>
</template>

<script>
import s3Configs from "../utils/s3Config.js";
import { watch, ref } from "vue";

export default {
  setup() {
    let fileSelected = ref(new File([""], ""));

    watch(fileSelected, newFile => {
      console.log("fileSelected", newFile.target.files[0]);
      fileSelected.value = newFile.target.files[0];
    });

    function handleSendFile() {
      console.log(
        "process.env.VUE_APP_AWS_ACCESS_KEY",
        process.env.VUE_APP_AWS_ACCESS_KEY
      );
      console.log("send file", fileSelected);

      s3Configs(fileSelected.value)
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    return {
      fileSelected,
      handleSendFile
    };
  }
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
