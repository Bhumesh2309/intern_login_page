document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('auth-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    // Container for all intern cards
    const internsGrid = document.getElementById('interns-grid');

    // --- Simulate Backend Data: An Array of Interns ---
    const allInternsData = [
        {
            id: "rohan", // Unique ID for internal use
            internName: "Rohan Singh",
            referralCode: "ROHANS2025",
            totalDonations: 78500, // Example: in INR
            rewards: [
                "Bronze Contributor Badge",
                "Early Access to Webinar Series"
            ]
        },
        {
            id: "bhumesh",
            internName: "Bhumesh Dhatterwal",
            referralCode: "BHUMESH2025",
            totalDonations: 100000,
            rewards: [
                "Gold Contributor Badge",
                "Exclusive Merch Discount (30%)",
                "Digital Certificate of Achievement"
            ]
        },
        {
            id: "dev",
            internName: "Dev Jangra",
            referralCode: "DEVJ2025",
            totalDonations: 45000,
            rewards: [
                "Participation Certificate",
                "Networking Event Invitation"
            ]
        },
        {
            id: "himanshu",
            internName: "Himanshu Soni",
            referralCode: "HIMANSHUS2025",
            totalDonations: 92000,
            rewards: [
                "Silver Contributor Badge",
                "Featured on Social Media",
                "Exclusive Swag Pack"
            ]
        }
    ];

    // --- Functions ---

    function showDashboard() {
        authSection.classList.remove('active');
        authSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        dashboardSection.classList.add('active');
        populateAllInternsDashboard(); // Call the new function
    }

    function showAuth() {
        dashboardSection.classList.remove('active');
        dashboardSection.classList.add('hidden');
        authSection.classList.remove('hidden');
        authSection.classList.add('active');
        loginForm.reset();
    }

    function createInternCard(intern) {
        const card = document.createElement('div');
        card.classList.add('intern-card');

        const internName = document.createElement('h2');
        internName.textContent = intern.internName;

        const referralCode = document.createElement('p');
        referralCode.innerHTML = `<strong>Referral Code:</strong> ${intern.referralCode}`;

        const donations = document.createElement('p');
        donations.classList.add('donation-amount');
        donations.textContent = `₹${intern.totalDonations.toLocaleString('en-IN')}`;

        const rewardsHeader = document.createElement('h3');
        rewardsHeader.textContent = 'Rewards';

        const rewardsList = document.createElement('ul');
        rewardsList.classList.add('rewards-list');
        if (intern.rewards && intern.rewards.length > 0) {
            intern.rewards.forEach(reward => {
                const li = document.createElement('li');
                li.textContent = reward;
                rewardsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No rewards unlocked yet.';
            rewardsList.appendChild(li);
        }

        card.appendChild(internName);
        card.appendChild(referralCode);
        card.appendChild(donations);
        card.appendChild(rewardsHeader);
        card.appendChild(rewardsList);

        return card;
    }

    function populateAllInternsDashboard() {
        internsGrid.innerHTML = ''; // Clear existing content

        if (allInternsData.length === 0) {
            internsGrid.innerHTML = '<p>No intern data available.</p>';
            return;
        }

        allInternsData.forEach(intern => {
            const card = createInternCard(intern);
            internsGrid.appendChild(card);
        });
    }

    // --- Event Listeners ---

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission
        // No authentication, just proceed to show all interns
        showDashboard();
    });

    logoutButton.addEventListener('click', () => {
        showAuth();
    });

    // Initial state: show authentication section
    showAuth();
});