// Select all eye elements and their pupils
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (event) => {
  eyes.forEach((eye) => {
    const pupil = eye.querySelector('.pupil');

    const maxPupilMovement = 12; // Reduced range to keep pupils inside the eye
    const movementSpeed = 0.1; // Adjust to slow down the tracking speed

    // Get the cursor's position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the eye's center position
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate the angle and distance from the eye center to the cursor
    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);

    // Calculate the pupil's movement with capped distance and slower speed
    const distance = Math.min(maxPupilMovement, Math.hypot(deltaX, deltaY) * movementSpeed);
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    // Move the pupil
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
