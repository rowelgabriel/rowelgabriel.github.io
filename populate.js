var projects_gallery = document.getElementById("projects_gallery");

for (var i = 0; i < projects_data.length; i++) {
  projects_gallery.innerHTML +=
  `    
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card shadow h-100 projects-card">
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