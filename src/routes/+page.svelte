<script lang="ts">

  import { onMount } from 'svelte';
  import "../app.css";

  let showAppleEmoji = false;

  onMount(() => {
    function isAppleDevice() {
      return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
    }
    showAppleEmoji = isAppleDevice();
  });

</script>

<div class="flex justify-center items-center h-full">
  <p class="animate-happfacefade text-5xl text-white font-main font-semibold absolute">
    <span class="text-xxxs">SM</span>Happ ;)
  </p>
  <p class="animate-soonfade text-center text-5xl text-white font-main font-semibold absolute px-8 md:px-16 lg:px-24 xl:px-32">
    {#if showAppleEmoji}
      🎉
    {/if}
    Your go-to event planner is almost here!
    <span class="">{#if showAppleEmoji}📲{:else}{/if}</span>
  </p>
</div>
