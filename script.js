const projects = [
	{
		name: 'nft-preview-card-component-main'
	},
	{
		name: 'qr-code-component-main'
	},
	{
		name: 'order-summary-component-main'
	},
	{
		name: 'stats-preview-card-component-main'
	},
	{
		name: '3-column-preview-card-component-main'
	}, 
	{
		name: 'profile-card-component-main'
	}, 
	{
		name: 'coding-bootcamp-testimonials-slider-main'
	}
]

projects.forEach(({ name, external, imageSrc, previewUrl, githubSrc }, i) => {
	const listItem = document.createElement('li')
	let imgLink
	let previewLink
	let githubLink
  
	if (external) {
	  imgLink = imageSrc
	  previewLink = previewUrl
	  githubLink = githubSrc
	} else {
	  imgLink = `${name}/design/desktop-design.jpg`
	  previewLink = `${name}/index.html`
	  githubLink = `https://github.com/lhorla/Frontend-mentor-projects/tree/main/${name}`
	}
  
	listItem.innerHTML = `
		<a href="${previewLink}" target="_blank" rel="noopener noreferrer">
		  <img src="${imgLink}" alt="${name}" />
		  <p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		
		<div class="links-container">
		  <a href="${previewLink}" class="blue" target="_blank" rel="noopener noreferrer">
			<i class="fas fa-eye"></i>
		  </a>
		  <a href="${githubLink}" class="blue" target="_blank" rel="noopener noreferrer">
			<i class="fas fa-code"></i>
		  </a>
		</div>`
	list.appendChild(listItem)
})
  
const emptyListItem = document.createElement('li')
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
  
function formatProjectName(name) {
	return name
	.split('-')
	.map((word) => word[0].toUpperCase() + word.slice(1))
	.join(' ')
}