function send() {
    var txtbox = document.getElementById("assistbox").value;
    var RandNumber = Math.floor(Math.random() * 2)
    const para = document.createElement("p");
    const node = document.createTextNode(`User: ${txtbox}`);
    para.appendChild(node);
    const element = document.getElementById("mainwindow");
    const child = document.getElementsByClassName("idk");
    element.appendChild(para, child);

    if (/Hello/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: Hello! How can I help?";
    } if (/e621/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: YOU ASKED FOR IT!";
        window.open("https://e621.net", '_blank');
    } if (/cezers/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: Slayed";
        window.open("https://cezers.tk", '_blank');
    } if (/wallpaper/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: Here's the wallpaper settings.";
        walldialog();
    } if (/add command/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: Opened form.";
        window.open("https://forms.gle/9aFzk6g3cw3mdDo78", '_blank');
    } if (/Help/i.test(txtbox)) {
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: Commands: Hello, Cezers, Wallpaper, Add Command, Help, e621, open [appname].";
    } if (/open/i.test(txtbox)) {
        const app = txtbox.split(' ').pop();
        var check = document.getElementById(app);
        if (/terminal/i.test(app)) {
            const para = document.createElement("p");
            element.appendChild(para, child);
            para.innerHTML = "DeskUtility: Enable Developer mode to open this. When enabled, run it from the start menu as running from DeskAssistant is disabled.";
            var objDiv = document.getElementById("mainwindow");
            objDiv.scrollTop = objDiv.scrollHeight;
            document.getElementById("assistbox").value = "";
            return;
        } else if (typeof (check) != 'undefined' && element != null) {
            document.getElementById(app).style.display = "block";
            focuswin(app)
        } else if (typeof (check) == 'undefined' && app == null) {
            const para = document.createElement("p");
            element.appendChild(para, child);
            para.innerHTML = "DeskUtility: Invalid app name! Try again in lowercase.";
            var objDiv = document.getElementById("mainwindow");
            objDiv.scrollTop = objDiv.scrollHeight;
            document.getElementById("assistbox").value = "";
            return;
        }
        const para = document.createElement("p");
        element.appendChild(para, child);
        para.innerHTML = "DeskUtility: This app should have opened. If not, try again in lowercase/check spelling.";
        menubgclose(); actionclose();
    }

    var objDiv = document.getElementById("mainwindow");
    objDiv.scrollTop = objDiv.scrollHeight;
    document.getElementById("assistbox").value = "";
}