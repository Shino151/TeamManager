const tm = document.getElementById("tm");
const home = document.getElementById("home");
const settings = document.getElementById("settings");
const tmh = document.getElementById("tmh");
const homeh = document.getElementById("homeh");
const settingsh = document.getElementById("settingsh");
const tmicon = document.getElementById("tmicon");
const homeicon = document.getElementById("homeicon");
const settingsicon = document.getElementById("settingsicon");
const homecontent = document.getElementById("homecontent")
const tmcontent = document.getElementById("tmcontent")
const settingscontent = document.getElementById("settingscontent")

function tmactive()
{
	tm.classList.add("active");
	home.classList.remove("active");
	settings.classList.remove("active");

	tmh.classList.remove("disabled");
	homeh.classList.add("disabled");
	settingsh.classList.add("disabled");

	settingsicon.classList.remove("bxs-cog")
	homeicon.classList.remove("bxs-home")
	tmicon.classList.remove("bx-user")
	tmicon.classList.add("bxs-user")
	homeicon.classList.add("bx-home")
	settingsicon.classList.add("bx-cog")
	
	tmcontent.classList.remove("disabled")
	homecontent.classList.add("disabled")
	settingscontent.classList.add("disabled")
}
function homeactive()
{
	tm.classList.remove("active");
	home.classList.add("active");
	settings.classList.remove("active");

	tmh.classList.add("disabled");
	homeh.classList.remove("disabled");
	settingsh.classList.add("disabled");
	
	settingsicon.classList.remove("bxs-cog")
	tmicon.classList.remove("bxs-user")
	homeicon.classList.remove("bx-home")
	homeicon.classList.add("bxs-home")
	tmicon.classList.add("bx-user")
	settingsicon.classList.add("bx-cog")

	tmcontent.classList.add("disabled")
	homecontent.classList.remove("disabled")
	settingscontent.classList.add("disabled")
}
function settingsactive()
{
	tm.classList.remove("active");
	home.classList.remove("active");
	settings.classList.add("active");

	tmh.classList.add("disabled");
	homeh.classList.add("disabled");
	settingsh.classList.remove("disabled");

	tmicon.classList.remove("bxs-user")
	homeicon.classList.remove("bxs-home")
	settingsicon.classList.remove("bx-cog")
	settingsicon.classList.add("bxs-cog")
	homeicon.classList.add("bx-home")
	tmicon.classList.add("bx-user")

	tmcontent.classList.add("disabled")
	homecontent.classList.add("disabled")
	settingscontent.classList.remove("disabled")
}

const playorpausebtn = document.getElementById("playorpausebtn")
const clock = document.getElementById("clock")

let time = 0;
let running = false;
const player = new Tone.Player("apito.mp3").toDestination();

function timerupdate()
{
    const sec = Math.floor(time % 60);
    const min = Math.floor((time / 60)) % 60;

    const fsec = sec.toString().padStart(2, '0');
    const fmin = min.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${fmin}:${fsec}`;
}

let interval;
let minutesCounter = 0;

function playorpause()
{
	if (!running) {
		playorpausebtn.classList.remove("bx-play")
		playorpausebtn.classList.add("bx-pause")
		clock.classList.add("running")
		clock.classList.remove("bx-alarm-exclamation")
		clock.classList.add("bx-alarm")
		running = true;
		interval = setInterval(function () {
			time++;
			timerupdate();
			minutesCounter++;

			if (minutesCounter === maxmatchtimecounter * 60) {
                   minutesCounter = 0;
                player.start();
               }
		}, 1000);
	}
	else {
		playorpausebtn.classList.add("bx-play")
		playorpausebtn.classList.remove("bx-pause")
		clock.classList.remove("running")
		clock.classList.add("bx-alarm-exclamation")
		clock.classList.remove("bx-alarm")
		running = false;
		clearInterval(interval);
	}
}
function stop()
{
	playorpausebtn.classList.add("bx-play")
	playorpausebtn.classList.remove("bx-pause")
	clock.classList.remove("running")
	clock.classList.add("bx-alarm-exclamation")
	clock.classList.remove("bx-alarm")
    clearInterval(interval);
    minutesCounter = 0;
    time = 0;
    running = false;
    timerupdate();
	player.stop();
}

let maxmatchtimecounter = 0;

function counterupdate(){
    document.getElementById('maxmatchtime').textContent = maxmatchtimecounter;
}

function plusmt(){
    maxmatchtimecounter++;
    counterupdate();
}

function minusmt(){
    if (maxmatchtimecounter > 0){
        maxmatchtimecounter--;
        counterupdate();
    }
}

function t1w()
{
	const t2 =
	[
		document.getElementById("t2n1").value,
		document.getElementById("t2n2").value,
		document.getElementById("t2n3").value,
		document.getElementById("t2n4").value,
		document.getElementById("t2n5").value,
	]

	const tp =
	[
		document.getElementById("tpn1").value,
		document.getElementById("tpn2").value,
		document.getElementById("tpn3").value,
		document.getElementById("tpn4").value,
		document.getElementById("tpn5").value,
	]

	const tr =
	[
		document.getElementById("trn1").value,
		document.getElementById("trn2").value,
		document.getElementById("trn3").value,
		document.getElementById("trn4").value,
		document.getElementById("trn5").value,
	]

	if (tp[0].trim() == "" && tp[1].trim() == "" && tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t2.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
		tp.splice(0, 5, "", "", "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[1].trim() == "" && tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t2.splice(1, 4, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
		tp.splice(1, 4, "", "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t2.splice(2, 3, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
		tp.splice(2, 3, "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t2.splice(3, 2, document .getElementById("t2n4").value, document.getElementById("t2n5").value)
		tp.splice(3, 2, "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t2[4] = document.getElementById("t2n5").value
		tp[4] = ""

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(0, 5, "", "", "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(1, 4, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(1, 4, "", "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(2, 3, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(2, 3, "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[3].trim() === "" && tr[4].trim() === "")
	{
        for (let i = 0; i < 5; i++) {
            const temp = t2[i];
            t2[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(3, 2, document.getElementById("t2n4").value, document.getElementById("t2n5").value)
        tr.splice(3, 2, "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t2n" + (i + 1)).value = t2[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++)
		{
			const temp = t2[i]
			t2[i] = tp[i]
			tp[i] = tr[i]
			tr[i] = temp
		}
		
		tp[4] = document.getElementById("t2n5").value;
		tr[4] = ""

		for (let i = 0; i < 5; i++)
		{
			document.getElementById("t2n" + (i + 1)).value = t2[i];
			document.getElementById("tpn" + (i + 1)).value = tp[i];
			document.getElementById("trn" + (i + 1)).value = tr[i];
		}
	}
	else if (tr[4].trim() !== "")
	{
		for (let i = 0; i < 5; i++)
		{
			const temp = t2[i]
			t2[i] = tp[i]
			tp[i] = tr[i]
			tr[i] = temp
		}
		

		for (let i = 0; i < 5; i++)
		{
			document.getElementById("t2n" + (i + 1)).value = t2[i];
			document.getElementById("tpn" + (i + 1)).value = tp[i];
			document.getElementById("trn" + (i + 1)).value = tr[i];
		}
	}
}
function t2w()
{
	const t1 =
	[
		document.getElementById("t1n1").value,
		document.getElementById("t1n2").value,
		document.getElementById("t1n3").value,
		document.getElementById("t1n4").value,
		document.getElementById("t1n5").value,
	]

	const tp =
	[
		document.getElementById("tpn1").value,
		document.getElementById("tpn2").value,
		document.getElementById("tpn3").value,
		document.getElementById("tpn4").value,
		document.getElementById("tpn5").value,
	]

	const tr =
	[
		document.getElementById("trn1").value,
		document.getElementById("trn2").value,
		document.getElementById("trn3").value,
		document.getElementById("trn4").value,
		document.getElementById("trn5").value,
	]

	if (tp[0].trim() == "" && tp[1].trim() == "" && tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t1.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
		tp.splice(0, 5, "", "", "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[1].trim() == "" && tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t1.splice(1, 4, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
		tp.splice(1, 4, "", "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[2].trim() == "" && tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t1.splice(2, 3, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
		tp.splice(2, 3, "", "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[3].trim() == "" && tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t1.splice(3, 2, document .getElementById("t1n4").value, document.getElementById("t1n5").value)
		tp.splice(3, 2, "", "")

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tp[4].trim() == "" && tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

		t1[4] = document.getElementById("t1n5").value
		tp[4] = ""

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[0].trim() == "" && tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(0, 5, "", "", "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[1].trim() == "" && tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(1, 4, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(1, 4, "", "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[2].trim() == "" && tr[3].trim() == "" && tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(2, 3, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(2, 3, "", "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[3].trim() === "" && tr[4].trim() === "")
	{
        for (let i = 0; i < 5; i++) {
            const temp = t1[i];
            t1[i] = tp[i];
            tp[i] = tr[i];
            tr[i] = temp;
        }

		tp.splice(3, 2, document.getElementById("t1n4").value, document.getElementById("t1n5").value)
        tr.splice(3, 2, "", "");

        for (let i = 0; i < 5; i++) {
            document.getElementById("t1n" + (i + 1)).value = t1[i];
            document.getElementById("tpn" + (i + 1)).value = tp[i];
            document.getElementById("trn" + (i + 1)).value = tr[i];
        }
	}
	else if (tr[4].trim() == "")
	{
		for (let i = 0; i < 5; i++)
		{
			const temp = t1[i]
			t1[i] = tp[i]
			tp[i] = tr[i]
			tr[i] = temp
		}
		
		tp[4] = document.getElementById("t1n5").value;
		tr[4] = ""

		for (let i = 0; i < 5; i++)
		{
			document.getElementById("t1n" + (i + 1)).value = t1[i];
			document.getElementById("tpn" + (i + 1)).value = tp[i];
			document.getElementById("trn" + (i + 1)).value = tr[i];
		}
	}
	else if (tr[4].trim() !== "")
	{
		for (let i = 0; i < 5; i++)
		{
			const temp = t1[i]
			t1[i] = tp[i]
			tp[i] = tr[i]
			tr[i] = temp
		}

		for (let i = 0; i < 5; i++)
		{
			document.getElementById("t1n" + (i + 1)).value = t1[i];
			document.getElementById("tpn" + (i + 1)).value = tp[i];
			document.getElementById("trn" + (i + 1)).value = tr[i];
		}
	}
}

let t1n1b, t1n2b, t1n3b, t1n4b, t1n5b,
t2n1b, t2n2b, t2n3b, t2n4b, t2n5b,
tpn1b, tpn2b, tpn3b, tpn4b, tpn5b,
trn1b, trn2b, trn3b, trn4b, trn5b

const t1b =
[
	t1n1b, t1n2b, t1n3b, t1n4b, t1n5b
]
const t2b =
[
	t2n1b, t2n2b, t2n3b, t2n4b, t2n5b
]
const tpb =
[
	tpn1b, tpn2b, tpn3b, tpn4b, tpn5b
]
const trb =
[
	trn1b, trn2b, trn3b, trn4b, trn5b
]

function setbackup()
{
	t1b.splice(0, 5, document.getElementById("t1n1").value, document.getElementById("t1n2").value, document.getElementById("t1n3").value, document.getElementById("t1n4").value, document.getElementById("t1n5").value)

	t2b.splice(0, 5, document.getElementById("t2n1").value, document.getElementById("t2n2").value, document.getElementById("t2n3").value, document.getElementById("t2n4").value, document.getElementById("t2n5").value)

	tpb.splice(0, 5, document.getElementById("tpn1").value, document.getElementById("tpn2").value, document.getElementById("tpn3").value, document.getElementById("tpn4").value, document.getElementById("tpn5").value)

	trb.splice(0, 5, document.getElementById("trn1").value, document.getElementById("trn2").value, document.getElementById("trn3").value, document.getElementById("trn4").value, document.getElementById("trn5").value)
}

let t1victories = 0
let t2victories = 0

let actualt1victories = 0
let actualt2victories = 0

function t1wins()
{
	actualt1victories = t1victories
	actualt2victories = t2victories
	t1victories += 1;
	t2victories = 0;
	
	setbackup();

	if (t1victories === 3)
	{
		t1victories = 0;
		t2victories = 0;
		t2w()
	}
	else
	{
		t1w()
	}
	updmml();
}

function t2wins()
{
	actualt1victories = t1victories
	actualt2victories = t2victories
	t2victories += 1;
	t1victories = 0;

	setbackup();

	if (t2victories === 3)
	{
		t1victories = 0;
		t2victories = 0;
		t1w()
	}
	else
	{
		t2w()
	}
	updmml();
}

function stalemate()
{
	t1w()
	t2w()
	t1victories = 0
	t2victories = 0
	updmml();
}

function mixplayers()
{
	setbackup();

	const players = [
		document.getElementById("t1n1").value,
		document.getElementById("t1n2").value,
		document.getElementById("t1n3").value,
		document.getElementById("t1n4").value,
		document.getElementById("t1n5").value,
		document.getElementById("t2n1").value,
		document.getElementById("t2n2").value,
		document.getElementById("t2n3").value,
		document.getElementById("t2n4").value,
		document.getElementById("t2n5").value,
	];
		
	for (let i = players.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[players[i], players[j]] = [players[j], players[i]];
	}
		
	document.getElementById("t1n1").value = players[0];
	document.getElementById("t1n2").value = players[1];
	document.getElementById("t1n3").value = players[2];
	document.getElementById("t1n4").value = players[3];
	document.getElementById("t1n5").value = players[4];
	document.getElementById("t2n1").value = players[5];
	document.getElementById("t2n2").value = players[6];
	document.getElementById("t2n3").value = players[7];
	document.getElementById("t2n4").value = players[8];
	document.getElementById("t2n5").value = players[9];
	
	updmml();
}

function clearplayers()
{
	setbackup();

	t1victories = 0
	t2victories = 0

	for (let i = 0; i < 5; i++)
	{
		document.getElementById("t1n" + (i + 1)).value = "";
		document.getElementById("t2n" + (i + 1)).value = "";
		document.getElementById("tpn" + (i + 1)).value = "";
		document.getElementById("trn" + (i + 1)).value = "";
	}

	updmml();
}

function backupplayers()
{
	t1victories = actualt1victories
	t2victories = actualt2victories

	for (let i = 0; i < 5; i++)
	{
		document.getElementById("t1n" + (i + 1)).value = t1b[i];
		document.getElementById("t2n" + (i + 1)).value = t2b[i];
		document.getElementById("tpn" + (i + 1)).value = tpb[i];
		document.getElementById("trn" + (i + 1)).value = trb[i];
	}

	updmml();
}

function paid(buttonId)
{
	if (buttonId.classList.contains("bx-square-rounded"))
	{
		buttonId.classList.remove("bx-square-rounded")
		buttonId.classList.add("bx-check-square")
		buttonId.classList.add("active")
	}
	else
	{
		buttonId.classList.add("bx-square-rounded")
		buttonId.classList.remove("bx-check-square")
		buttonId.classList.remove("active")
	}
}

function updmml() {
    const t1l = [
        document.getElementById("t1n1l"),
        document.getElementById("t1n2l"),
        document.getElementById("t1n3l"),
        document.getElementById("t1n4l"),
        document.getElementById("t1n5l")
    ];

    const t2l = [
        document.getElementById("t2n1l"),
        document.getElementById("t2n2l"),
        document.getElementById("t2n3l"),
        document.getElementById("t2n4l"),
        document.getElementById("t2n5l")
    ];

    for (let i = 0; i < 5; i++) {
        t1l[i].value = document.getElementById("t1n" + (i + 1)).value;
        t2l[i].value = document.getElementById("t2n" + (i + 1)).value;
    }
}
