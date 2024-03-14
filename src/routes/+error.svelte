<script lang="ts">
	import { page } from '$app/stores';
</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
        <h2 class="h2 text-error-500">{$page.status}: {$page?.error?.message ?? "Error"}!</h2>
    </div>
</div>