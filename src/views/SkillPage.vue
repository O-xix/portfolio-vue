<script setup>
const htmlImage = '/images/Group12.png';
const cssImage = '/images/css.png';
const sassImage = '/images/sass.png';
const jsImage = '/images/js.png';
const reactImage = '/images/react.png';
const bootstrapImage = '/images/bootstrap.png';
const gitImage = '/images/git.png';
const figmaImage = '/images/figma.png';
</script>
<template>
  <div class="pt-16">
    <div class="border-[6px] h-[74px] w-[404px] mx-auto border-black font-bold text-center mt-4 text-3xl py-3">
      SKILLS
    </div>


    <div class="mt-10 w-full">
      <div class="flex font-bold text-center text-xl ml-64 underline">
        USING NOW:
      </div>
      <div class="mx-64 grid grid-cols-4 gap-3 mt-8">
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="htmlImage" alt="html" class="h-16 w-16">
          <div class="flex inline-block mt-4"><a href="https://www.w3schools.com/html/html_intro.asp"
              target="_blank">HTML5</a></div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="cssImage" alt="css" class="h-16 w-16">
          <div class="flex inline-block mt-4">CSS3</div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="sassImage" alt="sass" class="h-16 w-16">
          <div class="flex inline-block mt-4">SASS</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="jsImage" alt="javascript" class="h-16 w-16">
          <div class="flex inline-block mt-4">JAVASCRIPT</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="reactImage" alt="react" class="h-16 w-16">
          <div class="flex inline-block mt-4">REACT JS</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="bootstrapImage" alt="bootstrap" class="h-16 w-16">
          <div class="flex inline-block mt-4">BOOTSTRAP</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="gitImage" alt="git" class="h-16 w-16">
          <div class="flex inline-block mt-4">GIT</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="figmaImage" alt="figma" class="h-16 w-16">
          <div class="flex inline-block mt-4">FIGMA</div>
        </div>
      </div>
    </div>


    <div class="mt-10 w-full">
      <div class="flex font-bold text-center text-xl ml-64 underline">
        LEARNING:
      </div>
      <div class="mx-64 grid grid-cols-4 gap-3 mt-8">
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="htmlImage" alt="html" class="h-16 w-16">
          <div class="flex inline-block mt-4">HTML5</div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="cssImage" alt="css" class="h-16 w-16">
          <div class="flex inline-block mt-4">CSS3</div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="sassImage" alt="sass" class="h-16 w-16">
          <div class="flex inline-block mt-4">SASS</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="jsImage" alt="javascript" class="h-16 w-16">
          <div class="flex inline-block mt-4">JAVASCRIPT</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="reactImage" alt="react" class="h-16 w-16">
          <div class="flex inline-block mt-4">React JS</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="bootstrapImage" alt="bootstrap" class="h-16 w-16">
          <div class="flex inline-block mt-4">Bootstrap</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="gitImage" alt="git" class="h-16 w-16">
          <div class="flex inline-block mt-4">Git</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="figmaImage" alt="figma" class="h-16 w-16">
          <div class="flex inline-block mt-4">Figma</div>
        </div>
      </div>
    </div>

    <div class="mt-10 w-full">
      <div class="flex font-bold text-center text-xl ml-64 underline">
        OTHER SKILLS:
      </div>
      <div class="mx-64 grid grid-cols-4 gap-3 mt-8">
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="htmlImage" alt="html" class="h-16 w-16">
          <div class="flex inline-block mt-4"><a href="">HTML5</a></div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="cssImage" alt="css" class="h-16 w-16">
          <div class="flex inline-block mt-4">CSS3</div>
        </div>
        <div class="flex justify-center flex-col items-center  my-8">
          <img :src="sassImage" alt="sass" class="h-16 w-16">
          <div class="flex inline-block mt-4">SASS</div>
        </div>
        <div class="flex justify-center flex-col items-center my-8">
          <img :src="jsImage" alt="javascript" class="h-16 w-16">
          <div class="flex inline-block mt-4">JAVASCRIPT</div>
        </div>



      </div>
    </div>
  </div>

</template>