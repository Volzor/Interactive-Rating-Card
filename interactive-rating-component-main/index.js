// variables
const endCard = document.getElementById('end-card');
const initialCard = document.getElementById('initial-card');
const submitBtn = document.getElementById('submit-btn');
const returnBtn = document.getElementById('return-btn')

// function to display thank you
const nextContent = () => {
    initialCard.style.display = 'none';
    endCard.style.display = 'inline';
};

// function to return to ratings
const returnContent = () => {
    initialCard.style.display = 'inline';
    endCard.style.display = 'none';
}


// event listeners
submitBtn.addEventListener('click', nextContent);
returnBtn.addEventListener('click', returnContent);