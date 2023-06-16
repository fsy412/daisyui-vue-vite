<template >
    <!-- The button to open modal -->
    <label for="my_modal_6" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my_modal_6" class="modal-toggle" />
    <div class="modal text-gray-400">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Connect Wallet!</h3>
            <!-- <p class="py-4">This modal works with a hidden checkbox!</p> -->
            <div class="modal-action">
                <label for="my_modal_6" class="btn">Close!</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    }

}
</script>
<style scoped></style>