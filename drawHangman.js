export function drawBaseStructure(context) {
	context.beginPath();
	context.moveTo(10, 380);
	context.lineTo(190, 380);
	context.stroke();

	context.beginPath();
	context.moveTo(50, 380);
	context.lineTo(50, 50);
	context.stroke();

	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(150, 50);
	context.stroke();

	context.beginPath();
	context.moveTo(150, 50);
	context.lineTo(150, 100);
	context.stroke();
}

export function drawHangman(context, wrongGuessesCount) {
	switch (wrongGuessesCount) {
		case 1: // Draw the head
			context.beginPath();
			context.arc(150, 130, 30, 0, Math.PI * 2, true); // Circle for the head
			context.stroke();
			break;
		case 2: // Draw the body
			context.beginPath();
			context.moveTo(150, 160);
			context.lineTo(150, 250);
			context.stroke();
			break;
		case 3: // Draw the left arm
			context.beginPath();
			context.moveTo(150, 180);
			context.lineTo(120, 220);
			context.stroke();
			break;
		case 4: // Draw the right arm
			context.beginPath();
			context.moveTo(150, 180);
			context.lineTo(180, 220);
			context.stroke();
			break;
		case 5: // Draw the left leg
			context.beginPath();
			context.moveTo(150, 250);
			context.lineTo(120, 300);
			context.stroke();
			break;
		case 6: // Draw the right leg
			context.beginPath();
			context.moveTo(150, 250);
			context.lineTo(180, 300);
			context.stroke();
			break;
		default:
			break;
	}
}
