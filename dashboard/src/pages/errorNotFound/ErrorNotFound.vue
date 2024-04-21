<script setup lang="ts">
import { useI18nLocal } from 'composables/useI18nLocal'
import { HomeRoutes } from 'pages/home'

import { ErrorNotFoundEnum } from './enums'

const { $tl } = useI18nLocal(ErrorNotFoundEnum.name)
</script>

<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">
        {{ $tl('title') }}
      </div>

      <div
        class="text-h2"
        style="opacity: 0.4"
      >
        {{ $tl('subtitle') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        :to="HomeRoutes"
        :label="$tl('button')"
        no-caps
      />
    </div>
  </div>
</template>
