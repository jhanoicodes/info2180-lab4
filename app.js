document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById('searchButton');

    search.addEventListener('click', () => {
        fetch(`superheroes.php`)
            .then(response => {
                if (!response.ok){
                    throw new Error('There has been no response');
                }
                return response.text();
            })
            .then (data => {
                alert(`Superheroes: ${data}`);
            })
            .catch(error => {
                console.error('An error has occurred:', error);
                alert('No List Found.');
            });
    });
});
