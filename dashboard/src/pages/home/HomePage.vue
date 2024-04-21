<script setup lang="ts">
import { useI18nLocal } from 'composables/useI18nLocal'

import { HomePageEnum } from './enums'

const { $tl } = useI18nLocal(HomePageEnum.name)
</script>

<template>
  <q-page class="row items-center justify-evenly">
    {{ $tl(`pageTitle`) }}
  </q-page>
</template>
