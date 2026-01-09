document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const display = document.getElementById('display');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const lapBtn = document.getElementById('lapBtn');
    const resetBtn = document.getElementById('resetBtn');
    const lapsList = document.getElementById('lapsList');

    // --- State ---
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let laps = [];

    // --- Format Time Function ---
    // Converts milliseconds to HH:MM:SS:MS
    function formatTime(ms) {
        // Calculate parts
        let hours = Math.floor(ms / 3600000);
        let minutes = Math.floor((ms % 3600000) / 60000);
        let seconds = Math.floor((ms % 60000) / 1000);
        let milliseconds = Math.floor((ms % 1000) / 10); // Display 2 digits (0-99)

        // Pad with zeros
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        milliseconds = milliseconds.toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    // --- Control Functions ---

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 10); // Update every 10ms

        // Update Button States
        toggleButtons(true);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        toggleButtons(false);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        startTime = 0;
        laps = [];
        
        display.textContent = "00:00:00:00";
        lapsList.innerHTML = '';
        
        // Reset Buttons
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        lapBtn.disabled = true;
        resetBtn.disabled = true;
    }

    function recordLap() {
        if (!timerInterval) return; // Only lap if running

        const currentLapTime = elapsedTime;
        laps.push(currentLapTime);
        
        const li = document.createElement('li');
        li.classList.add('lap-item');
        
        const lapNum = document.createElement('span');
        lapNum.classList.add('lap-number');
        lapNum.textContent = `Lap ${laps.length}`;
        
        const lapVal = document.createElement('span');
        lapVal.classList.add('lap-time');
        lapVal.textContent = formatTime(currentLapTime);
        
        li.appendChild(lapNum);
        li.appendChild(lapVal);
        
        // Add to top of list
        lapsList.prepend(li);
    }

    function toggleButtons(isRunning) {
        startBtn.disabled = isRunning;
        pauseBtn.disabled = !isRunning;
        lapBtn.disabled = !isRunning;
        resetBtn.disabled = isRunning; // Can reset only when paused? Usually yes, or always enabled if not 0.
        // Logic refinement: Reset should be enabled if paused and time > 0.
        // But for simplicity/common UI: Reset active when paused.
        
        if (isRunning) {
            startBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-block';
        } else {
            startBtn.style.display = 'inline-block';
            pauseBtn.style.display = 'none';
            // Start button should say "Resume" if not 0? 
            // User requested "Start", "Pause". Standard behavior:
            startBtn.textContent = elapsedTime > 0 ? "Resume" : "Start";
        }
    }

    // --- Event Listeners ---
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    lapBtn.addEventListener('click', recordLap);

    // Initial State Fix
    pauseBtn.style.display = 'none'; // Initially hide pause, show start
});
