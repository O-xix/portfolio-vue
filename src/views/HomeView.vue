
<script setup>
import { ref,onMounted } from 'vue';
import AboutView from '../views/AboutView.vue';
import SkillsPage from '../views/SkillPage.vue';
import PortfolioView from './PortfolioView.vue';
import ContactView from './ContactView.vue';

const imagePath = '/images/image17.png';
const htmlImage = '/images/Group12.png';
const cssImage = '/images/css.png';
const sassImage = '/images/sass.png';
const jsImage = '/images/js.png';
const reactImage = '/images/react.png';
const bootstrapImage = '/images/bootstrap.png';
const gitImage = '/images/git.png';
const figmaImage = '/images/figma.png';

// Define refs for the sections you want to scroll to
const about = ref(null);
const skills = ref(null);
const contact = ref(null);
const portfolio = ref(null);
const tokenvalue = ref(''); 

function scrollToSection(sectionRef) {
  // console.log('sectionRef.value',sectionRef);
 
  
  // Use the ref to scroll to the appropriate section
  sectionRef.scrollIntoView({ behavior: 'smooth' });
}
function logout() {
  localStorage.removeItem('token');
  router.push('/'); // Redirect to the homepage after logout
}

onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    tokenvalue.value= token;

    console.log('Token found:', token);
    // Perform any action, e.g., navigate to a specific page or set user state
  } else {
    console.log('No token found');
    // You can perform an alternative action here, like showing a login prompt
  }
});
</script>
<template>
 <nav class="text-white">
    <div class="fixed top-0 left-0 p-4 bg-black w-full h-16 grid grid-cols-8 gap-3 place-content-center z-10">
        <div class="nav-item font-bold py-4">
            <button @click="scrollToSection(about)">ABOUT ME</button>
        </div>
        <div class="nav-item font-bold py-4">
            <button @click="scrollToSection(skills)">SKILLS</button>
        </div>
        <div class="nav-item font-bold py-4">
            <button @click="scrollToSection(portfolio)">PORTFOLIO</button>
        </div>
        <div class="nav-item font-bold pt-4">
            <button class="border-[2px] w-[50px] py-1 text-center bg-white text-black contact-me" 
                    @click="scrollToSection(contact)">
                CONTACT ME
            </button>
        </div>

        <!-- Empty columns to push login/logout button to the rightmost grid -->
        <div class="col-span-3"></div>

        <!-- Login/Logout Button -->
        <div class="nav-item font-bold py-4 text-right">
            <button v-if="tokenvalue" @click="logout" class="border-[2px] px-4 py-1 text-center rounded-lg text-white bg-red-500">
                Logout
            </button>
            <RouterLink :to="{name:'Login'}" v-else @click="logout" class="border-[2px] px-4 py-1 text-center rounded-lg text-white">
                Login
            </RouterLink>
        </div>
    </div>
</nav>

  <div class="main-content" >
    <div class="content-body ">
      <div class="body-left bg-white">
        <img src="/images/logo1.svg" alt="logo" width="50" height="50" class="relative pt-4 pl-4 left-logo">

        <div class="flex justify-end place-content-center text-right bg-red my-[20%] px-8">
  <div class="text-black">
    <h2 class="font-bold text-left text-2xl ">Hi, I am</h2>
    <h1 class="font-bold text-6xl">Tomasz Gajda</h1>
    <div class=" text-left text-[#909090]">
      <h1 class="font-bold text-2xl inline px-2">CSS</h1>
    <h1 class="font-bold text-2xl inline px-2">HTML</h1>
    <h1 class="font-bold text-2xl inline  px-2">PHP</h1>
    </div>
  </div>
</div>

      </div>
      <div class="body-right">

        <!-- <div class="nav-items mt-4">
          <button  @click="scrollToSection(about)">About Me</button>
          <RouterLink :to="{name:'skills'}">Skills</RouterLink>
          <RouterLink>Portfolio</RouterLink>
          <RouterLink class=" contact-me border-[2px] w-[50px] py-1 text-center bg-white">Contact me</RouterLink>
        </div> -->
        <img :src="imagePath" alt="My Image" class="profile-image" >
      </div>
    </div>
    <div class="footer">
      <div class="footer-content my-4">
        <h1 class="text-xl">IT BERRIES</h1>
        <p class=" text-[#ffffff] justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque dolorem omnis! Perspiciatis,
          necessitatibus?
          Sint deleniti et veniam, voluptatibus corrupti repudiandae aliquam similique, veritatis eius quidem modi illum
          quia maxime.
          Deserunt, ab. Eius sit rem repudiandae natus enim mollitia quia quibusdam sapiente ratione nulla aut sint
          molestiae, nemo debitis?
          Illo, labore neque? Placeat similique doloribus quod aperiam? Cupiditate, nobis commodi.
        </p>
        <div class="w-32 border-r-4 border-l-4 border-[#000000] text-center my-2">
          Read more
        </div>
      </div>
    </div>
  </div>
  <div ref="about" >

    <AboutView />

  </div>
  <div ref="skills">
    <SkillsPage />
  </div>
 
  <div ref="portfolio">
    <PortfolioView />
  </div>
  <div ref="contact" >
    <ContactView />
  </div>
</template>

<style scoped>
a {
  color: white;
  /* border: 2px white solid; */
  width: 4vw;
 font-weight: 800;
}

body {
  background-color: black;
}

.content-left {
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  display: block;
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}


.content-body {
  height: 78vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  grid-template-columns: 1fr 1fr;
}

.footer {
  height: 22vh;
  background-color: rgb(36, 35, 41);
  outline-offset: -10px;
  color: rgb(255, 255, 255);
}

/* .navbar-items {
  display: flex;
  top: 10px;
  position: sticky;
} */

.body-left {
  background-color: #D7D7D7;
  width: 50vw;
  align-items: center;
  justify-content: center;
  justify-items: center;

}

.body-right {
  
  width: 50vw;

}

.footer-content {
  padding-left: 50px;
  padding-right: 150px;
  padding-top: 1vw;
}

.footer-heading {
  font-size: 20px;
}

.footer-button {
  margin-top: 5px;
  height: 50px;
  width: 100px;
  border-left: 2px;
  border-right: 2px;
  border-color: black;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;

}

.profile-image {
 
 
  /* margin-top: 50%; */
  max-height: 95%;
  max-width: 90%;
  object-fit: cover;
  margin-top: auto;
  position: relative;
  bottom: -37px;
}

.nav-items {
  padding-left: 50px;
  display: flex;
  padding-left: 4vw;
  justify-content: space-around;
  padding: 0px;
  width: 100%;
 
}
.contact-me{
  border-radius: 25px;
  width: 100px;
  height: 2rem;
  color: black;
}
.left-logo{
  position: relative;
  top: 4rem;
  left: 16rem;
}
</style>