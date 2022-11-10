<template>
  <div className="dashboard-weather">
    <div className="left-sidebar">
      <LeftSidebar />
    </div>
    <div className="right-content">
      <div v-if="getError123" className="alert-danger">{{ getError123 }}</div>
      <Mainmenu
        :currentTab="currentTab"
        @handleChooseMenuitem="handleChooseMenuitem"
      />
      <Hour v-if="currentTab === 'hour'" />
      <Week v-if="currentTab === 'week'" />
      <Today v-if="currentTab === 'today'" />
    </div>
  </div>
</template>

<script>
import LeftSidebar from "../components/LeftSidebar.vue";
import Mainmenu from "../components/MainMenu.vue";
import Hour from "../components/Hour.vue";
import Week from "../components/Week.vue";
import Today from "../components/Today.vue";
export default {
  components: {
    LeftSidebar,
    Mainmenu,
    Hour,
    Week,
    Today,
  },
  data() {
    return {
      currentTab: "today",
      dataError: this.$store.getters.getError,
    };
  },
  methods: {
    handleChooseMenuitem(data) {
      this.currentTab = data;
    },
  },
  computed: {
    getError123() {
      return this.$store.getters.getError;
    },
  },
};
</script>
