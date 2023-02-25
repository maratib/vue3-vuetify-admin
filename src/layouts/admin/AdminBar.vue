<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Admin toolbar <br />
      <router-link to="/">Go to Home</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/admin">Go to AdminHome</router-link
      >&nbsp;&nbsp;&nbsp;&nbsp;

      <router-link to="/admin/reports">Reports</router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
