<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated>
      <q-toolbar class="main-layout">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Ruan Felipe
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list >
        <q-item-label
          header
        >
          Links para Contato
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Github do Ruan Felipe',
    caption: '',
    icon: 'code',
    link: 'https://github.com/RuanSilva6721',
  },
  {
    title: 'Linkedin do Ruan Felipe',
    caption: '',
    icon: 'work',
    link: 'https://www.linkedin.com/in/ruan-felipe-silva-06b9631a6/',
  },
  {
    title: 'E-mail do Ruan Felipe',
    caption: 'ruansilva6721@gmail.com',
    icon: 'email',
    link: '#',
  },
  {
    title: 'Contato',
    caption: '91-983030520',
    icon: 'phone',
    link: '#',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style lang="sass" scoped>
.main-layout 
  background-color: purple

</style>