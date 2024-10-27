<script>

</script>

<template>
    <div class=" items-center justify-center pt-16">
        <div class="h-[25%] bg-blue-200 py-8 top-portfolio">
            <div>
                <div
                    class="border-[6px] h-[74px] w-[404px] mx-auto border-black font-bold text-center mt-4 text-3xl py-3 text-[#000000]">
                    PORTFOLIO
                </div>
            </div>
        </div>
        <div class="h-[10%] bg-[#1A1A1A]">
            <div class="justify-center flex text-white pt-4">
                <div class="px-16 ">ALL</div>
                <div class="px-16">CODED</div>
                <div class="px-16">DESIGNED</div>
            </div>
            <div class="border-t border-gray-400 py-4 w-1/4 mx-auto" style="height: 3px;"></div>
        </div>
        <div class="grid grid-cols-3  ">
            <div class="col-span-1 py-4 project1 group">
                <div
                    class="absolute left-0 top-full mt-2 text-blue p-4 hidden group-hover:block transition duration-300 ease-in-out">
                    This is the content that appears on hover!
                </div>
            </div>

            <div class="col-span-1 py-4 project2">

            </div>
            <div class="col-span-1 py-4 project3">

            </div>
            <div class="col-span-1 py-4 project3">
            </div>
            <div class="col-span-1 py-4 project1">

            </div>
            <div class="col-span-1 py-4 project2">

            </div>
        </div>

    </div>
</template>
<style scoped>
.top-portfolio {
    background-image: url('/images/portfolio1.svg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.project1 {
    background-image: url('/images/Project.svg');
    background-size: cover;
    background-position: center;
    height: 38vh;
}

.project2 {
    background-image: url('/images/portfolio2.svg');
    background-size: cover;
    background-position: center;
    height: 38vh;

}

.project3 {
    background-image: url('/images/Project.png');
    background-size: cover;
    background-position: center;
    height: 38vh;

}
</style>