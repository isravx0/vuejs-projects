<template>
    <div class="backdrop">
        <div class="modal">
        <h1> Modal title</h1>
        <p> Modal content</p>
        </div>
    </div>
</template>


<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}

.modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
}
.modal p {
    font-style: normal;
}
</style>