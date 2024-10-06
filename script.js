document.addEventListener('DOMContentLoaded', function () {
    const cardNumberInput = document.querySelector('.card-number input');
    cardNumberInput.addEventListener('input', function () {
        let formattedNumber = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = formattedNumber.substring(0, 19);
    });
});
