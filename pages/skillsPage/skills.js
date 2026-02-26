
skillsTab.addEventListener('click',function (e){
  e.preventDefault()
  this.classList.toggle('visited_tab', true)
aboutTab.classList.toggle('visited_tab', false)
homeTab.classList.toggle('visited_tab', false)
projectsTab.classList.toggle('visited_tab', false)
  const page=document.createElement('section')
  page.classList='page'
  const pages=document.querySelector('.pages')
  pages.replaceChildren()
  pages.appendChild(page)
})