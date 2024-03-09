<template>
  <camera-icon color="white" :size="32" />
</template>

<script>
import { Camera as CameraIcon } from "lucide-vue-next";

export default {
  name: "AppHeader",
  components: {
    CameraIcon,
  },
};
</script>
