var projects_gallery = document.getElementById("projects_gallery");

for (var i = 0; i < projects_data.length; i++) {
  projects_gallery.innerHTML +=
  `    
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card shadow h-100">
        <img src="`+ projects_data[i].image_path + `" class="card-img-top">
          <div class="card-body d-flex flex-column mx-2">
            <h5 class="card-title">`+ projects_data[i].project_name + `</h5>
            <p class="card-text" style="text-align: justify;">`+ projects_data[i].project_description + `</p>
            <a href="`+ projects_data[i].project_link + `" class="btn btn-dark rounded border-2 projects-btn" target="_blank">
              View Website<i class="bi bi-globe ms-2"></i>
            </a>
          </div>
      </div>
    </div>
  `
    ;
}

var core_skills = document.getElementById("core_skills");

for (var i = 0; i < cs_data.length; i++) {
  core_skills.innerHTML +=
  `
    <div class="col-12">
      <div class="card shadow-sm h-100 px-4">
        <div class="card-body">
          <h5 class="card-title text-center">
            <i class="`+ cs_data[i].cs_icon + ` me-2 `+ cs_data[i].icon_color + `"></i>`+ cs_data[i].cs + `
          </h5>
          <p class="card-text" style="text-align:justify;">
            `+ cs_data[i].cs_description + `
          </p>
        </div>
      </div>
    </div>
  `
    ;
}

var tech_stack = document.getElementById("tech_stack");

for (var i = 0; i < ts_data.length; i++) {

  var iconsHTML = "";

  for (var j = 0; j < ts_data[i].ts_icons.length; j++) {
    iconsHTML += `
      <img 
        src="${ts_data[i].ts_icons[j].src}" 
        alt="${ts_data[i].ts_icons[j].alt}" 
        title="${ts_data[i].ts_icons[j].alt}"
        style="height:24px; ${ts_data[i].ts_icons[j].style || ""}">
    `;
  }

  tech_stack.innerHTML += `
    <div class="col-12">
      <div class="card shadow-sm h-100 px-4">
        <div class="card-body">
          <h5 class="card-title mb-2 d-flex justify-content-center align-items-center gap-2">
            ${ts_data[i].ts}
            ${iconsHTML}
          </h5>
          <p class="card-text" style="text-align:justify;">
            ${ts_data[i].ts_description}
          </p>
        </div>
      </div>
    </div>
  `;
}

var contacts = document.getElementById("contacts");

for (var i = 0; i < contact_data.length; i++) {
  contacts.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card shadow-sm h-100 py-1">
        <div class="card-body">
          <h5 class="card-title">
            <i class="${contact_data[i].icon} me-2"></i>
            ${contact_data[i].label}
          </h5>
          <p class="card-text">
            ${contact_data[i].info}
          </p>
        </div>
      </div>
    </div>
  `;
}