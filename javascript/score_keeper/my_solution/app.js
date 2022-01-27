const txtScoreP1 = document.querySelector("#scoreP1");
const txtScoreP2 = document.querySelector("#scoreP2");
const pto = document.querySelector("#pto");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

let scoreP1 = 0;
let scoreP2 = 0;

pto.addEventListener("change", function () {
    resetScore();
})

p1.addEventListener("click", function () {
    if (scoreP1 < pto.value && scoreP2 < pto.value) {
        scoreP1++;
        updateScore();
    }
});

p2.addEventListener("click", function () {
    if (scoreP1 < pto.value && scoreP2 < pto.value) {
        scoreP2++;
        updateScore();
    }
});

reset.addEventListener("click", function () {
    resetScore();
});

function resetScore() {
    scoreP1 = 0;
    scoreP2 = 0;
    txtScoreP1.style.color = "black";
    txtScoreP2.style.color = "black";
    updateScore();

    alert('Score Reset!', 'danger')
}

function updateScore() {
    if (scoreP1 == pto.value) {
        txtScoreP1.style.color = "#28a745";
        alert('Congratulations Player One! You Win!', 'success')
    }
    if (scoreP2 == pto.value) {
        txtScoreP2.style.color = "#0d6efd";
        alert('Congratulations Player Two! You Win!', 'primary')
    }
    txtScoreP1.textContent = `${scoreP1}`;
    txtScoreP2.textContent = `${scoreP2}`;
}

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alertPlaceholder.append(wrapper)
}
