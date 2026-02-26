
aboutTab.addEventListener('click',function (){
  this.classList.toggle('visited_tab',true)
  homeTab.classList.toggle('visited_tab',false)
  skillsTab.classList.toggle('visited_tab',false)
  projectsTab.classList.toggle('visited_tab',false)
  const page=document.createElement('section')
  page.classList='page'
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})