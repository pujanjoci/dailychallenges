// Function to toggle completion of a challenge
function toggleCompletion(index) {
    const challenge = document.getElementById(`challenge-${index}`);
    if (challenge.classList.contains("completed")) {
        // If challenge is already completed, remove completion
        challenge.classList.remove("completed");
    } else {
        // If challenge is not completed, mark as completed
        challenge.classList.add("completed");
        // Show completed message
        document.getElementById("completed-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("completed-message").style.display = "none";
        }, 3000); // 3 seconds
    }
}

// Function to reset all challenges
function resetChallenges() {
    const challenges = document.querySelectorAll('.challenge');
    challenges.forEach(challenge => {
        challenge.classList.remove("completed");
    });
}
let allChallengesCompleted = false; // Flag to track if all challenges are completed
let resetTimeout; // Timeout for resetting challenges after 12 hours

// Function to toggle completion of a challenge
function toggleCompletion(index) {
    const challenge = document.getElementById(`challenge-${index}`);
    if (challenge.classList.contains("completed")) {
        // If challenge is already completed, remove completion
        challenge.classList.remove("completed");
    } else {
        // If challenge is not completed, mark as completed
        challenge.classList.add("completed");
        // Check if all challenges are completed
        checkAllChallengesCompleted();
        // Start reset timeout if any single challenge is completed
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(resetChallenges, 12 * 60 * 60 * 1000); // Reset after 12 hours
    }
}

// Function to check if all challenges are completed
function checkAllChallengesCompleted() {
    const challenges = document.querySelectorAll('.challenge');
    allChallengesCompleted = true;
    challenges.forEach(challenge => {
        if (!challenge.classList.contains("completed")) {
            allChallengesCompleted = false;
            return;
        }
    });
    if (allChallengesCompleted) {
        document.getElementById("completed-message").style.display = "block";
    }
}

// Function to reset all challenges// Function to reset all challenges
function resetChallenges() {
    const challenges = document.querySelectorAll('.challenge');
    challenges.forEach(challenge => {
        challenge.classList.remove("completed");
    });
    document.getElementById("completed-message").style.display = "none";
}
