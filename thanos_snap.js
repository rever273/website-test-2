disintegrate.init()

document.getElementById('contact-form').addEventListener('submit', e => {

    e.preventDefault(); // Предотвратить стандартное поведение отправки формы

    const imageId = 'bg_thor_img'; // Замените на реальный id вашего изображения
    const img = document.getElementById(imageId);

    const disObj = disintegrate.getDisObj(img);
    disintegrate.createSimultaneousParticles(disObj);
    img.style.opacity = '0'; // Изображение становится полностью прозрачным

    e.target.reset(); // Очищаем данные формы

});

const thanosSnap = function () {
    this.name = 'ThanosSnap'
    this.animationDuration = 5000
    this.size = 3
    this.speedX = Math.random()
    this.speedY = Math.random() * -1
    this.first = true
    this.draw = (ctx, percentComplete) => {
        if (this.first) {
            this.startX += (Math.random() - 0.5) * 10
            this.startY += (Math.random() - 0.5) * 10
            this.first = false
        }
        ctx.beginPath()
        ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
        const r = this.rgbArray[0]
        const g = this.rgbArray[1]
        const b = this.rgbArray[2]
        const a = 1 - percentComplete
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        ctx.fill()
        this.speedX *= 1.07
        this.speedY *= 1.07
        this.size *= 0.95
        this.startX += this.speedX
        this.startY += this.speedY
    }
}

disintegrate.addParticleType(thanosSnap)