<template>
    <div class="pt-16 pt-0">
        <div class="border-[6px] h-[74px] w-[404px] mx-auto border-black font-bold text-center mt-4 text-3xl py-3">
            CONTACT
        </div>
        <div class="py-8 justify-center text-center m-auto w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia eos sapiente nulla error
            reprehenderit, temporibus, nesciunt
            delectus rem ipsam iure nemo corporis praesentium quo sed ab molestias porro ducimus!
        </div>
        <div>
            <img src="/images/separator.svg" alt="logo" width="100px" height="100px"
                class="relative  pl-4 mx-auto mt-4">
        </div>
        <div class="w-1/3 mx-auto">
            <form class="p-8 rounded-lg">
                <div class="my-8 ">
                    <input type="text" id="name" name="name"
                        class=" w-full py-2 px-3 text-[#8B8B8B]  border-b-4 border-l-4 border-[#000000] "
                        placeholder="ENTER YOUR NAME*" required />
                </div>

                <div class="my-8">

                    <input type="email" id="email" name="email"
                        class=" w-full py-2 px-3 text-[#8B8B8B]  border-b-4 border-l-4 border-[#000000]  "
                        placeholder="ENTER YOUR EMAIL*" required />
                </div>

                <div class="my-8">
                    <input type="tel" id="phone" name="phone"
                        class=" w-full py-2 px-3 text-[#8B8B8B]  border-b-4 border-l-4 border-[#000000] "
                        placeholder="ENTER YOUR PHONE*" />
                </div>

                <div class="my-8">
                    <textarea id="message" name="message" rows="4"
                        class=" w-full py-2 px-3 text-[#8B8B8B]  border-b-4 border-l-4 border-[#000000] "
                        placeholder="ENTER YOUR MESSAGE*" required></textarea>
                </div>

                <div class="text-center">
                    <button type="submit"
                        class="text-[#000000] font-bold py-2 px-4 border-l-4 border-r-4 border-[#000000]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div class="h-32 bg-[#000000] text-center">
            <div class="mt-4">
                <img src="/images/Vector.svg" alt="logo" width="30px" height="30px"
                    class="relative  pl-4 mx-auto mb-4 pt-4">
                <h1 class="text-[#ffffff] font-bold text-[12px]">BACK TO TOP</h1>
            </div>
            <div>
                <img src="/images/facebook.svg" alt="logo" width="30px" height="30px"
                    class="relative inline-block pl-4 mx-auto mb-4 pt-4">
                <img src="/images/linkedin.svg" alt="logo" width="30px" height="30px"
                    class="relative inline-block pl-4 mx-auto mb-4 pt-4">
                <img src="/images/instagram.svg" alt="logo" width="30px" height="30px"
                    class="relative inline-block  pl-4 mx-auto mb-4 pt-4">
                <img src="/images/gmail.svg" alt="logo" width="30px" height="30px"
                    class="relative inline-block  pl-4 mx-auto mb-4 pt-4">
            </div>
            <div class="text-[#ffffff]">
                @2020 Tomasz Gajda All Rights Reserved.
            </div>


        </div>
    </div>
</template>