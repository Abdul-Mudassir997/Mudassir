const homeTab=document .querySelector('.homeTab')
homeTab.addEventListener('click',function (e){
  e.preventDefault()
  
  this.classList.toggle('visited_tab',true)
  aboutTab.classList.toggle('visited_tab',false)
  skillsTab.classList.toggle('visited_tab',false)
  projectsTab.classList.toggle('visited_tab',false)
  const page=document.createElement('iframe')
  page.id='page'
  page.src='/pages/homePage/home.html'
  
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})

const aboutTab=document.querySelector('.aboutTab')
aboutTab.addEventListener('click',function (e){
  e.preventDefault()
  this.classList.toggle('visited_tab',true)
  homeTab.classList.toggle('visited_tab',false)
  skillsTab.classList.toggle('visited_tab',false)
  projectsTab.classList.toggle('visited_tab',false)
  const page=document.createElement('iframe')
  page.id='page'
  page.src='/pages/aboutPage/about.html'
  
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})

const skillsTab=document.querySelector('.skillsTab')
skillsTab.addEventListener('click',function (e){
  e.preventDefault()
  this.classList.toggle('visited_tab',true)
  homeTab.classList.toggle('visited_tab',false)
  aboutTab.classList.toggle('visited_tab',false)
  projectsTab.classList.toggle('visited_tab',false)
  const page=document.createElement('iframe')
  page.id='page'
  page.src='/pages/skillsPage/skills.html'
  
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})

const projectsTab=document.querySelector('.projectsTab')
projectsTab.addEventListener('click',function (e){
  e.preventDefault()
  this.classList.toggle('visited_tab',true)
  homeTab.classList.toggle('visited_tab',false)
  skillsTab.classList.toggle('visited_tab',false)
  aboutTab.classList.toggle('visited_tab',false)
  const page=document.createElement('iframe')
  page.id='page'
  page.src='/pages/aboutPage/about.html'
  
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})