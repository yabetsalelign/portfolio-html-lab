// 1. Personal logo drawing
const canvas = document.getElementById('logo');
if (canvas) {
    const ctx = canvas.getContext('2d');
    // Blue square background: x, y, width, height
    ctx.fillStyle = "#1f5fa8";
    ctx.fillRect(0, 0, 120, 120);

    // White circle: centre x, centre y, radius, start angle, end angle
    ctx.beginPath();
    ctx.arc(60, 60, 45, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    // Initials in the middle
    ctx.fillStyle = "#1f5fa8";
    ctx.font = "bold 36px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("YA", 60, 62);
}

// 2. Bar chart of skills (Lab 14 Your turn)
const chart = document.getElementById('skillsChart');
if (chart) {
    const chartCtx = chart.getContext('2d');
    const skillsData = [
        { name: 'HTML/CSS', val: 0.9 },
        { name: 'React', val: 0.85 },
        { name: 'TS/JS', val: 0.85 },
        { name: 'Tailwind', val: 0.8 }
    ];
    const maxBarHeight = 90;
    const baselineY = 120;
    const barWidth = 45;
    const startX = 25;
    const gap = 65;

    chartCtx.font = "14px Arial";
    chartCtx.textAlign = "center";

    skillsData.forEach((skill, index) => {
        const x = startX + index * gap;
        const height = skill.val * maxBarHeight;
        const y = baselineY - height;

        chartCtx.fillStyle = "#1f5fa8";
        chartCtx.fillRect(x, y, barWidth, height);

        chartCtx.fillStyle = "#333333";
        chartCtx.fillText(skill.name, x + barWidth / 2, baselineY + 18);
    });
}
