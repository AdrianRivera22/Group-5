document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-food-item-btn');
    const container = document.getElementById('food-items-container');
    let itemCounter = 1;

    const templateItem = container.querySelector('.food-item');
    if (!templateItem) {
        console.error("Initial food item block not found!");
        return;
    }

    addButton.addEventListener('click', function() {
        const newItem = templateItem.cloneNode(true);

        const heading = newItem.querySelector('h4');
        if (heading) {
            heading.textContent = `Food Item #${itemCounter + 1}`;
        }

        const labels = newItem.querySelectorAll('label');
        const inputs = newItem.querySelectorAll('input, textarea');

        labels.forEach(label => {
            const oldFor = label.getAttribute('for');
            if (oldFor) {
                label.setAttribute('for', oldFor.replace(/_\d+$/, `_${itemCounter}`));
            }
        });

        inputs.forEach(input => {
            const oldId = input.getAttribute('id');
            if (oldId) {
                input.setAttribute('id', oldId.replace(/_\d+$/, `_${itemCounter}`));
            }
            if (input.type !== 'file') {
                input.value = '';
            } else {
                 input.value = null;
            }
        });

        container.appendChild(newItem);

        itemCounter++;
    });
});