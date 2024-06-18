setInterval(currentDate,1000);
function currentDate(){
    const t = new Date();
    document.getElementById('time1').innerHTML = t.toLocaleString();
}

function toSubmit() {
    let isValid = true;
    let errorMessage = "Please fill out the following fields:\n";

    // Animal
    let selectedAnimal = document.querySelector('input[name="animal"]:checked');
    if (!selectedAnimal) {
        isValid = false;
        errorMessage += "- Select animal\n";
    }

    // Gender
    if (!document.querySelector('input[name="gender"]:checked')) {
        isValid = false;
        errorMessage += "- Select gender\n";
    }

    // Dog's Breed
    let breed = '';
    if (selectedAnimal && selectedAnimal.value === 'dog') {
        breed = document.querySelector('select[name="breedDog"]');
    } else if (selectedAnimal && selectedAnimal.value === 'cat') {
        breed = document.querySelector('select[name="breedCat"]');
    }

    if (breed && breed.value === "") {
        isValid = false;
        errorMessage += "- Select " + selectedAnimal.value + "'s breed\n";
    }

    // Age
    let age = document.querySelector('select[name="age"]');
    if (age && age.value === "") {
        isValid = false;
        errorMessage += "- Select age\n";
    }

    // Get along
    let getAlongDogs = document.querySelector('input[name="type_ along[]"][value="dogs"]');
    let getAlongCats = document.querySelector('input[name="type_along[]"][value="cats"]');
    let getAlongChildren = document.querySelector('input[name="type_along[]"][value="child"]');
    if (getAlongDogs && getAlongCats && getAlongChildren &&
        (!getAlongDogs.checked && !getAlongCats.checked && !getAlongChildren.checked)) {
        isValid = false;
        errorMessage += "- Select at least one option for 'Get along with'\n";
    }

    //information text
    // Check if 'more', 'email', and 'first' elements exist before accessing their value
    let moreAboutElement = document.getElementById('more');
    let emailElement = document.getElementById('email');
    let firstElement = document.getElementById('first');

    let moreAbout = moreAboutElement ? moreAboutElement.value : '';
    let email = emailElement ? emailElement.value : '';
    let first = firstElement ? firstElement.value : '';

    // Validate 'more', 'email', and 'first' elements only if they exist
    if (moreAboutElement && emailElement && firstElement) {
        if (moreAbout.match(/^\d/g) == null || moreAbout.match(/^\d/g) == "") {
            isValid = false;
            errorMessage += "- Enter information about the animal'\n";
        }

        if (email.match(/^\d/g) == null || email.match(/^\d/g) == "") {
            isValid = false;
            errorMessage += "- Enter your email '\n";
        }

        if (first.match(/^\d/g) == null || first.match(/^\d/g) == "") {
            isValid = false;
            errorMessage += "- Enter your full name '\n";
        }
    }

    if (!isValid) {
        alert(errorMessage);
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function toClear() {
    document.querySelectorAll('#search form').forEach(form => form.reset());
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.querySelector('input[name="animal"]:checked').checked = false;
}

function toggleBreed(animal) {
    if (animal === 'cat') {
        document.getElementById('breedCat').style.display = 'block';
        document.getElementById('breedDog').style.display = 'none';
    } else if (animal === 'dog') {
        document.getElementById('breedDog').style.display = 'block';
        document.getElementById('breedCat').style.display = 'none';
    }
}

function clearInput(elementId) {
    document.getElementById(elementId).value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.querySelectorAll('.input-container input[type="text"]');

    inputFields.forEach(inputField => {
        const inputContainer = inputField.parentElement;

        inputField.addEventListener('focus', () => {
            inputContainer.classList.add('focused');
        });

        inputField.addEventListener('blur', () => {
            if (!inputField.value) {
                inputContainer.classList.remove('focused');
            }
        });
    });
});
