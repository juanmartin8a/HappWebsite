<script lang="ts">
  import { onMount, tick } from "svelte";
  import twemoji from "twemoji";
  import "../app.css";

  let showAppleEmoji = false;

  onMount(async () => {
    function isAppleDevice() {
      return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
    }
    showAppleEmoji = isAppleDevice();

    await tick(); // Wait for the next DOM update

    const elements = document.querySelectorAll(".emoji");
    elements.forEach(parseEmoji);
  });

  // Add this function to parse the emoji
  function parseEmoji(element) {
    if (!showAppleEmoji) {
      element.innerHTML = twemoji.parse(element.innerHTML, {
        attributes: () => {
          return {
            style: "display:inline;vertical-align:middle;height:1em;width:1em;",
          };
        },
      });
    }
  }
</script>

<div class="flex justify-center items-center h-full">
  <p class="animate-happfacefade text-5xl text-white font-main font-semibold absolute">
    <span class="text-xxxs">SM</span>Happ ;)
  </p>
  <p class="animate-soonfade text-center text-5xl text-white font-main font-semibold absolute px-8 md:px-16 lg:px-24 xl:px-32">
    <span class="emoji">🎉</span>
    Your go-to event planner is almost here!
    <span class="emoji">📲</span>
  </p>
</div>