window.addEventListener('DOMContentLoaded', () => {
    function countdown(daysUntilEvent) {
        const now = new Date();
        const endDate = new Date(now.getTime() + daysUntilEvent * 24 * 60 * 60 * 1000);

        const timer = setInterval(function () {
            const now = new Date().getTime();
            const distance = endDate.getTime() - now;

            document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById('countdown').innerHTML = "Событие началось!";
            }
        }, 1000);
    }

    countdown(12);
});
