const itemsEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, itemsEl.length);

itemsEl.forEach(function (item)  
{
    console.log(`Category:`, item.children[0].textContent,`Elements:`, item.children[1].children.length);
});
