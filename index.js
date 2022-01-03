const endTime = new Date(2023, 0, 1)

const calcRemainingTime = endtime => {
	const t = +endtime - Date.now()
	const days = Math.floor(t / 1000 / 60 / 60 / 24)
	const hours = Math.floor((t / 1000 / 60 / 60) % 24)
	const minutes = Math.floor((t / 1000 / 60) % 60)
	const seconds = Math.floor((t / 1000) % 60)
	return {
		days,
		hours,
		minutes,
		seconds
	}
}

function getZero(num) {
	if (num < 10) {
		return `0${num}`
	} else {
		return num
	}
}

function setTimer(endtime) {
	const days = document.querySelector('.clock-days')
	const hours = document.querySelector('.clock-hours')
	const minutes = document.querySelector('.clock-minutes')
	const seconds = document.querySelector('.clock-seconds')
	const timeInterval = setInterval(updateTimer, 1000);

	updateTimer()

	function updateTimer() {
		const t = calcRemainingTime(endtime)

		days.textContent = getZero(t.days)
		hours.textContent = getZero(t.hours)
		minutes.textContent = getZero(t.minutes)
		seconds.textContent = getZero(t.seconds)

		if (t.total <= 0) {
			clearInterval(timeInterval)
		}
	}
}

setTimer(endTime)

