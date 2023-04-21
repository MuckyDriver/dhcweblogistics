// Function which searches for the keyword relating to chosen category
const projectItems = document.getElementsByClassName('project-item')

function applyChanges(category) {
    for (let i = 0; i < projectItems.length; i++) {
        const projectItem = projectItems[i];
        let relatedCategories = projectItem.getAttribute('data-category').split(" ")

        if (relatedCategories.includes(category)) {
            projectItem.style.display = 'grid';
        } else {
            projectItem.style.display = 'none';
        }
    }
}

// Getting globals needed for filter script
const filterSelect = document.getElementById('filter')

filterSelect.addEventListener('change', (event) => {
    let categorySelected = event.target.value;
    applyChanges(categorySelected)
})