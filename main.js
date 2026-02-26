const homeTab = document.querySelector('.homeTab')
const aboutTab=document.querySelector('.aboutTab')
const skillsTab=document.querySelector('.skillsTab')
const projectsTab=document.querySelector('.projectsTab')

function loadHome(tab) {
tab.classList.toggle('visited_tab', true)
  aboutTab.classList.toggle('visited_tab', false)
  skillsTab.classList.toggle('visited_tab', false)
  projectsTab.classList.toggle('visited_tab', false)
  const page = document.createElement('section')
  page.classList = 'page homePage'
  
  const introbox = document.createElement('div')
  introbox.classList='introbox'
  const introHeading = document.createElement('h2')
  introHeading.innerHTML = 'Building Today. Engineering Tomorrow.'
  introHeading.classList='introHeading'
  const intro = document.createElement('p')
  intro.classList = 'intro'
  intro.innerHTML = 'I’m Mudassir, a motivated developer seeking an internship where I can apply my technical skills, learn from experienced engineers, and contribute meaningfully to real projects.'
  const pages = document.querySelector('.pages')
  introbox.appendChild(introHeading)
  introbox.appendChild(intro)
  page.appendChild(introbox)
  pages.replaceChildren()
  pages.appendChild(page)
  
  const btns=document.createElement('div')
  btns.classList.add('btns')

  const projectBtn=document.createElement('button')
  projectBtn.classList.add('calltoaction')
  projectBtn.innerHTML='<span class="material-symbols-outlined icons">folder_eye</span>View Projects'
  
  const contactBtn=document.createElement('button')
  contactBtn.classList.add('calltoaction')
  contactBtn.innerHTML='<span class="material-symbols-outlined icons">Contact_page</span>Contact Me'
  
  const downloadResume=document.createElement('button')
  downloadResume.classList.add('calltoaction')
  downloadResume.innerHTML='<span class="material-symbols-outlined icons ">Download</span>Download Resume'
  
  btns.appendChild(projectBtn)
  btns.appendChild(contactBtn)
  btns.appendChild(downloadResume)
  page.appendChild(btns)
}
loadHome(homeTab)

const theme = document.querySelector('.theme_btn').addEventListener('click', function (e) {
  if (e.target.textContent=='dark_mode') {
    e.target.textContent='light_mode'
    
    document.documentElement.style.setProperty('--secondary_bg_color','#1e1e2f')
    document.documentElement.style.setProperty('--secondary_color','#FFFFFF')
  }
  else {
    e.target.textContent='dark_mode'
    document.documentElement.style.setProperty('--secondary_bg_color','#C9CBFF')

    document.documentElement.style.setProperty('--secondary_color','#000000')
  }
})