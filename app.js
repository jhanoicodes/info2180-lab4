document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById('searchButton');
    const divResult = document.getElementById('result');
    const searchInput = document.getElementById('searchInput');

    search.addEventListener('click', () => {
        let query = searchInput.value.trim();

        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok){
                    throw new Error('There has been no response');
                }
                return response.text();
            })
            .then (data => {
                divResult.innerHTML = '';

                if(!data){
                    divResult.innerHTML = 'Superhero not found.';
                }else{
                    const sups = data.split('\n');

                    sups.forEach(element => {
                        const divSuper = document.createElement('div');
                        divSuper.classList.add('element');
                        divSuper.innerHTML = element.trim();
                        divResult.appendChild(divSuper);
                    });
                }
            })
            .catch(error => {
                console.error('An error has occurred:', error);
                divResult.innerHTML = 'There is no list found.';
            });
    });
});
