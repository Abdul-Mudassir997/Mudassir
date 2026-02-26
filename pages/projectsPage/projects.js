projectsTab.addEventListener('click',function (e){
  e.preventDefault()
  this.classList.toggle('visited_tab',true)
  homeTab.classList.toggle('visited_tab',false)
  skillsTab.classList.toggle('visited_tab',false)
  aboutTab.classList.toggle('visited_tab',false)
  const page=document.createElement('section')
  page.classList='page'
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})