document.addEventListener('DOMContentLoaded', (event) => {
    const characters = document.querySelectorAll('.character');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const charInfo = document.querySelector('.character-info');

    function showModal(character) {
        const characterDiv = document.querySelector(`div[data-character=${character}]`);
        if (!characterDiv) return;

        const imageHtml = characterDiv.querySelector('img').outerHTML;
        const nameHtml = characterDiv.querySelector('h3').outerHTML;
        const descriptionHtml = characterDiv.querySelector('.character-description').innerHTML;

        charInfo.innerHTML = `<div style="text-align: center;">${imageHtml}${descriptionHtml}</div>`; //{nameHtml}

        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    characters.forEach(character => {
        character.addEventListener('click', (event) => {
            const charName = character.getAttribute('data-character');
            showModal(charName);
        });
    });

    closeBtn.addEventListener('click', hideModal);

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            hideModal();
        }
    });
});