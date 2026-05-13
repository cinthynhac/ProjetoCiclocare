
// =========================
// DROPDOWN MENU
// =========================

const dropdownBtn =
document.querySelector(".dropdown-btn");

const dropdownContent =
document.querySelector(".dropdown-content");

if (dropdownBtn && dropdownContent) {
  dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("active");
  });
}


// =========================
// SIDEBAR NOTIFICAÇÕES
// =========================

const bellIcon =
document.querySelector(".bell-icon");

const notificationSidebar =
document.querySelector(".notification-sidebar");

const closeSidebar =
document.querySelector(".close-sidebar");

// ABRIR SIDEBAR

if (bellIcon && notificationSidebar) {

  bellIcon.addEventListener("click", () => {

    notificationSidebar.classList.add("active");

  });
}

// FECHAR SIDEBAR

if (closeSidebar && notificationSidebar) {

  closeSidebar.addEventListener("click", () => {

    notificationSidebar.classList.remove("active");

  });
}

// =========================
// DROPDOWN PERFIL
// =========================

const usuarioInfo =
document.querySelector(".usuario-info");

const profileDropdown =
document.querySelector(".profile-dropdown");

if (usuarioInfo && profileDropdown) {

  usuarioInfo.addEventListener("click", () => {

    profileDropdown.classList.toggle("active");

  });
}

// =========================
// CALENDÁRIO
// =========================

const monthYear =
document.getElementById("monthYear");

const calendarGrid =
document.getElementById("calendarGrid");

const prevMonth =
document.getElementById("prevMonth");

const nextMonth =
document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar(date) {

  calendarGrid.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay =
  new Date(year, month, 1).getDay();

  const lastDate =
  new Date(year, month + 1, 0).getDate();

  const prevLastDate = new Date(year, month, 0).getDate();

  const monthNames = [

    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

  ];

  monthYear.textContent =
  `${monthNames[month]} ${year}`;

  for (let i = firstDay; i > 0; i--) {
    const dayElement = document.createElement("div");

    dayElement.classList.add("day", "other-month");
    dayElement.textContent = String(prevLastDate - i + 1).padStart(2, "0");

    calendarGrid.appendChild(dayElement);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayElement = document.createElement("div");

    dayElement.classList.add("day", "current-month");
    dayElement.textContent = String(day).padStart(2, "0");

    dayElement.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-grid .day")
        .forEach((item) => item.classList.remove("selected"));

      dayElement.classList.add("selected");
    });

    calendarGrid.appendChild(dayElement);
  }

    const totalCells = firstDay + lastDate;
  const nextDays = 42 - totalCells;

  for (let day = 1; day <= nextDays; day++) {
    const dayElement = document.createElement("div");

    dayElement.classList.add("day", "other-month");
    dayElement.textContent = String(day).padStart(2, "0");

    calendarGrid.appendChild(dayElement);
  }
  
}

// MÊS ANTERIOR

if (prevMonth) {

  prevMonth.addEventListener("click", () => {

    currentDate.setMonth(
      currentDate.getMonth() - 1
    );

    renderCalendar(currentDate);

  });
}

// PRÓXIMO MÊS

if (nextMonth) {

  nextMonth.addEventListener("click", () => {

    currentDate.setMonth(
      currentDate.getMonth() + 1
    );

    renderCalendar(currentDate);

  });
}

// INICIAR CALENDÁRIO

renderCalendar(currentDate);