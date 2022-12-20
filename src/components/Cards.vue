<template>

<div class="col mb-4">
    <div class="card h-100 shadow">
        <div class="card-bordy">
            <span>
                {{ element.name }}
            </span>
        </div>
    </div>
</div>

</template>

<script>
    
    export default {
        name: "cards",
        props: ["element"],
    };

</script>